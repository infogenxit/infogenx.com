import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ManagedServices/ManagedServicesHero/ManagedServicesHero";
import AppDevExpertise from "../../../components/Services/ManagedServices/ManagedServicesExpertise/ManagedServicesExpertise";
import AppDevApproach from "../../../components/Services/ManagedServices/ManagedServicesApproach/ManagedServicesApproach";
import AppDevBusinessImpact from "../../../components/Services/ManagedServices/ManagedServicesBusinessImpact/ManagedServicesBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/ManagedServices/ManagedServicesImpactCTA/ManagedServicesImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>Managed IT Services for Growing Businesses | Infogenx</title>
        <meta
          name="description"
          content="Outsource your IT operations to Infogenx. We handle monitoring, maintenance, and support so your systems stay secure, scalable, and always running."
        />
        <meta
          name="keywords"
          content="managed IT services India, managed services provider India, outsourced IT management, cloud managed services, IT operations support, proactive IT monitoring"
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
