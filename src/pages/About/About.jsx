import Header from "../../components/header/Header";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import AboutWhoWeAre from "../../components/About/AboutWhoWeAre/AboutWhoWeAre";
import AboutWhyChoose from "../../components/About/AboutWhyChoose/AboutWhyChoose";
import AboutMissionVision from "../../components/About/AboutMissionVision/AboutMissionVision";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
        About Infogenx | AI & Software Development Experts
        </title>
        <meta
          name="description"
          content="Learn how Infogenx delivers AI, automation, and software solutions to help businesses innovate, scale, and succeed globally."
        />
        <meta
          name="keywords"
          content="software development company, AI company, IT consulting, tech company, digital transformation partner"
        />
      </Helmet>
      <Header />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChoose />
      <AboutMissionVision />
      <Footer />
    </>
  );
};

export default About;
