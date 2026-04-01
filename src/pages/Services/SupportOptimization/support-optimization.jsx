import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/SupportOptimization/SupportHero/SupportHero";
import AppDevExpertise from "../../../components/Services/SupportOptimization/SupportExpertise/SupportExpertise";
import AppDevApproach from "../../../components/Services/SupportOptimization/SupportApproach/SupportApproach";
import AppDevBusinessImpact from "../../../components/Services/SupportOptimization/SupportBusinessImpact/SupportBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/SupportOptimization/SupportImpactCTA/SupportImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>IT Support & System Optimization Services | Infogenx</title>
        <meta
          name="description"
          content="Keep your systems running at peak performance with Infogenx support and optimization services. Improve speed, security, and reliability as you grow."
        />
        <meta
          name="keywords"
          content="IT support and optimization services, application support services India, software performance optimization, ongoing IT support, system maintenance services, managed IT support"
        />
      </Helmet>
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default ApplicationDev;
