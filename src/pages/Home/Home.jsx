import Header from "../../components/header/Header";
import Hero from "../../components/Home/Hero/Hero";
import Expertise from "../../components/Home/Expertise/Expertise";
import ServiceHighlight from "../../components/Home/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../components/Home/TechSlider/TechSlider";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import CtaBanner from "../../components/Home/CtaBanner/CtaBanner";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO/SEO";

const Home = () => {
  return (
    <>
      {/* 
        RESTORED CODE: Previous Regional SEO (ACTIVE)
      */}
      <SEO
        title="AI Automation & App Development Company Sydney | Infogenx"
        description="Infogenx is a leading AI automation and application development company in Sydney. We deliver intelligent apps, workflow automation, and data analytics."
        keywords="AI application development Sydney, AI automation company Brisbane, app development Melbourne"
      />

      {/* 
        CURRENT SYNC CODE: Australia-wide SEO (COMMENTED)
        <SEO
          title="AI Automation & App Development Company in Australia | Infogenx"
          description="Infogenx is a leading AI automation and application development company in Australia. We deliver intelligent apps, workflow automation, and data analytics for Microsoft, Zoho, and Odoo."
          keywords="AI application development Australia, AI automation company Brisbane, intelligent business automation, app development services Melbourne"
        />
      */}

      <Header />
      <Hero />
      <Expertise />
      <ServiceHighlight />
      <TechSlider />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  );
};

export default Home;
