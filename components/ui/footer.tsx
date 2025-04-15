import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-2 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(2,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Link
                href="/"
                className="inline-flex shrink-0"
                aria-label="Cruip"
              >
                <Image
                  src="/logo-white.png"
                  alt="Cruip Logo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © LemonJuice
                <span className="text-gray-400"> · </span>
                USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
