import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/DigitalMarketing/DigitalMarketingHero/DigitalMarketingHero";
import AppDevExpertise from "../../../components/Services/DigitalMarketing/DigitalMarketingExpertise/DigitalMarketingExpertise";
import AppDevApproach from "../../../components/Services/DigitalMarketing/DigitalMarketingApproach/DigitalMarketingApproach";
import AppDevBusinessImpact from "../../../components/Services/DigitalMarketing/DigitalMarketingBusinessImpact/DigitalMarketingBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/DigitalMarketing/DigitalMarketingImpactCTA/DigitalMarketingImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services for Business Growth | Infogenx</title>
        <meta
          name="description"
          content="Grow your business with data-driven digital marketing. Infogenx delivers SEO, ads, and content strategies that drive traffic, leads, and conversions."
        />
        <meta
          name="keywords"
          content="digital marketing services for business, "
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

export default DigitalMarketing;
