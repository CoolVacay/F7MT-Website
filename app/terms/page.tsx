import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Email Collection | Facilities PM",
  description:
    "Terms of Service for email collection at Facilities PM. Learn about our data privacy practices, consent policies, and how we handle your email information. Effective April 15, 2025.",
  keywords: [
    "terms of service",
    "privacy policy",
    "email collection terms",
    "data privacy",
    "facilities PM legal",
    "email consent",
    "data protection",
  ],
  openGraph: {
    title: "Terms of Service - Email Collection | Facilities PM",
    description:
      "Terms of Service for email collection at Facilities PM. Learn about our data privacy practices and consent policies.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "Facilities PM Terms of Service",
      },
    ],
  },
  twitter: {
    title: "Terms of Service - Email Collection | Facilities PM",
    description:
      "Terms of Service for email collection at Facilities PM. Learn about our data privacy practices and consent policies.",
    images: ["/logo-white.png"],
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Terms of Service – Email Collection
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            <strong>Effective Date:</strong> April 15, 2025
          </p>
        </header>

        <p className="text-gray-400">
          By submitting your email address through any form on our website,
          landing pages, or other digital properties (collectively, the
          “Platform”), you agree to the following terms:
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            1. Purpose of Email Collection
          </h2>
          <p className="text-gray-400">We collect email addresses to:</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Provide you with updates, promotions, and relevant content</li>
            <li>Share news or announcements related to our services</li>
            <li>
              Communicate important account or product-related information
            </li>
            <li>Improve our offerings and user experience</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">2. Consent & Opt-In</h2>
          <p className="text-gray-400">
            By entering your email, you confirm that:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>You are providing your email voluntarily</li>
            <li>
              You consent to receive communications from us, including marketing
              emails
            </li>
            <li>
              You are at least 16 years old (or the minimum age of consent in
              your country)
            </li>
          </ul>
          <p className="text-gray-400">
            You may unsubscribe at any time by clicking the “unsubscribe” link
            in any of our emails or by contacting us directly.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">3. Data Privacy</h2>
          <p className="text-gray-400">
            Your email address will be stored securely and handled in accordance
            with our{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            . We do <strong>not</strong> sell, rent, or share your email with
            third parties, except as necessary to operate our services or comply
            with the law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
          <p className="text-gray-400">
            We may use third-party email platforms (e.g., Mailchimp, Brevo,
            Klaviyo) to manage and deliver communications. These services are
            contractually bound to protect your information and will not use
            your email for their own purposes.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">5. Changes to These Terms</h2>
          <p className="text-gray-400">
            We reserve the right to update these terms at any time. Continued
            use of the Platform after such changes implies your acceptance of
            the revised terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">6. Contact</h2>
          <p className="text-gray-400">
            For questions or to request removal of your email from our database,
            please contact us at:
          </p>
          <p className="text-gray-400">
            📧{" "}
            <a
              href="mailto:info@example.com"
              className="text-blue-600 underline"
            >
              info@facilitiespm.io
            </a>{" "}
            <br />
            📍 LemonJuice Solutions, 7380 Sand Lake Rd Suite 130, Orlando, FL
            32819
          </p>
        </div>
      </div>
    </section>
  );
}
