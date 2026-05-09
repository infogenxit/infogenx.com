import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./GetinTouchNew.css";
import Header from "../../../sections/header/Header";
import Footer from "../../../sections/Footer/Footer";
import { Helmet } from "react-helmet-async";
import indiaFlag from "../../../assets/images/india-flag.png";
import australiaFlag from "../../../assets/images/australia-flags.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

/** 
 * RESTORED CODE: Original Zoho URL (LeadCapture)
 * CURRENT CODE (Commented): New Zoho URL (ContactUs)
 */
const ZOHO_CONTACTUS_SUBMIT_URL_RESTORED = "https://forms.zohopublic.in/infogenx1/form/LeadCapture/formperma/XMx0IxKOfb-jzTS5sYys24DSyw1QMOeIwm-4IXybPtI/htmlRecords/submit";
/* 
const ZOHO_CONTACTUS_SUBMIT_URL_CURRENT = "https://forms.zohopublic.in/infogenxprivatelimited1/form/ContactUs/formperma/swlzQv4WOiaDG1SDRx3_1N7T17S9SQfTFt2q6N6Qy6U/htmlRecords/submit";
const ZOHO_SUBMIT_IFRAME_NAME = "zohoContactSubmitFrame";
*/

const GetinTouchNew = () => {
  const navigate = useNavigate();
  const homeRedirectTimerRef = useRef(null);

  const [formData, setFormData] = useState({
    lastName: "",
    businessEmail: "",
    companyName: "",
    designation: "",
    organisationSize: "",
    businessObjective: "",
    primaryTech: "",
    techStack: [],
    transformationBudget: "",
    message: "",
    phone: process.env.REACT_APP_PHONE_PREFIX || "+91 ",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearHomeRedirectTimer = () => {
    if (homeRedirectTimerRef.current) {
      clearTimeout(homeRedirectTimerRef.current);
      homeRedirectTimerRef.current = null;
    }
  };

  const goHome = () => {
    clearHomeRedirectTimer();
    navigate("/");
  };

  useEffect(() => {
    if (!showThankYou) return undefined;
    clearHomeRedirectTimer();
    homeRedirectTimerRef.current = setTimeout(() => {
      homeRedirectTimerRef.current = null;
      navigate("/");
    }, 3500);
    return () => {
      clearHomeRedirectTimer();
    };
  }, [showThankYou, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const currentStack = prev.techStack || [];
        const newStack = checked
          ? [...currentStack, value]
          : currentStack.filter((item) => item !== value);
        return { ...prev, techStack: newStack };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === 'phone' && value === '' ? { phone: process.env.REACT_APP_PHONE_PREFIX || '+91 ' } : {})
      }));
    }
  };

  // ============================================================
  // RESTORED CODE: User's Manual Submission Logic (ACTIVE)
  // ============================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = ZOHO_CONTACTUS_SUBMIT_URL_RESTORED;
  
      const addField = (name, value) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value || "";
        form.appendChild(input);
      };
  
      const fullName = formData.lastName.trim();
      let firstName = "User";
      let lastName = "User";
  
      if (fullName) {
        const parts = fullName.split(/\s+/);
        firstName = parts[0];
        lastName = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];
      }
  
      addField("Name_First", firstName);
      addField("Name_Last", lastName);
      addField("SingleLine", formData.companyName);
      addField("Email", formData.businessEmail);
      addField("MultiLine", formData.message);
      addField("PhoneNumber_countrycode", formData.phone);
      addField("zf_redirect_url", "https://infogenx.com/");
  
      document.body.appendChild(form);
      form.submit();
      
      // Local state update for thank you message
      setShowThankYou(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* 
  // ============================================================
  // CURRENT CODE: AI Synced Logic (COMMENTED)
  // ============================================================
  const handleSubmitAI = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = ZOHO_CONTACTUS_SUBMIT_URL_CURRENT;
      form.acceptCharset = "UTF-8";
      form.enctype = "multipart/form-data";

      const addField = (name, value) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value ?? "";
        form.appendChild(input);
      };

      addField("zf_referrer_name", typeof document !== "undefined" ? document.referrer || "" : "");
      addField("zf_redirect_url", `${process.env.REACT_APP_SITE_URL || "https://infogenx.com"}/contact-us`);
      addField("zc_gad", "");

      const fullName = formData.lastName.trim();
      const parts = fullName.split(/\s+/).filter(Boolean);
      let firstName = "";
      let lastName = "";
      if (parts.length) {
        firstName = parts[0];
        lastName = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];
      }

      addField("Name_First", firstName);
      addField("Name_Last", lastName);
      addField("PhoneNumber_countrycode", formData.phone.trim());
      addField("SingleLine", formData.companyName);
      addField("Email", formData.businessEmail);
      addField("Dropdown", formData.organisationSize);
      addField("Dropdown1", formData.businessObjective);
      addField("Dropdown2", formData.designation);
      addField("Dropdown3", formData.transformationBudget);
      (formData.techStack || []).forEach((tech) => addField("Checkbox", tech));
      addField("MultiLine", formData.message);

      form.target = ZOHO_SUBMIT_IFRAME_NAME;
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        if (form.parentNode) form.parentNode.removeChild(form);
      }, 2000);

      setShowThankYou(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  */

  return (
    <>
      {/* 
      <iframe
        title="Zoho form submit"
        name={ZOHO_SUBMIT_IFRAME_NAME}
        className="zoho-submit-hidden-frame"
      /> 
      */}
      <Helmet>
        <title>Contact Infogenx | Get AI & IT Solutions Today</title>
        <meta
          name="description"
          content="Contact Infogenx to discuss your project and discover how AI, automation, and software solutions can help your business grow."
        />
        <meta
          name="keywords"
          content="contact Infogenx, IT consultation, software services inquiry, AI solutions contact"
        />
      </Helmet>
      <Header />
      <div className="page-intro-header container">
        <style>
          {`
      div.page-intro-header.container h1.main-headline {
        font-size: 28px !important;
      }
    `}
        </style>
        <h1 className="main-headline">
          ORCHESTRATE GROWTH:STRATEGIC AI INTEGRATION FOR MODERN ECOSYSTEMS
        </h1>
        <p className="intro-subtext">
          Partner with Infogenx to architect high-yield, AI-integrated roadmaps
          across Microsoft, Zoho, and Global SaaS ecosystems. Tailored for
          leaders in Australia and India looking to optimize capital, eliminate
          operational silos, and capture dominant market share
        </p>
      </div>
      <div className="quote-main-layout">
        <div className="contact-form-container">
          <h2 className="contact-title">
            REQUEST A CONFIDENTIAL STRATEGY BRIEFING
          </h2>
          {!showThankYou ? (
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Full Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className="phone-input-wrapper">
                    <img
                      src={process.env.REACT_APP_FLAG_ICON || "https://flagcdn.com/w40/in.png"}
                      alt="Flag"
                      className="flag-icon"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="businessEmail"
                    placeholder="Business Email *"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    required
                  />

                  <select
                    name="organisationSize"
                    value={formData.organisationSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Organisation Size *</option>
                    <option value="1-10">1–10</option>
                    <option value="10-50">10–50</option>
                    <option value="50-200">50–200</option>
                    <option value="200-1000">200–1000</option>
                    <option value="1000+">1000+</option>
                  </select>

                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Designation / Role *</option>
                    <option value="CEO">CEO</option>
                    <option value="COO">COO</option>
                    <option value="CIO">CIO</option>
                    <option value="Director">Director</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="tech-split-section">
                  <div className="objective-budget-wrapper">
                    <select
                      name="businessObjective"
                      value={formData.businessObjective}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Primary Business Objective *</option>
                      <option value="Operational Efficiency">
                        Operational Efficiency
                      </option>
                      <option value="Revenue Growth">Revenue Growth</option>
                      <option value="Cost Optimisation">
                        Cost Optimisation
                      </option>
                      <option value="AI Adoption">AI Adoption</option>
                      <option value="System Consolidation">
                        System Consolidation
                      </option>
                    </select>

                    <select
                      name="transformationBudget"
                      value={formData.transformationBudget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Estimated Transformation Budget (AUD) *
                      </option>
                      <option value="Under $100k">Under $100k</option>
                      <option value="$100k - $250k">$100k – $250k</option>
                      <option value="$250 - $500k">$250k – $500k</option>
                      <option value="$500k">$500k+</option>
                    </select>
                  </div>
                  <div className="tech-stack-container">
                    <label>
                      Current Technology Stack (Select all that apply) *
                    </label>

                    <div className="tech-layout-wrapper">
                      <div className="checkbox-grid">
                        {[
                          "Microsoft",
                          "Shopify",
                          "Other",
                          "Zoho",
                          "Odoo",
                          "Manual/Excel",
                          "Salesforce",
                          "HubSpot",
                          "Xero",
                        ].map((tech) => (
                          <label key={tech} className="checkbox-label">
                            <input
                              type="checkbox"
                              name="techStack"
                              value={tech}
                              onChange={handleChange}
                              checked={formData.techStack.includes(tech)}
                            />
                            {tech}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Describe your current transformation challenge *"
                  className="full-width"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "REQUEST STRATEGY BRIEFING"}
                </button>
              </form>
            </div>
          ) : (
            /* RESTORED CODE: Inline Thank You Message (ACTIVE) */
            <div className="thank-you-message">
              <h3>Thank You!</h3>
              <p>
                Your message has been successfully submitted. We'll get back to
                you soon!
              </p>
              <button onClick={() => setShowThankYou(false)}>
                Submit Another Message
              </button>
            </div>
          )}
        </div>
        <div className="side-content right-facts">
          <div className="fact-card">
            <h4>Fast Facts</h4>
            <p className="mini-heading">Why Leaders Engage Us</p>
            <ul>
              <li><strong>Cross-Border Capability:</strong> Integrated delivery teams across Australia and India ensuring 24/7 operational continuity.</li>
              <li><strong>High-Yield Architecture:</strong> Specializing in $100k–$500k+ enterprise transformations that prioritize ROI over simple automation.</li>
              <li><strong>Ecosystem Neutrality:</strong> Expert-level integration across Microsoft, Zoho, Shopify, and Odoo to eliminate data silos.</li>
            </ul>
          </div>

          <div className="did-you-know-card">
            <h4>Did you know?</h4>
            <p>Enterprises that fail to integrate AI by 2026 face 30% higher cost-of-capital...</p>
            <p className="highlight-text">We don't just automate tasks; we optimize your valuation.</p>
          </div>
          <div className="nda-shield-box">
            <span className="shield-icon">🛡️</span>
            <p>All strategy briefings are conducted under strict NDA protocols.</p>
          </div>
        </div>
      </div>
      
      <div className="global-delivery-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
          alt="Global Delivery Map"
          className="global-map-bg"
        />
        <svg className="map-connection-svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <path d="M 690 205 Q 760 250, 860 360" stroke="#F36B2A" strokeWidth="2" fill="none" strokeDasharray="6,6" markerEnd="url(#arrowhead)" />
          <circle cx="690" cy="205" r="5" fill="#F36B2A" />
        </svg>
        <div className="global-content">
          <h2 className="global-title">GLOBAL DELIVERY. LOCAL ACCOUNTABILITY.</h2>
          <p className="global-subtitle">Seamless integration across borders.</p>
          <div className="insight-box">
            <span className="quote-icon-left">“</span>
            <h5>AI COST-OF-CAPITAL INSIGHT BLOCK</h5>
            <p>
              Enterprises that fail to integrate AI by 2026 face 30% higher cost-of-capital.
              <br />
              <span style={{ color: "#F36B2A", fontWeight: "700" }}>
                We don't just automate tasks, we optimize your valuation.
              </span>
            </p>
            <span className="quote-icon-right">”</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default GetinTouchNew;
