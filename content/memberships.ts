import type { Membership } from "@/types";

export const memberships: Membership[] = [
  {
    id: "essential",
    name: "Essential",
    description: "A steady rhythm of coached group training.",
    monthlyPrice: 70,
    quarterlyPrice: 195,
    annualPrice: 720,
    currency: "USD",
    includedClasses: "Eight coached group sessions every 30 days",
    coachingSessions: "One movement check-in each quarter",
    accessTimes: "Any scheduled group class with an available demo seat",
    trialEligibility: "One demonstration trial request before choosing a plan",
    freezePolicySummary:
      "One 14-day freeze per quarter in this illustrative policy",
    cancellationSummary:
      "Cancel before the next billing date in this illustrative policy",
    featured: false,
    active: true,
    placeholder: true,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    description: "Flexible access for a higher-frequency training week.",
    monthlyPrice: 110,
    quarterlyPrice: 300,
    annualPrice: 1080,
    currency: "USD",
    includedClasses:
      "Unlimited scheduled group classes, subject to demo capacity",
    coachingSessions: "One movement check-in each month",
    accessTimes: "Any scheduled group class with an available demo seat",
    trialEligibility: "One demonstration trial request before choosing a plan",
    freezePolicySummary:
      "One 30-day freeze every six months in this illustrative policy",
    cancellationSummary:
      "Cancel before the next billing date in this illustrative policy",
    featured: true,
    active: true,
    placeholder: true,
  },
];
