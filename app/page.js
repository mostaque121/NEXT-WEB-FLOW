import ContactForm from "@/components/ContactForm";
import AbouteUsSection from "./components/AboutUsSection";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import TechnologySection from "./components/TechnologySection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <AbouteUsSection />
      <ServiceSection />
      <TechnologySection />
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
}
