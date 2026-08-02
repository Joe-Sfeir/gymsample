"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MotionSystem() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    document.documentElement.classList.add("motion-ready");
    const targets = document.querySelectorAll<HTMLElement>(
      ".section, [data-reveal], article, details, .placeholder-note",
    );
    targets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    targets.forEach((target) => observer.observe(target));

    const media = document.querySelectorAll<HTMLElement>("[data-reactive-media]");
    const cleanups: Array<() => void> = [];
    media.forEach((element) => {
      const move = (event: PointerEvent) => {
        const box = element.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        element.style.setProperty("--pointer-x", x.toFixed(3));
        element.style.setProperty("--pointer-y", y.toFixed(3));
      };
      const reset = () => {
        element.style.setProperty("--pointer-x", "0");
        element.style.setProperty("--pointer-y", "0");
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      cleanups.push(() => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
      });
    });

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        const value = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
        progress.current?.style.setProperty("transform", `scaleX(${value})`);
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return <div ref={progress} className="scroll-progress" aria-hidden="true" />;
}
