import { gymConfig } from "@/config/gym";

function url(message: string) {
  const number = gymConfig.whatsappNumber.replace(/[^0-9]/g, "");
  if (!number) return "#";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generalInquiryUrl() {
  return url("Hello Spline, I would like to ask about the FORGE gym concept.");
}

export function trialInquiryUrl(details?: {
  name?: string;
  preferredClass?: string;
}) {
  const parts = [
    "Hello Spline, I tried the FORGE gym booking demonstration and would like to discuss a similar system.",
  ];
  if (details?.name) parts.push(`Name: ${details.name}`);
  if (details?.preferredClass)
    parts.push(`Demo class viewed: ${details.preferredClass}`);
  return url(parts.join("\n"));
}

export function membershipInquiryUrl(plan?: string) {
  return url(
    `Hello Spline, I viewed the FORGE membership demonstration${plan ? ` (${plan})` : ""} and would like to discuss a similar system.`,
  );
}
