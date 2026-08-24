import { LegalTemplate } from "@/components/legal/legal-template";
export default function Page() {
  return (
    <LegalTemplate
      title="Terms of Service"
      sections={[
        {
          heading: "Website use",
          body: "This website is a fictional Spline concept provided for evaluation. You may explore its controls and submit test data, but must not treat the content as an offer from an operating gym.",
        },
        {
          heading: "Bookings",
          body: "No submission creates a booking, membership, payment, or service relationship. Demonstration receipts are confirmations of interface behavior only.",
        },
        {
          heading: "Governing terms",
          body: "These demonstration terms are explanatory product content, not legal advice or a substitute for policies reviewed for a real operator and jurisdiction.",
        },
      ]}
    />
  );
}
