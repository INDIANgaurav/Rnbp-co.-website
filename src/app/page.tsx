import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
