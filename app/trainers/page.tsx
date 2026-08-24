import Link from "next/link";
import { trainers } from "@/content/trainers";
import { classes } from "@/content/classes";
import { PageHeader } from "@/components/ui/page-header";
import { TrainerIndex } from "@/components/trainers/trainer-index";
export default function TrainersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fictional profiles"
        title="Trainers"
        description="Meet the people responsible for the room and the work."
      />
      <main className="container pb-24">
        <p className="placeholder-note my-6">
          Maya and Karim are fictional people created for this Spline concept;
          no credentials or employment claims are made.
        </p>
        <TrainerIndex trainers={trainers} classes={classes} />
        <Link className="button button-accent mt-8" href="/trial-booking">
          Try the booking flow
        </Link>
      </main>
    </>
  );
}
