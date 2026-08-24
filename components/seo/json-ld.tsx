import { gymConfig } from "@/config/gym";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: gymConfig.name,
    description: `${gymConfig.description} Fictional Spline concept demonstration.`,
    url: gymConfig.siteUrl,
    creator: {
      "@type": "Organization",
      name: "Spline",
      email: gymConfig.email,
      telephone: gymConfig.phone,
    },
    spatialCoverage: "Beirut, Lebanon",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
