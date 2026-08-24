import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { generalInquiryUrl } from "@/lib/whatsapp/urls";
import { gymConfig } from "@/config/gym";
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talk to us"
        title="Contact"
        description="Contact Spline about adapting this concept for a real training business."
      />
      <main className="container grid gap-12 pb-24 lg:grid-cols-[1fr_.7fr]">
        <div>
          <p className="placeholder-note my-6">
            FORGE is fictional. This form returns a demonstration receipt and
            does not retain your message.
          </p>
          <ContactForm />
        </div>
        <aside className="border-l-4 border-accent pl-6">
          <h2 className="text-3xl font-black uppercase">Spline contact</h2>
          <p className="mt-5 text-muted">
            {gymConfig.address}
            <br />
            {gymConfig.phone}
            <br />
            {gymConfig.email}
          </p>
          <Link
            className="button mt-6"
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp inquiry
          </Link>
        </aside>
      </main>
    </>
  );
}
