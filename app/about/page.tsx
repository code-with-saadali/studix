import React from "react";
import AboutUs from "./_components/AboutUs";
import CEOQuote from "./_components/CEOQuote";
import Highlights from "./_components/Highlights";
import OurTeam from "../_components/OurTeam";
import CtaSection from "../_components/CtaSection";
import InstagramSection from "../_components/InstagramSection";

export default function page() {
  return (
    <div>
      <AboutUs />
      <CEOQuote />
      <Highlights />
      <OurTeam />
      <CtaSection />
      <InstagramSection />
    </div>
  );
}
