import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service Template",
  description: "Website terms template requiring Lebanese legal review.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service Template",
    description: "Website terms template requiring Lebanese legal review.",
    url: "/terms-of-service",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
