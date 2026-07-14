"use client";
import { useEffect, useRef } from "react";

const NODE_COUNT = 120;
const CONNECTION_DIST = 150;
const MOUSE_GRAB_DIST = 200;
const BASE_SPEED = 0.4;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let mouseX = -1000, mouseY = -1000;
    let animId = 0;
    let nodes: Node[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas!.width = w;
      canvas!.height = h;
      initNodes();
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = BASE_SPEED + Math.random() * 0.5;
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.5 + Math.random() * 2,
        });
      }
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, w, h);

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      }

      // Draw connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35;
            ctx!.strokeStyle = `rgba(34, 197, 94, ${alpha})`;
            ctx!.lineWidth = 0.7;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      // Mouse grab — draw lines from cursor to nearby nodes
      for (const node of nodes) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_GRAB_DIST) {
          const alpha = (1 - dist / MOUSE_GRAB_DIST) * 0.6;
          ctx!.strokeStyle = `rgba(34, 197, 94, ${alpha})`;
          ctx!.lineWidth = 0.8;
          ctx!.beginPath();
          ctx!.moveTo(node.x, node.y);
          ctx!.lineTo(mouseX, mouseY);
          ctx!.stroke();
        }
      }

      // Draw nodes (dots)
      for (const node of nodes) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nearMouse = dist < MOUSE_GRAB_DIST;
        const proximity = nearMouse ? 1 - dist / MOUSE_GRAB_DIST : 0;

        const r = nearMouse ? node.radius * (1 + proximity * 0.4) : node.radius;
        const alpha = nearMouse ? 0.5 + proximity * 0.5 : 0.4;

        ctx!.fillStyle = `rgba(34, 197, 94, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .particle-canvas {
            opacity: 0.35 !important;
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 70%) !important;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 70%) !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .particle-canvas { opacity: 0.4 !important; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 75%)",
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 75%)",
        }}
      />
    </>
  );
}
