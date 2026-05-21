import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.contactEmail,
    description: site.description,
    areaServed: "IN",
    knowsAbout: [
      "Azure training",
      "Linux administration",
      "DevOps",
      "Cloud engineering",
      "Startup infrastructure support",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
