"use client";
import Link from "next/link";
import HeroImages from "./hero-images";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 leading-5">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            {/* 🔰 Trust Badge */}
            <div
              className="mx-auto mb-4 inline-block rounded-full border border-indigo-400 bg-indigo-100/10 px-4 py-1 text-sm font-medium text-indigo-200 shadow-sm backdrop-blur-md"
              data-aos="fade-up"
            >
              🔰 Built by Certified Experts
            </div>

            {/* Hero Heading */}
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle font-semibold text-transparent text-4xl md:text-7xl"
              data-aos="fade-up"
            >
              Enhanced Facilities
              <br />
              Management for Associations
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Built by Certified Experts — A smarter, easier solution designed
                to make every task effortless.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <button
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    onClick={() => {
                      document.getElementById("cta")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <span className="relative inline-flex items-center font-bold">
                      Get Early Access
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
                {/* <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://app.f7taskflow.com/"
                  >
                    View Demo
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <HeroImages />
        </div>
      </div>
    </section>
  );
}
