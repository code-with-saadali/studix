import About from "./_components/About";
import CtaSection from "./_components/CtaSection";
import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import InstagramSection from "./_components/InstagramSection";
import Marquee from "./_components/Marquee";
import OurTeam from "./_components/OurTeam";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import WhyUs from "./_components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <OurTeam />
      <Testimonials />
      <Marquee />
      <FaqSection/>
      <CtaSection/>
      <InstagramSection/>
      <Footer/>
    </>
  );
}
