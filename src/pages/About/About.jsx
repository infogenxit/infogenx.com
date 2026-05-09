import Header from "../../sections/header/Header";
import AboutHero from "../../sections/About/AboutHero/AboutHero";
import AboutWhoWeAre from "../../sections/About/AboutWhoWeAre/AboutWhoWeAre";
import AboutWhyChoose from "../../sections/About/AboutWhyChoose/AboutWhyChoose";
import AboutMissionVision from "../../sections/About/AboutMissionVision/AboutMissionVision";
import AboutTeam from "../../sections/About/AboutTeam/AboutTeam";
import Footer from "../../sections/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO/SEO";

const About = () => {
  return (
    <>
      {/* 
        RESTORED CODE: Previous Regional SEO (ACTIVE)
      */}
      <SEO
        title="About Infogenx | Australian IT Consulting & Engineering Firm"
        description="Learn about Infogenx—our story, leadership, partnerships, and mission to deliver intelligent, outcome-driven digital solutions for businesses."
        keywords="about Infogenx, Australian IT consulting company, digital engineering firm"
      />

      {/* 
        CURRENT SYNC CODE: Australia-wide SEO (COMMENTED)
        <SEO
          title="About Infogenx | AI Automation & App Development Experts Australia"
          description="Learn how Infogenx empowers businesses with AI-enabled applications, intelligent automation, and data analytics across Microsoft, Zoho, and Odoo ecosystem."
          keywords="about Infogenx, AI automation experts Australia, app development company Brisbane, digital engineering team"
        />
      */}

      <Header />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChoose />
      <AboutMissionVision />
      <AboutTeam />
      <Footer />
    </>
  );
};

export default About;
