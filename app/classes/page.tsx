import Link from "next/link";
import { classes } from "@/content/classes";
import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Training"
        title="Classes"
        description="Coached strength and conditioning sessions with clear intent."
      />
      <main className="container pb-24">
        <PlaceholderNote>
          Illustrative programme and capacity data for this fictional concept.
          No live seat is reserved.
        </PlaceholderNote>
        <div className="divide-y-2 divide-border border-y-2 border-border">
          {classes.map((item) => (
            <article
              className="grid gap-5 py-8 md:grid-cols-[1fr_auto]"
              key={item.id}
            >
              <div>
                <p className="eyebrow">{item.accentLabel}</p>
                <h2 className="mt-2 text-3xl font-black uppercase">
                  {item.name}
                </h2>
                <p className="mt-3 max-w-xl text-muted">
                  {item.shortDescription}
                </p>
              </div>
              <Link
                className="button self-center"
                href={`/classes/${item.slug}`}
              >
                View class
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
