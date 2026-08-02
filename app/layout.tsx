import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { gymConfig } from "@/config/gym";
import { CookieConsent } from "@/components/consent/cookie-consent";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { MotionSystem } from "@/components/motion/motion-system";

export const metadata: Metadata = {
  metadataBase: new URL(gymConfig.siteUrl),
  title: { default: gymConfig.name, template: `%s | ${gymConfig.shortName}` },
  description: gymConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: gymConfig.name, description: gymConfig.description, type: "website", locale: "en_LB", siteName: gymConfig.name },
  twitter: { card: "summary_large_image", title: gymConfig.name, description: gymConfig.description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body><LocalBusinessJsonLd /><MotionSystem /><SiteHeader /><div id="main-content" tabIndex={-1}>{children}</div><SiteFooter /><div id="cookie-preferences-root"><CookieConsent /></div></body>
    </html>
  );
}
