import type { Locale } from "@/types";

const placeholder = "[PLACEHOLDER — confirm with FORGE]";

export const gymConfig = {
  name: "FORGE Training Club",
  shortName: "FORGE",
  description: "Strength training without the circus.",
  phone: placeholder,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || placeholder,
  email: process.env.GYM_CONTACT_EMAIL || placeholder,
  address: `[AREA], Lebanon — ${placeholder}`,
  mapUrl: "https://maps.google.com/?q=Lebanon",
  timeZone: "Asia/Beirut",
  openingHours: [
    { days: "Monday–Friday", hours: `[OPENING TIME]–[CLOSING TIME] ${placeholder}` },
    { days: "Saturday–Sunday", hours: `[WEEKEND HOURS] ${placeholder}` },
  ],
  socialLinks: { instagram: "", facebook: "" },
  brand: { background: "#0b0b0a", foreground: "#f4f0e7", accent: "#ff4d00" },
  trialBooking: { enabled: true, durationMinutes: 60, requiresMovementAssessment: true },
  defaultLocale: "en" as Locale,
  availableLocales: ["en", "ar", "fr"] as Locale[],
  announcement: { enabled: true, text: "Now preparing to open in [AREA] — placeholder announcement." },
  cookies: { storageKey: "forge-cookie-preferences", version: 1 },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  mockDataMode: process.env.MOCK_DATA_MODE !== "false",
} as const;
