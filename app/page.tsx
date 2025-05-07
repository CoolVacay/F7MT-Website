import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import WithVsWithout from "@/components/WithVsWithout";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <WithVsWithout />
      <Features />
      {/* <Workflows /> */}
      <Cta />
    </>
  );
}
