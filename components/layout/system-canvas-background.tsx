"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type AmbientNode = {
  x: number;
  y: number;
  depth: number;
  radius: number;
  vx: number;
  vy: number;
  pulse: number;
  phase: number;
};

type CoreNode = {
  angle: number;
  radius: number;
  speed: number;
  phase: number;
  size: number;
};

const GRID_COLOR = "143, 185, 214";
const ACCENT_COLOR = "139, 208, 192";
const CORE_COLOR = "214, 237, 249";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export function SystemCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const anchorRefreshKeyRef = useRef(0);
  const pointerResetKeyRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    anchorRefreshKeyRef.current += 1;
    pointerResetKeyRef.current += 1;
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const canvasElement = canvas;

    const context = canvasElement.getContext("2d", { alpha: true });

    if (!context) {
      return;
    }

    const ctx = context;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coreNodes: CoreNode[] = Array.from({ length: 16 }, (_, index) => ({
      angle: (Math.PI * 2 * index) / 16,
      radius: 28 + (index % 5) * 14 + Math.random() * 18,
      speed: 0.04 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
      size: 1.8 + Math.random() * 1.8,
    }));

    let width = 0;
    let height = 0;
    let dpr = 1;
    let ambientNodes: AmbientNode[] = [];
    let animationFrame = 0;
    let lastTime = 0;
    let coreAnchorElement: HTMLElement | null = null;
    let isRunning = true;
    let lastAnchorRefreshKey = anchorRefreshKeyRef.current;
    let lastPointerResetKey = pointerResetKeyRef.current;

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    function buildAmbientNodes() {
      const area = width * height;
      const count = clamp(Math.round(area / 24000), 38, 76);

      ambientNodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        depth: 0.25 + Math.random() * 0.95,
        radius: 0.8 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.012,
        vy: (Math.random() - 0.5) * 0.01,
        pulse: 0.25 + Math.random() * 0.75,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvasElement.width = Math.floor(width * dpr);
      canvasElement.height = Math.floor(height * dpr);
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildAmbientNodes();
    }

    function getCoreAnchor() {
      if (lastAnchorRefreshKey !== anchorRefreshKeyRef.current) {
        lastAnchorRefreshKey = anchorRefreshKeyRef.current;
        coreAnchorElement = null;
      }

      if (!coreAnchorElement || !document.body.contains(coreAnchorElement)) {
        coreAnchorElement = document.querySelector<HTMLElement>("[data-system-core-anchor]");
      }

      const target = coreAnchorElement;

      if (!target) {
        return {
          x: width * 0.72,
          y: height * 0.34,
          radius: Math.min(width, height) * 0.17,
          opacity: 0.9,
        };
      }

      const rect = target.getBoundingClientRect();
      const visibleWidth = clamp(Math.min(rect.right, width) - Math.max(rect.left, 0), 0, rect.width);
      const visibleHeight = clamp(Math.min(rect.bottom, height) - Math.max(rect.top, 0), 0, rect.height);
      const visibility =
        rect.width > 0 && rect.height > 0
          ? clamp((visibleWidth * visibleHeight) / (rect.width * rect.height), 0, 1)
          : 0;

      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        radius: Math.max(rect.width, rect.height) * 0.36,
        opacity: visibility,
      };
    }

    function drawGrid(time: number) {
      const horizonY = height * 0.33 + pointer.y * 24;
      const vanishingX = width * 0.5 + pointer.x * 72;
      const rows = 13;

      ctx.save();
      ctx.lineWidth = 1;

      for (let row = 0; row < rows; row += 1) {
        const t = row / (rows - 1);
        const eased = Math.pow(t, 1.7);
        const y = lerp(horizonY + 8, height + 140, eased) + Math.sin(time * 0.00006 + row * 0.18) * 2;
        const alpha = 0.035 + (1 - t) * 0.08;

        ctx.strokeStyle = `rgba(${GRID_COLOR}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(-120, y);
        ctx.lineTo(width + 120, y);
        ctx.stroke();
      }

      const columns = Math.ceil(width / 90) + 4;

      for (let column = -columns; column <= columns; column += 1) {
        const spread = column * 94;
        const topX = vanishingX + spread * 0.055;
        const bottomX = width / 2 + spread + pointer.x * 38;
        const alpha = 0.05 + Math.max(0, 0.08 - Math.abs(column) * 0.003);

        ctx.strokeStyle = `rgba(${GRID_COLOR}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(topX, horizonY);
        ctx.lineTo(bottomX, height + 160);
        ctx.stroke();
      }

      ctx.restore();
    }

    function drawAmbientNetwork(time: number, delta: number) {
      const positions: Array<{ x: number; y: number; depth: number; radius: number }> = [];
      const motionScale = reducedMotionQuery.matches ? 0.25 : 1;

      for (const node of ambientNodes) {
        node.x += node.vx * delta * node.depth * motionScale;
        node.y += node.vy * delta * node.depth * motionScale;

        if (node.x < -40) node.x = width + 40;
        if (node.x > width + 40) node.x = -40;
        if (node.y < -40) node.y = height + 40;
        if (node.y > height + 40) node.y = -40;

        const layerParallax = (node.depth - 0.2) * 34;
        const pulse = 0.55 + Math.sin(time * 0.0012 * node.pulse + node.phase) * 0.2;
        const x = node.x + pointer.x * layerParallax;
        const y = node.y + pointer.y * layerParallax * 0.8;
        const radius = node.radius * (0.8 + node.depth * 0.55) * pulse;

        positions.push({ x, y, depth: node.depth, radius });
      }

      ctx.save();

      for (let i = 0; i < positions.length; i += 1) {
        const current = positions[i];

        for (let j = i + 1; j < positions.length; j += 1) {
          const next = positions[j];
          const dx = current.x - next.x;
          const dy = current.y - next.y;
          const distance = Math.hypot(dx, dy);
          const threshold = 70 + (1.7 - (current.depth + next.depth) * 0.5) * 48;

          if (distance > threshold) {
            continue;
          }

          const alpha = (1 - distance / threshold) * 0.12;
          ctx.strokeStyle = `rgba(${GRID_COLOR}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(current.x, current.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      }

      for (const node of positions) {
        const alpha = 0.18 + node.depth * 0.3;

        ctx.fillStyle = `rgba(${CORE_COLOR}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${GRID_COLOR}, ${0.08 + node.depth * 0.08})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function drawCore(time: number) {
      const anchor = getCoreAnchor();

      if (anchor.opacity <= 0.01) {
        return;
      }

      const anchored = !!coreAnchorElement;
      const parallaxX = anchored ? 18 : 8;
      const parallaxY = anchored ? 12 : 5;
      const coreX = anchor.x + pointer.x * parallaxX;
      const coreY = anchor.y + pointer.y * parallaxY;
      const radius = anchored ? anchor.radius : anchor.radius * 0.72;
      const opacity = anchored ? anchor.opacity : anchor.opacity * 0.42;

      ctx.save();
      ctx.translate(coreX, coreY);
      ctx.globalAlpha = opacity;

      const glow = ctx.createRadialGradient(0, 0, radius * 0.08, 0, 0, radius * 1.3);
      glow.addColorStop(0, "rgba(214, 237, 249, 0.12)");
      glow.addColorStop(0.28, "rgba(143, 185, 214, 0.12)");
      glow.addColorStop(0.62, "rgba(139, 208, 192, 0.06)");
      glow.addColorStop(1, "rgba(5, 8, 13, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      const rings = [
        { r: radius * 0.42, speed: 0.00022, alpha: 0.24, dash: [] as number[] },
        { r: radius * 0.68, speed: -0.00016, alpha: 0.16, dash: [8, 12] },
        { r: radius * 0.98, speed: 0.0001, alpha: 0.12, dash: [20, 18] },
      ];

      for (const ring of rings) {
        ctx.save();
        ctx.rotate(time * ring.speed);
        ctx.lineWidth = 1;
        ctx.setLineDash(ring.dash);
        ctx.strokeStyle = `rgba(${GRID_COLOR}, ${ring.alpha})`;
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      ctx.strokeStyle = `rgba(${ACCENT_COLOR}, 0.12)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-radius * 1.15, 0);
      ctx.lineTo(radius * 1.15, 0);
      ctx.moveTo(0, -radius * 1.15);
      ctx.lineTo(0, radius * 1.15);
      ctx.stroke();
      ctx.restore();

      const clusterPoints: Array<{ x: number; y: number; size: number }> = [];

      for (const node of coreNodes) {
        const angle = node.angle + time * node.speed + node.phase;
        const orbitalRadius = node.radius + Math.sin(time * 0.001 + node.phase) * 6;
        const x = Math.cos(angle) * orbitalRadius;
        const y = Math.sin(angle * 1.06) * orbitalRadius * 0.78;

        clusterPoints.push({ x, y, size: node.size });
      }

      ctx.save();
      ctx.lineWidth = 0.9;

      for (let i = 0; i < clusterPoints.length; i += 1) {
        const current = clusterPoints[i];

        for (let j = i + 1; j < clusterPoints.length; j += 1) {
          const next = clusterPoints[j];
          const distance = Math.hypot(current.x - next.x, current.y - next.y);

          if (distance > radius * 0.48) {
            continue;
          }

          const alpha = (1 - distance / (radius * 0.48)) * 0.17;
          ctx.strokeStyle = `rgba(${CORE_COLOR}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(current.x, current.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      }

      for (const point of clusterPoints) {
        ctx.fillStyle = "rgba(214, 237, 249, 0.88)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(143, 185, 214, 0.18)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      const pulse = 1 + Math.sin(time * 0.0024) * 0.04;
      const centerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 0.25 * pulse);
      centerGradient.addColorStop(0, "rgba(214, 237, 249, 0.92)");
      centerGradient.addColorStop(0.36, "rgba(143, 185, 214, 0.34)");
      centerGradient.addColorStop(1, "rgba(143, 185, 214, 0)");
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.25 * pulse, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function render(time: number) {
      if (!isRunning) {
        return;
      }

      const delta = lastTime ? Math.min(time - lastTime, 32) : 16;
      lastTime = time;

      if (lastPointerResetKey !== pointerResetKeyRef.current) {
        lastPointerResetKey = pointerResetKeyRef.current;
        pointer.x = 0;
        pointer.y = 0;
        pointer.targetX = 0;
        pointer.targetY = 0;
      }

      pointer.x = lerp(pointer.x, pointer.targetX, reducedMotionQuery.matches ? 0.03 : 0.06);
      pointer.y = lerp(pointer.y, pointer.targetY, reducedMotionQuery.matches ? 0.03 : 0.06);

      ctx.clearRect(0, 0, width, height);

      const background = ctx.createLinearGradient(0, 0, 0, height);
      background.addColorStop(0, "#061019");
      background.addColorStop(0.42, "#05080d");
      background.addColorStop(1, "#04070b");
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      drawGrid(time);
      drawAmbientNetwork(time, delta);
      drawCore(time);

      animationFrame = window.requestAnimationFrame(render);
    }

    function handlePointerMove(event: PointerEvent) {
      pointer.targetX = ((event.clientX / window.innerWidth) * 2 - 1) * 0.85;
      pointer.targetY = ((event.clientY / window.innerHeight) * 2 - 1) * 0.85;
    }

    function handlePointerReset() {
      pointer.targetX = 0;
      pointer.targetY = 0;
    }

    function handlePointerOut(event: PointerEvent) {
      if (event.relatedTarget === null) {
        handlePointerReset();
      }
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        handlePointerReset();
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", handlePointerReset);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animationFrame = window.requestAnimationFrame(render);

    return () => {
      isRunning = false;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handlePointerReset);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="system-canvas" />;
}
