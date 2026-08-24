import type { Trainer } from "@/types";

export const trainers: Trainer[] = [
  {
    id: "coach-one",
    slug: "maya-khoury",
    name: "Maya Khoury",
    role: "Strength coach · fictional profile",
    shortBiography:
      "Maya teaches foundational lifting with calm, precise cues.",
    fullBiography:
      "Maya is an illustrative FORGE coach created for this Spline concept demonstration. Her profile shows how a studio can explain coaching style without inventing professional credentials.",
    specialties: ["Strength fundamentals", "Barbell coaching"],
    credentials: ["Concept profile · no credential claims"],
    classIds: ["strength-foundations", "forge-strength", "mobility-recovery"],
    photo: "/samples/gym/images/coach-maya.webp",
    socialLinks: {},
    active: true,
    placeholder: true,
  },
  {
    id: "coach-two",
    slug: "karim-nassar",
    name: "Karim Nassar",
    role: "Conditioning coach · fictional profile",
    shortBiography:
      "Karim builds conditioning sessions around pacing and repeatable effort.",
    fullBiography:
      "Karim is an illustrative FORGE coach created for this Spline concept demonstration. The biography is intentionally limited to coaching approach and makes no certification or outcome claims.",
    specialties: ["Conditioning", "Sled and erg pacing"],
    credentials: ["Concept profile · no credential claims"],
    classIds: ["engine", "forge-strength"],
    photo: "/samples/gym/images/coach-karim.webp",
    socialLinks: {},
    active: true,
    placeholder: true,
  },
];
