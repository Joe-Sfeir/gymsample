import { LegalTemplate } from "@/components/legal/legal-template";
const sections = [
  { heading: "Billing and renewals", body: "Prices are illustrative and no payment method is collected. A production system would show renewal dates and obtain explicit purchase consent." },
  { heading: "Cancellation, freezing, and refunds", body: "The displayed freeze and cancellation summaries demonstrate where operator-approved rules would appear. They do not create rights against a fictional business." },
  { heading: "Classes and late arrivals", body: "Demonstration sessions use fixed capacity states. No live seat, waitlist position, or attendance record is created." },
  { heading: "Gym rules, age restrictions, and guests", body: "The concept rules describe respectful use of a training floor. A real operator must publish its verified age, guest, and supervision rules." },
  { heading: "Belongings, health disclosures, and photography", body: "Do not submit urgent or clinical information. The demo excludes limitation notes from URLs and does not retain form submissions." },
  { heading: "Liability and disputes", body: "This concept does not provide training or medical advice and is not a contract with an operating gym." },
];
export default function Page() {
  return (
    <LegalTemplate
      title="Membership Terms"
      sections={sections}
    />
  );
}
