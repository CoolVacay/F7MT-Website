import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import WithVsWithout from "@/components/WithVsWithout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enhanced Facilities Management for Associations | Facilities PM",
  description:
    "Transform your association's facilities management with Facilities PM. Streamline workflows, boost productivity, and enhance member experience with our purpose-built platform designed by certified experts.",
  keywords: [
    "facilities management software",
    "association management system",
    "property management platform",
    "facilities automation",
    "association productivity tools",
    "workflow management",
    "facilities maintenance software",
    "association technology solutions",
  ],
  openGraph: {
    title: "Enhanced Facilities Management for Associations | Facilities PM",
    description:
      "Transform your association's facilities management with Facilities PM. Streamline workflows, boost productivity, and enhance member experience.",
    images: [
      {
        url: "/images/hero-image-01.jpg",
        width: 1200,
        height: 630,
        alt: "Facilities PM - Enhanced Facilities Management Platform",
      },
    ],
  },
  twitter: {
    title: "Enhanced Facilities Management for Associations | Facilities PM",
    description:
      "Transform your association's facilities management with Facilities PM. Streamline workflows, boost productivity, and enhance member experience.",
    images: ["/images/hero-image-01.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Facilities PM",
    description:
      "Facilities PM is an all-in-one facilities management platform, purpose-built for associations to boost productivity and streamline workflows.",
    url: "https://facilitiespm.io",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "LemonJuice Solutions",
      url: "https://www.facilitiespm.io",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7380 Sand Lake Rd Suite 130",
        addressLocality: "Orlando",
        addressRegion: "FL",
        postalCode: "32819",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-407-610-2628",
        contactType: "customer service",
        email: "info@facilitiespm.io",
      },
    },
    featureList: [
      "Facilities Management",
      "Association Management",
      "Workflow Automation",
      "Productivity Tools",
      "Property Maintenance",
      "Association Technology",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageIllustration />
      <Hero />
      <WithVsWithout />
      <Features />
      {/* <Workflows /> */}
      <Cta />
    </>
  );
}
