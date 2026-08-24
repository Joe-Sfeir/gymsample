import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { PricingSelector } from "@/components/memberships/pricing-selector";
import { memberships } from "@/content/memberships";
export default function MembershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Illustrative pricing"
        title="Memberships"
        description="Compare training access without fake discounts or forced commitments."
      />
      <main className="container pb-24">
        <p className="placeholder-note my-6">
          Demonstration prices and policies for a fictional business. No
          payment is collected.
        </p>
        <PricingSelector plans={memberships} />
        <section className="mt-20 border-t-2 border-border pt-10">
          <h2 className="text-4xl font-black uppercase">Your first session</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Book one trial session before choosing a membership. The trial
            begins with a movement assessment and a conversation about the
            appropriate coaching format.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link className="button button-accent" href="/trial-booking">
              Try the booking flow
            </Link>
            <Link className="button" href="/contact?inquiry=membership">
              WhatsApp inquiry
            </Link>
          </div>
          <p className="mt-8 text-sm">
            <Link className="underline" href="/membership-terms">
              Membership Terms
            </Link>{" "}
            ·{" "}
            <Link className="underline" href="/waiver-information">
              Waiver Information
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
