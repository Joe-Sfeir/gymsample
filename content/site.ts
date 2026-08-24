import type { Facility, Faq, TrainingDay } from "@/types";

export const facilities: Facility[] = [
  {
    id: "strength-floor",
    name: "Strength Floor",
    description:
      "Six training bays keep coached barbell work visible and uncluttered.",
    zone: "Strength",
    equipment: [
      "Half racks",
      "Olympic barbells",
      "Adjustable benches",
      "Kettlebells",
    ],
    accessibilityNotes:
      "Step-free concept layout with 1.2 m circulation paths; shown for demonstration, not as a surveyed facility.",
    image: "/samples/gym/images/forge-hero.webp",
    svgRegionId: "zone-strength",
    placeholder: true,
  },
  {
    id: "conditioning-zone",
    name: "Conditioning Lane",
    description:
      "A long clear lane separates sled and erg intervals from barbell stations.",
    zone: "Engine",
    equipment: ["Rowers", "Air bikes", "Sleds", "Medicine balls"],
    accessibilityNotes:
      "Transfer space and equipment access are illustrative and require verification in any real venue.",
    image: "/samples/gym/images/forge-hero.webp",
    svgRegionId: "zone-conditioning",
    placeholder: true,
  },
  {
    id: "recovery-area",
    name: "Recovery Deck",
    description:
      "A quieter edge of the floor supports mobility, breathing, and cooldown work.",
    zone: "Reset",
    equipment: ["Mats", "Bands", "Foam rollers", "Low boxes"],
    accessibilityNotes:
      "The concept keeps this zone beside the entrance with a clear path and movable equipment.",
    image: "/samples/gym/images/forge-hero-mobile.webp",
    svgRegionId: "zone-recovery",
    placeholder: true,
  },
];

export const faqs: Faq[] = [
  {
    question: "Do I need training experience?",
    answer:
      "No. The demonstration journey begins with a movement assessment, and each class includes scalable options.",
  },
  {
    question: "Can I try a session first?",
    answer:
      "Yes. The trial flow returns a demo receipt so you can inspect the experience without creating a real appointment.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable training clothes, clean training shoes, and water. No purchase is required to test this fictional journey.",
  },
  {
    question: "Are class capacities live?",
    answer:
      "No. Seats and schedules are illustrative data. A real implementation would connect the same interface to a booking provider.",
  },
];

export const gymRules = [
  "Train with control and follow the coach’s session cues.",
  "Return equipment after use.",
  "Share relevant limitations privately before training.",
  "Arrive five minutes before class; late entry is subject to the illustrative studio policy.",
];
export const firstVisit = [
  "Choose a preferred class and time.",
  "Receive an immediate demonstration receipt.",
  "Review what a movement assessment would cover.",
  "Continue to WhatsApp only if you want to contact Spline about this demo.",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const trainingWeek: TrainingDay[] = days.map((day, index) => ({
  fullDayName: day,
  shortLabel: day.slice(0, 3),
  featuredClasses:
    index % 2
      ? ["FORGE Strength", "Mobility + Recovery"]
      : ["Strength Foundations", "Engine"],
  trainer: index % 2 ? "Karim Nassar" : "Maya Khoury",
  intensity: index === 6 ? "Low" : index % 2 ? "High" : "Moderate",
  capacityState: index === 2 ? "Nearly full" : "Available",
  startTimes: index > 4 ? ["09:00"] : ["07:00", "18:00"],
  backgroundImage:
    index % 2 ? "/samples/gym/images/forge-hero.webp" : "/samples/gym/images/forge-hero-mobile.webp",
  shortDescription:
    "An illustrative day in the fictional FORGE timetable. Filters and states are fully interactive; availability is not live.",
  mock: true,
}));

export const legalNotice =
  "Demonstration policy for a fictional business. It explains the intended product behavior and is not legal advice or a contract with an operating gym.";
