import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore the interactive FORGE concept floor, zones, and equipment.",
  alternates: { canonical: "/facilities" },
  openGraph: {
    title: "Facilities",
    description:
      "Explore the interactive FORGE concept floor, zones, and equipment.",
    url: "/facilities",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
