import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationHero/IntelligentAutomationHero";
import AppDevExpertise from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationExpertise/IntelligentAutomationExpertise";
import AppDevApproach from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationApproach/IntelligentAutomationApproach";
import AppDevBusinessImpact from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationBusinessImpact/IntelligentAutomationBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationImpactCTA/IntelligentAutomationImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../components/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../components/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../components/Common/RelatedServices/RelatedServices";

const IntelligentAutomation = () => {
  const faqData = [
    {
      question: "What is Intelligent Automation?",
      answer: "Intelligent Automation (IA) combines robotic process automation (RPA) with artificial intelligence (AI) and machine learning to automate complex business processes that require decision-making and analysis."
    },
    {
      question: "How can AI-driven workflows help my business?",
      answer: "AI-driven workflows reduce manual errors, accelerate process times, and allow your team to focus on high-value strategic work rather than repetitive data entry or administration."
    },
    {
      question: "Do you provide automation for Microsoft and Zoho?",
      answer: "Yes, we specialize in building intelligent automation solutions specifically for the Microsoft Power Platform, Zoho Flow, and Odoo ecosystems to ensure seamless integration with your existing tools."
    },
    {
      question: "How long does it take to implement an automation solution?",
      answer: "A typical pilot project can be deployed in 4-6 weeks, while more complex enterprise-wide orchestrations may take 3-6 months depending on the systems involved."
    },
    {
      question: "What regions do you serve?",
      answer: "We provide global digital transformation services, with dedicated teams serving Australia, India, and North American markets."
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Intelligent Automation" }
  ];

  return (
    <>
      <SEO
        title="Intelligent Automation & AI Workflow Solutions | Infogenx"
        description="Streamline your global business with AI-driven intelligent automation. Infogenx builds scalable workflow solutions for Microsoft, Zoho, and Odoo to reduce manual complexity."
        keywords="intelligent automation, AI workflow orchestration, business process automation, digital transformation"
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqData} />
      <RelatedServices currentService="/solutions/intelligent-automation" />
      <Footer />
    </>
  );
};

export default IntelligentAutomation;
