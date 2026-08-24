import { LegalTemplate } from "@/components/legal/legal-template";
export default function Page() {
  return (
    <LegalTemplate
      title="Privacy Policy"
      sections={[
        {
          heading: "Information handling",
          body: "This demonstration validates form input only long enough to return a receipt. It does not write submissions to a database, send them to a booking provider, or create an appointment.",
        },
        {
          heading: "Sensitive information",
          body: "Health or limitation notes are excluded from WhatsApp links, analytics, URLs, and the demonstration receipt. Do not enter urgent or clinical information into this concept form.",
        },
        {
          heading: "Contact",
          body: "Questions about this demonstration can be sent to spline@e19company.com or +961 76 300 011.",
        },
      ]}
    />
  );
}
