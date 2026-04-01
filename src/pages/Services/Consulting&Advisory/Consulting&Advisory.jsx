import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ConsultingAdvisory/ConsultingHero/ConsultingHero";
import AppDevExpertise from "../../../components/Services/ConsultingAdvisory/ConsultingExpertise/ConsultingExpertise";
import AppDevApproach from "../../../components/Services/ConsultingAdvisory/ConsultingAppDev/ConsultingAppDev";
import AppDevBusinessImpact from "../../../components/Services/ConsultingAdvisory/ConsultingBusinessImpact/ConsultingBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>
          IT Consulting & Advisory Services for Businesses | Infogenx
        </title>
        <meta
          name="description"
          content="Get expert IT consulting from Infogenx. We help you plan the right technology strategy, reduce risks, and build a clear roadmap for business growth."
        />
        <meta
          name="keywords"
          content="IT consulting and advisory services India, technology strategy consulting, digital advisory services, business technology roadmap, IT consultant India, CTO advisory services"
        />
      </Helmet>
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      {/* <AppDevImpactCTA /> */}
      <Footer />
    </>
  );
};

export default ApplicationDev;
