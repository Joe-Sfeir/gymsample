"use client";
import Image from "next/image";
import { useState } from "react";
import type { TrainingDay } from "@/types";
export function TrainingWeek({ days }: { days: TrainingDay[] }) {
  const [active, setActive] = useState(0);
  const day = days[active];
  const move = (delta: number) =>
    setActive((current) => (current + delta + days.length) % days.length);
  return (
    <section
      className="section bg-surface"
      aria-labelledby="training-week-title"
    >
      <div className="container">
        <p className="eyebrow">Demonstration schedule</p>
        <h2
          id="training-week-title"
          className="mt-3 text-5xl font-black uppercase"
        >
          Training Week
        </h2>
        <p className="placeholder-note mt-5">
          Illustrative times, coaches, and capacities—not live availability.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[12rem_1fr]">
          <div
            role="tablist"
            aria-label="Training days"
            className="flex gap-2 overflow-x-auto lg:sticky lg:top-28 lg:block lg:self-start"
          >
            {days.map((item, index) => (
              <button
                role="tab"
                aria-selected={active === index}
                aria-controls="training-day-panel"
                id={"day-tab-" + index}
                tabIndex={active === index ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                    e.preventDefault();
                    move(1);
                  }
                  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    e.preventDefault();
                    move(-1);
                  }
                }}
                className={
                  "min-h-12 min-w-20 border-l-4 px-4 py-3 text-left font-black uppercase " +
                  (active === index
                    ? "border-accent bg-background text-accent"
                    : "border-border")
                }
                onClick={() => setActive(index)}
                key={item.fullDayName}
              >
                {item.shortLabel}
              </button>
            ))}
          </div>
          <div
            id="training-day-panel"
            role="tabpanel"
            aria-labelledby={"day-tab-" + active}
            className="training-day-media relative min-h-[30rem] overflow-hidden border-2 border-border"
            data-reactive-media
          >
            <Image
              src={day.backgroundImage}
              alt="Fictional FORGE training session"
              fill
              className="object-cover opacity-45"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
            <div className="relative z-10 flex min-h-[30rem] flex-col justify-end bg-gradient-to-t from-black via-black/50 p-7 sm:p-10">
              <p className="eyebrow">
                Day {active + 1} / {days.length}
              </p>
              <h3 className="mt-3 text-5xl font-black uppercase sm:text-7xl">
                {day.fullDayName}
              </h3>
              <p className="mt-5 max-w-xl">{day.shortDescription}</p>
              <dl className="mt-8 grid gap-5 sm:grid-cols-3">
                <div>
                  <dt className="eyebrow">Classes</dt>
                  <dd>{day.featuredClasses.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Coach / intensity</dt>
                  <dd>
                    {day.trainer} · {day.intensity}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Times / capacity</dt>
                  <dd>
                    {day.startTimes.join(" · ")} · {day.capacityState}
                  </dd>
                </div>
              </dl>
              <div className="mt-7 flex gap-3 lg:hidden">
                <button className="button" onClick={() => move(-1)}>
                  Previous
                </button>
                <button className="button" onClick={() => move(1)}>
                  Next
                </button>
              </div>
              <div
                className="mt-7 h-1 bg-border"
                aria-label={active + 1 + " of " + days.length}
                role="progressbar"
                aria-valuenow={active + 1}
                aria-valuemin={1}
                aria-valuemax={days.length}
              >
                <span
                  className="block h-full bg-accent"
                  style={{ width: ((active + 1) / days.length) * 100 + "%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
