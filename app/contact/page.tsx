import { TelephoneIcon } from "@/public/TelephoneIcon";
import { MessageIcon } from "@/public/MessageIcon";
import Cta from "@/components/cta";
import { Metadata } from "next/dist/types";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Facilities PM",
  description:
    "Contact Facilities PM for support, questions, or to learn more about our facilities management platform. Call (407) 610-2628 or email info@facilitiespm.io. Located in Orlando, FL.",
  keywords: [
    "contact facilities management",
    "facilities PM support",
    "association software support",
    "facilities management consultation",
    "property management help",
    "association technology support",
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Facilities PM",
    description:
      "Contact Facilities PM for support, questions, or to learn more about our facilities management platform. Call (407) 610-2628 or email info@facilitiespm.io.",
    images: [
      {
        url: "/images/hero-image-01.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Facilities PM - Facilities Management Support",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Get in Touch with Facilities PM",
    description:
      "Contact Facilities PM for support, questions, or to learn more about our facilities management platform.",
    images: ["/images/hero-image-01.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default async function Page() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center px-4 sm:px-0">
        <div className="w-screen flex min-h-[640px] flex-col items-center justify-center">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="h-full w-full flex justify-center px-6 py-10 sm:px-14 sm:py-14 ">
              <div className="w-full text-center">
                <h2 className="text-2xl text-primary sm:text-3xl">
                  How can we help you?
                </h2>
                <h6 className="my-4 text-base text-[#676D73] sm:text-lg">
                  {`Any questions, comments, or concerns? We're here to help!`}
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Cta />
          </div>
          <div className="mt-10 w-6/12">
            <div className="flex items-center justify-around gap-5 rounded-[8px] p-6 sm:gap-10 sm:p-10">
              <div className="flex gap-5">
                <div className="h-min rounded-full bg-primary/[0.10] p-5">
                  <TelephoneIcon color={"text-primary"} />
                </div>
                <div className="flex flex-col justify-around gap-3">
                  <p className="text-[18px] font-medium text-primary sm:text-[20px]">
                    Call here
                  </p>
                  <a className="text-sm sm:text-base" href="tel:407-610-2628">
                    (407) 610-2628
                  </a>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="h-min rounded-full bg-primary/[0.10] p-5">
                  <MessageIcon color={"text-primary"} />
                </div>
                <div className="flex flex-col justify-around gap-3">
                  <p className="text-[18px] font-medium text-primary sm:text-[20px]">
                    Email here
                  </p>
                  <p className="text-sm sm:text-base">info@facilitiespm.io</p>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center gap-5 rounded-[8px] bg-[#F7F7F7] p-6 sm:gap-10 sm:p-10">
              <div className="h-min rounded-full bg-primary/[0.10] p-5">
                <IconGenerator
                  src="/message_icon.svg"
                  alt="Message for assistance icon"
                  width="36px"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[18px] font-medium text-primary sm:text-[20px]">
                  Chat
                </p>
                <p className="text-sm sm:text-base">
                  Our support team is available to answer your questions, and
                  provide technical help.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
