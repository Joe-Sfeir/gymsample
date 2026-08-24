import type { Locale } from "@/types";

export const gymConfig = {
  name: "FORGE Training Club",
  shortName: "FORGE",
  description: "Strength training without the circus.",
  phone: "+961 76 300 011",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96176300011",
  email: process.env.GYM_CONTACT_EMAIL || "spline@e19company.com",
  address: "Beirut, Lebanon · fictional concept location",
  mapUrl: "https://maps.google.com/?q=Beirut%2C%20Lebanon",
  timeZone: "Asia/Beirut",
  openingHours: [
    { days: "Monday–Friday", hours: "06:30–21:00 · demonstration timetable" },
    { days: "Saturday", hours: "08:00–15:00 · demonstration timetable" },
    { days: "Sunday", hours: "Closed" },
  ],
  socialLinks: { instagram: "", facebook: "" },
  brand: { background: "#0b0b0a", foreground: "#f4f0e7", accent: "#ff4d00" },
  trialBooking: {
    enabled: true,
    durationMinutes: 60,
    requiresMovementAssessment: true,
  },
  defaultLocale: "en" as Locale,
  availableLocales: ["en", "ar", "fr"] as Locale[],
  announcement: {
    enabled: true,
    text: "Spline concept demonstration · FORGE is a fictional training brand",
  },
  cookies: { storageKey: "forge-cookie-preferences", version: 1 },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  mockDataMode: process.env.MOCK_DATA_MODE !== "false",
} as const;
