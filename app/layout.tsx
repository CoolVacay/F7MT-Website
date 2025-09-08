import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Facilities PM - Enhanced Facilities Management for Associations",
    template: "%s | Facilities PM",
  },
  description:
    "Facilities PM is an all-in-one facilities management platform, purpose-built for associations to boost productivity and streamline workflows. Built by certified experts.",
  keywords: [
    "facilities management",
    "association management",
    "property management",
    "facilities software",
    "association software",
    "workflow automation",
    "productivity tools",
    "facilities maintenance",
    "property maintenance",
    "association technology",
  ],
  authors: [{ name: "LemonJuice Solutions" }],
  creator: "LemonJuice Solutions",
  publisher: "Facilities PM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://facilitiespm.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://facilitiespm.io",
    siteName: "Facilities PM",
    title: "Facilities PM - Enhanced Facilities Management for Associations",
    description:
      "Facilities PM is an all-in-one facilities management platform, purpose-built for associations to boost productivity and streamline workflows. Built by certified experts.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "Facilities PM Logo",
      },
      {
        url: "/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Facilities PM Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facilities PM - Enhanced Facilities Management for Associations",
    description:
      "Facilities PM is an all-in-one facilities management platform, purpose-built for associations to boost productivity and streamline workflows.",
    images: ["/logo-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
    ],
    apple: "/favicon-light.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <Toaster position="top-center" />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
