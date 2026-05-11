import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import ServicesGrid from "../components/sections/ServicesGrid";
import WhyGrid from "../components/sections/WhyGrid";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import TestimonialsGrid from "../components/sections/TestimonialsGrid";
import AboutStrip from "../components/sections/AboutStrip";
import CtaBand from "../components/sections/CtaBand";

export default function Home() {
  useEffect(() => {
    document.title = "KiiNet Media — Performance Marketing, Engineered for ROI";
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <WhyGrid />
      <ProcessTimeline />
      <TestimonialsGrid />
      <AboutStrip />
      <CtaBand />
    </>
  );
}
