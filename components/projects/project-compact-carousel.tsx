"use client";

import {
  useEffect,
  useMemo,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

import {
  ProjectCompactStrip,
  type CompactProjectItem,
} from "@/components/projects/project-compact-strip";
import type { SiteContent } from "@/data/site-content";

type ProjectCompactCarouselProps = {
  items: CompactProjectItem[];
  actionLabels: SiteContent["copy"]["projectActions"];
};

export function ProjectCompactCarousel({
  items,
  actionLabels,
}: ProjectCompactCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const duplicateStartRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const suppressClickRef = useRef(false);
  const suppressResetTimeoutRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const repeatedItems = useMemo(
    () => (items.length > 1 ? [...items, ...items] : items),
    [items],
  );

  useEffect(() => {
    const track = trackRef.current;
    const duplicateStart = duplicateStartRef.current;

    if (!track || !duplicateStart) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches || items.length < 2) {
      track.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    let frameId = 0;
    let lastTimestamp = performance.now();
    const normalizeOffset = (value: number, cycleWidth: number) => {
      if (!cycleWidth) {
        return 0;
      }

      let nextValue = value;

      while (nextValue < 0) {
        nextValue += cycleWidth;
      }

      while (nextValue >= cycleWidth) {
        nextValue -= cycleWidth;
      }

      return nextValue;
    };

    const step = (timestamp: number) => {
      const cycleWidth = duplicateStart.offsetLeft;

      if (!cycleWidth) {
        frameId = window.requestAnimationFrame(step);
        return;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPausedRef.current && !isDraggingRef.current) {
        offsetRef.current = normalizeOffset(offsetRef.current + delta * 0.018, cycleWidth);
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      if (suppressResetTimeoutRef.current) {
        window.clearTimeout(suppressResetTimeoutRef.current);
      }

      window.cancelAnimationFrame(frameId);
      offsetRef.current = 0;
      track.style.transform = "translate3d(0, 0, 0)";
    };
  }, [items]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    if (!viewport || items.length < 2) {
      return;
    }

    if (suppressResetTimeoutRef.current) {
      window.clearTimeout(suppressResetTimeoutRef.current);
      suppressResetTimeoutRef.current = null;
    }

    isDraggingRef.current = true;
    isPausedRef.current = true;
    suppressClickRef.current = false;
    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    const duplicateStart = duplicateStartRef.current;

    if (
      !isDraggingRef.current ||
      pointerIdRef.current !== event.pointerId ||
      !track ||
      !duplicateStart
    ) {
      return;
    }

    const cycleWidth = duplicateStart.offsetLeft;

    if (!cycleWidth) {
      return;
    }

    const delta = event.clientX - dragStartXRef.current;

    if (Math.abs(delta) > 6) {
      suppressClickRef.current = true;
    }

    let nextOffset = dragStartOffsetRef.current - delta;

    while (nextOffset < 0) {
      nextOffset += cycleWidth;
    }

    while (nextOffset >= cycleWidth) {
      nextOffset -= cycleWidth;
    }

    offsetRef.current = nextOffset;
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  }

  function handlePointerEnd(event: ReactPointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;

    if (pointerIdRef.current !== event.pointerId) {
      return;
    }

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    isDraggingRef.current = false;
    isPausedRef.current = false;
    pointerIdRef.current = null;

    if (suppressClickRef.current) {
      suppressResetTimeoutRef.current = window.setTimeout(() => {
        suppressClickRef.current = false;
        suppressResetTimeoutRef.current = null;
      }, 0);
    }
  }

  function handleClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (!suppressClickRef.current) {
      return;
    }

    if (suppressResetTimeoutRef.current) {
      window.clearTimeout(suppressResetTimeoutRef.current);
      suppressResetTimeoutRef.current = null;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  }

  return (
    <div
      ref={viewportRef}
      className="tertiary-carousel"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (!isDraggingRef.current) {
          isPausedRef.current = false;
        }
      }}
      onFocusCapture={() => {
        isPausedRef.current = true;
      }}
      onBlurCapture={() => {
        if (!isDraggingRef.current) {
          isPausedRef.current = false;
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onDragStartCapture={(event) => {
        event.preventDefault();
      }}
      onClickCapture={handleClickCapture}
    >
      <div ref={trackRef} className="tertiary-carousel__track">
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            ref={index === items.length ? duplicateStartRef : null}
            className="tertiary-carousel__item"
          >
            <ProjectCompactStrip item={item} actionLabels={actionLabels} />
          </div>
        ))}
      </div>
    </div>
  );
}
