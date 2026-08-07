import React, { useEffect, useRef } from 'react';

export default function GlobeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const globeRadius = Math.min(width, height) * 0.35;
    const centerY = height * 0.45;

    let rotation = 0;
    const points = [];
    const numPoints = 140;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      points.push({
        x: globeRadius * Math.cos(theta) * Math.sin(phi),
        y: globeRadius * Math.sin(theta) * Math.sin(phi),
        z: globeRadius * Math.cos(phi),
        baseRadius: Math.random() * 2 + 1.5,
      });
    }

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const currentCenterX = window.innerWidth < 1024 ? width * 0.5 : width * 0.72;
      rotation += 0.005;

      // Radial ambient glow
      const safeGlobeRadius = Math.max(10, globeRadius);
      const gradient = ctx.createRadialGradient(
        currentCenterX,
        centerY,
        safeGlobeRadius * 0.6,
        currentCenterX,
        centerY,
        safeGlobeRadius * 1.3
      );
      gradient.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
      gradient.addColorStop(0.6, 'rgba(123, 44, 191, 0.08)');
      gradient.addColorStop(1, 'rgba(1, 1, 36, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(currentCenterX, centerY, Math.max(0.1, safeGlobeRadius * 1.4), 0, Math.PI * 2);
      ctx.fill();

      // Longitude / latitude glowing rings
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
      ctx.lineWidth = 1;
      for (let r = 0.3; r <= 1; r += 0.2) {
        ctx.beginPath();
        const rx = Math.max(0.1, safeGlobeRadius * r);
        const ry = Math.max(0.1, safeGlobeRadius);
        ctx.ellipse(currentCenterX, centerY, rx, ry, rotation * 0.5, 0, Math.PI * 2);
        ctx.stroke();
      }

      const projected = [];

      points.forEach((p) => {
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);

        const rx = p.x * cosR - p.z * sinR;
        const rz = p.x * sinR + p.z * cosR;

        const distance = Math.max(1, 300 + rz);
        const scale = Math.max(0.1, 300 / distance);
        const px = currentCenterX + rx * scale;
        const py = centerY + p.y * scale;
        const alpha = Math.max(0.1, (rz + safeGlobeRadius) / (2 * safeGlobeRadius));

        projected.push({ x: px, y: py, alpha, z: rz });

        const pointRadius = Math.max(0.1, p.baseRadius * scale);

        ctx.beginPath();
        ctx.arc(px, py, pointRadius, 0, Math.PI * 2);
        ctx.fillStyle = rz > 0 ? `rgba(0, 242, 254, ${alpha * 0.9})` : `rgba(123, 44, 191, ${alpha * 0.5})`;
        ctx.shadowBlur = rz > 0 ? 10 : 0;
        ctx.shadowColor = '#00F2FE';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Network lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        if (projected[i].z < -20) continue;
        for (let j = i + 1; j < projected.length; j++) {
          if (projected[j].z < -20) continue;
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            const edgeAlpha = (1 - dist / 75) * projected[i].alpha * 0.4;
            ctx.strokeStyle = `rgba(0, 242, 254, ${edgeAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0 pointer-events-none z-[1]" />;
}
