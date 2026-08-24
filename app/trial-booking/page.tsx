import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { TrialBookingForm } from "@/components/forms/trial-booking-form";
import { trialInquiryUrl } from "@/lib/whatsapp/urls";
export default function TrialBookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start here"
        title="Try the booking flow"
        description="See how a first-session request works without creating a real appointment."
      />
      <main className="container pb-24">
        <p className="placeholder-note my-6">
          Safe demonstration: submissions are validated and acknowledged, then
          discarded. No personal data is retained and no appointment is made.
        </p>
        <TrialBookingForm />
        <aside className="mt-12 border-t-2 border-border pt-7">
          <h2 className="text-2xl font-black uppercase">Prefer WhatsApp?</h2>
          <p className="mt-3 text-muted">
            The prepared message never includes injury or limitation
            information.
          </p>
          <Link
            className="button mt-5"
            href={trialInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp inquiry
          </Link>
        </aside>
      </main>
    </>
  );
}
