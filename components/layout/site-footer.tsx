import Link from "next/link";
import { gymConfig } from "@/config/gym";
import { legalNavigation, mainNavigation } from "@/content/navigation";
import { CookiePreferencesButton } from "@/components/consent/cookie-preferences-button";
export function SiteFooter() {
  return (
    <footer className="border-t-4 border-accent bg-surface py-16">
      <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-5xl font-black">FORGE</p>
          <p className="mt-4 max-w-md text-muted">{gymConfig.description}</p>
          <address className="mt-6 not-italic text-sm text-muted">
            <p>{gymConfig.address}</p>
            <p>{gymConfig.phone}</p>
            <p>{gymConfig.email}</p>
            <p>WhatsApp: {gymConfig.whatsappNumber}</p>
          </address>
          <div className="mt-5 text-sm">
            {gymConfig.openingHours.map((row) => (
              <p key={row.days}>
                {row.days}: {row.hours}
              </p>
            ))}
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 grid gap-3">
            {mainNavigation.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal navigation">
          <h2 className="eyebrow">Information</h2>
          <ul className="mt-4 grid gap-3">
            {legalNavigation.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <CookiePreferencesButton />
          </div>
        </nav>
      </div>
      <div className="container mt-14 border-t border-border pt-6 text-xs text-muted">
        <p className="mt-2">
          Spline concept demonstration · {gymConfig.name} is a fictional
          business. Contact Spline at {gymConfig.phone}.
        </p>
      </div>
    </footer>
  );
}
