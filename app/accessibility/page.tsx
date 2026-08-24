import { LegalTemplate } from "@/components/legal/legal-template";
export default function Page() {
  return (
    <LegalTemplate
      title="Accessibility Statement"
      sections={[
        {
          heading: "Commitment",
          body: "FORGE intends to provide a usable digital experience and a welcoming training environment.",
        },
        {
          heading: "Current status",
          body: "The interface supports keyboard navigation, visible focus, reduced motion, labeled controls, and responsive layouts. Physical-facility notes are illustrative because FORGE is not an operating venue.",
        },
        {
          heading: "Feedback",
          body: "Send accessibility feedback about this demonstration to spline@e19company.com or call +961 76 300 011.",
        },
      ]}
    />
  );
}
