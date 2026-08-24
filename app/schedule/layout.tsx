import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Schedule",
  description: "Filter illustrative FORGE class sessions and training times.",
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: "Schedule",
    description: "Filter illustrative FORGE class sessions and training times.",
    url: "/schedule",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
