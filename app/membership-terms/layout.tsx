import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Membership Terms Template",
  description: "Membership terms template requiring Lebanese legal review.",
  alternates: { canonical: "/membership-terms" },
  openGraph: {
    title: "Membership Terms Template",
    description: "Membership terms template requiring Lebanese legal review.",
    url: "/membership-terms",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
