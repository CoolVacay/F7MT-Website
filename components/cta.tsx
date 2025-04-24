"use client";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Cta() {
  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      console.log(json);
      if (json.error) {
        toast.error(json.error);
      } else {
        toast.success("You did it!");
      }
    } catch (err) {
      toast.error("Something failed.");
    }
  };

  return (
    <section className="relative overflow-hidden" id="cta">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Join our growing wait list
            </h2>

            <form onSubmit={(e) => subscribe(e)}>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="
                  w-7/12
                  border border-gray-700
                  bg-gray-800
                  text-gray-100
                  placeholder-gray-500
                  rounded-lg
                  px-4 py-2
                  mb-2
                  focus:outline-none
                  focus:ring-2 focus:ring-indigo-500
                  focus:border-transparent
                  transition
                "
              />

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <button
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] hover:cursor-pointer sm:mb-0 sm:w-auto"
                    type="submit"
                  >
                    <span className="relative inline-flex items-center">
                      Join the email list
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://app.f7taskflow.com/"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
