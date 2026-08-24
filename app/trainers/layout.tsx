import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet the clearly labelled fictional coaches in the FORGE concept.",
  alternates: { canonical: "/trainers" },
  openGraph: {
    title: "Trainers",
    description:
      "Meet the clearly labelled fictional coaches in the FORGE concept.",
    url: "/trainers",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
