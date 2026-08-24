import { PageHeader } from "@/components/ui/page-header";
import { ScheduleBrowser } from "@/components/schedule/schedule-browser";
import { classes, sampleSessions } from "@/content/classes";
import { trainers } from "@/content/trainers";
export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Demonstration timetable"
        title="Schedule"
        description="Filter illustrative sessions by day, class, coach, intensity, or experience level."
      />
      <main className="container pb-24">
        <p className="placeholder-note my-6">
          Fully interactive demonstration data—not live booking information.
        </p>
        <ScheduleBrowser
          sessions={sampleSessions}
          classes={classes}
          trainers={trainers}
        />
      </main>
    </>
  );
}
