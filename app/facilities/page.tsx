import { facilities } from "@/content/site";
import { PageHeader } from "@/components/ui/page-header";
import { FloorPlan } from "@/components/facilities/floor-plan";
export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The training floor"
        title="Facilities"
        description="A practical space organized around movement, coaching, and recovery."
      />
      <main className="container pb-24">
        <p className="placeholder-note my-6">
          Concept floor plan—not a surveyed or operating training facility.
        </p>
        <FloorPlan facilities={facilities} />
        <section className="mt-16">
          <h2 className="text-3xl font-black uppercase">Static zone list</h2>
          {facilities.map((f) => (
            <article className="border-t border-border py-5" key={f.id}>
              <h3 className="font-bold">{f.name}</h3>
              <p className="text-sm text-muted">{f.description}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
