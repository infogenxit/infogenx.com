import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import NetworkBackground from './NetworkBackground'
import './Landing.css'
import microsoft from '../../assets/images/microsoft.png'
import zoho from '../../assets/images/zoho.png'
import shopify from '../../assets/images/shopify.png'
import odoo from '../../assets/images/odoo.png'

const services = [
  {
    icon: '⚡',
    title: 'AI-Enabled Applications Development',
    subtitle: 'Smart Apps',
    desc: 'We design and build intelligent, scalable applications that go beyond traditional software.',
    points: [
      'Custom business applications (web & cloud)',
      'Low-code apps using Zoho Creator & Microsoft Power Apps',
      'AI-powered CRM, ERP & workflow systems',
      'Scalable cloud-native architecture on Microsoft Azure',
    ],
    cta: 'Turn your ideas into intelligent, future-ready applications.',
  },
  {
    icon: '🤖',
    title: 'Intelligent Process Automation',
    subtitle: 'AI-Driven Automation',
    desc: 'Eliminate repetitive work and improve operational efficiency with automation.',
    points: [
      'Workflow automation using Zoho Flow & Power Automate',
      'Enterprise integrations via Azure Logic Apps & APIs',
      'Finance, sales, HR & operations automation',
      'AI-driven decision workflows',
    ],
    cta: 'Reduce costs, improve speed, and eliminate manual errors.',
  },
  {
    icon: '📊',
    title: 'AI-Driven Analytics Engineering',
    subtitle: 'Insights & Intelligence',
    desc: 'Make faster, smarter decisions with real-time insights and predictive analytics.',
    points: [
      'Power BI dashboards & enterprise reporting',
      'Zoho Analytics with AI insights',
      'Predictive analytics & forecasting',
      'Data engineering & unified data platforms',
    ],
    cta: 'Transform data into actionable business intelligence.',
  },
]

const expertiseAreas = [
  {
    title: 'AI & Machine Learning',
    subtitle: 'Zoho + Microsoft',
    items: [
      'Zoho Zia – Predictive insights, anomaly detection, sentiment analysis',
      'Microsoft Azure AI & Machine Learning',
      'Microsoft Copilot (M365, Dynamics, Power Platform)',
      'Custom AI models on Azure',
      'AI-powered analytics with Zoho Analytics',
    ],
    cta: 'Enable predictive decision-making and intelligent automation.',
  },
  {
    title: 'Enterprise SaaS Ecosystems',
    subtitle: 'Cloud-First Platforms',
    items: [
      'Zoho One (CRM, Finance, Projects, Support)',
      'Microsoft Dynamics 365 (CRM & ERP)',
      'Microsoft 365 (Collaboration & Productivity)',
      'Microsoft Azure (Cloud Infrastructure)',
      'Power Platform (Power BI, Power Apps, Power Automate)',
    ],
    cta: 'Unify your systems into one connected digital ecosystem.',
  },
  {
    title: 'Automation & Integration Platforms',
    subtitle: 'Seamless Connectivity',
    items: [
      'Zoho Flow & Zoho Creator',
      'Microsoft Power Automate',
      'Azure Logic Apps & API Management',
      'Microsoft Dataverse (Unified data layer)',
    ],
    cta: 'Create a fully automated, integrated enterprise environment.',
  },
]

const outcomes = [
  'Reduce operational costs',
  'Increase productivity & efficiency',
  'Improve decision-making with real-time insights',
  'Accelerate digital transformation',
  'Build scalable, future-ready systems',
]

const audience = [
  'Mid-market & enterprise businesses',
  'Fast-growing startups & scale-ups',
  'Companies undergoing digital transformation',
  'Organisations looking to leverage AI, automation & analytics',
]

const reasons = [
  'Deep expertise across Zoho + Microsoft ecosystems',
  'Strong focus on AI, Automation & Data Engineering',
  'Proven experience in enterprise integrations & cloud solutions',
  'Business-first approach (not just technology)',
  'Tailored, scalable solutions (not one-size-fits-all)',
]

const products = [
  {
    number: '1',
    icon: '📈',
    title: 'Inventory & ERP Solutions',
    desc: 'Stock, ERP, and Odoo systems that improve control, automate workflows, and support scalable business operations.',
  },
  {
    number: '2',
    icon: '💻',
    title: 'ODOO ERP',
    desc: 'Our ERP software integrates various functions into one complete system to streamline processes and information across the entire application which helps you manage day-to-day business activities.',
  },
  {
    number: '3',
    icon: '📊',
    title: 'Retail POS',
    desc: 'Modern point-of-sale solutions that streamline retail operations, inventory management, and customer transactions with real-time analytics.',
  },
  {
    number: '4',
    icon: '👥',
    title: 'Customer Relationship Management',
    desc: 'Comprehensive CRM solutions to manage customer interactions, sales pipelines, and build lasting relationships that drive business growth.',
  },
]

export default function Landing() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    lastName: '',
    businessEmail: '',
    companyName: '',
    designation: '',
    organisationSize: '',
    businessObjective: '',
    techStack: [],
    transformationBudget: '',
    message: '',
    phone: '+61 ',
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => {
        const currentStack = prev.techStack || []
        const newStack = checked
          ? [...currentStack, value]
          : currentStack.filter((item) => item !== value)
        return { ...prev, techStack: newStack }
      })
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = document.createElement('form')
      form.method = 'POST'
      form.action =
        'https://forms.zohopublic.in/infogenx1/form/LeadCapture/formperma/XMx0IxKOfb-jzTS5sYys24DSyw1QMOeIwm-4IXybPtI/htmlRecords/submit'

      const addField = (name, value) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = name
        input.value = value || ''
        form.appendChild(input)
      }

      const fullName = formData.lastName.trim()
      let firstName = 'User'
      let lastName = 'User'

      if (fullName) {
        const parts = fullName.split(/\s+/)
        firstName = parts[0]
        lastName = parts.length > 1 ? parts.slice(1).join(' ') : parts[0]
      }

      addField('Name_First', firstName)
      addField('Name_Last', lastName)
      addField('SingleLine', formData.companyName)
      addField('Email', formData.businessEmail)
      addField('MultiLine', formData.message)
      addField('PhoneNumber_countrycode', formData.phone)
      addField('zf_redirect_url', 'https://infogenx.com/')

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error(error)
      alert('Submission failed')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>AI-Powered Applications, Automation & Analytics | Infogenx</title>
        <meta
          name="description"
          content="Transform your business with AI-enabled application development, intelligent process automation, and AI-driven analytics. Zoho, Microsoft, Shopify & Odoo experts."
        />
        <meta
          name="keywords"
          content="AI-enabled application development, intelligent process automation, AI-driven analytics, Zoho implementation partner, Microsoft Dynamics 365 partner, Power Platform solutions, Azure AI services, enterprise automation solutions, business process automation"
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="landing-hero">
        <NetworkBackground />
        <div className="landing-hero-container">
          <motion.h1 
            className="landing-hero-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transform Your Business with AI-Driven Applications, Automation & Analytics
          </motion.h1>
          <motion.h2 
            className="landing-hero-subheading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We empower businesses to simplify operations, eliminate manual bottlenecks, and unlock scalable growth through AI-enabled Applications Development, Intelligent Process Automation, and Analytics Engineering.
          </motion.h2>
          <motion.p 
            className="landing-hero-subheading" 
            style={{ fontSize: '18px', fontWeight: 600, color: '#EB632A' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            👉 Build Smarter. Automate Faster. Scale Confidently.
          </motion.p>

          {/* Small Company Icons */}
          <motion.div 
            className="landing-hero-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <img src={microsoft} alt="Microsoft" />
            <img src={zoho} alt="Zoho" />
            <img src={shopify} alt="Shopify" />
            <img src={odoo} alt="Odoo" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="landing-about">
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            🏢 About Infogenx
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Trusted Partner in Digital Transformation
          </motion.h2>
          
          <div className="landing-about-content">
            <motion.div
              className="landing-about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p>
                At <strong>Infogenx</strong>, we specialize in empowering businesses through cutting-edge AI-driven solutions, intelligent automation, and data analytics. As a certified partner of leading technology platforms like <strong>Zoho</strong>, <strong>Microsoft</strong>, <strong>Shopify</strong>, and <strong>Odoo</strong>, we bring deep technical expertise and a business-first approach to every project.
              </p>
              <p>
                Our mission is simple: <strong>Transform complexity into simplicity</strong>. We help organizations streamline operations, eliminate inefficiencies, and unlock new growth opportunities through tailored technology solutions that scale with your business.
              </p>
            </motion.div>

            <div className="landing-about-stats">
              <motion.div 
                className="landing-stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="landing-stat-number">10+</div>
                <div className="landing-stat-label">Years of Excellence</div>
              </motion.div>
              <motion.div 
                className="landing-stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="landing-stat-number">500+</div>
                <div className="landing-stat-label">Projects Delivered</div>
              </motion.div>
              <motion.div 
                className="landing-stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="landing-stat-number">200+</div>
                <div className="landing-stat-label">Happy Clients</div>
              </motion.div>
              <motion.div 
                className="landing-stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="landing-stat-number">50+</div>
                <div className="landing-stat-label">Expert Team Members</div>
              </motion.div>
            </div>

            <motion.div
              className="landing-about-values"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3>Our Core Values</h3>
              <div className="landing-values-grid">
                <motion.div 
                  className="landing-value-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="landing-value-icon">🎯</span>
                  <strong>Business-First Approach</strong> – We focus on outcomes, not just technology
                </motion.div>
                <motion.div 
                  className="landing-value-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="landing-value-icon">🚀</span>
                  <strong>Innovation & Excellence</strong> – Leveraging the latest AI and automation technologies
                </motion.div>
                <motion.div 
                  className="landing-value-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className="landing-value-icon">🤝</span>
                  <strong>Partnership & Trust</strong> – Building long-term relationships with our clients
                </motion.div>
                <motion.div 
                  className="landing-value-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="landing-value-icon">⚡</span>
                  <strong>Agility & Scalability</strong> – Solutions that grow with your business
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="landing-services">
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            💡 What We Do
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Core Services
          </motion.h2>
          <div className="landing-services-grid">
            {services.map((s, idx) => (
              <motion.div 
                key={s.title} 
                className="landing-service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="landing-service-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {s.icon}
                </motion.div>
                <span className="landing-service-subtitle">{s.subtitle}</span>
                <h3 className="landing-service-title">{s.title}</h3>
                <p className="landing-service-desc">{s.desc}</p>
                <ul className="landing-service-list">
                  {s.points.map((p, i) => (
                    <motion.li 
                      key={p}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.15 + 0.3 + i * 0.1 }}
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>
                <p className="landing-service-cta">👉 {s.cta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="landing-products">
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            📦 Our Products
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Enterprise Solutions That Scale
          </motion.h2>
          <div className="landing-products-grid">
            {products.map((product, idx) => (
              <motion.div 
                key={product.number} 
                className="landing-product-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="landing-product-number">{product.number}</div>
                <motion.div 
                  className="landing-product-icon"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.2, type: "spring" }}
                >
                  {product.icon}
                </motion.div>
                <h3 className="landing-product-title">{product.title}</h3>
                <p className="landing-product-desc">{product.desc}</p>
                <button className="landing-product-btn-quote" onClick={() => navigate('/contact-us')}>
                  Get Quoted
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="landing-services" style={{ background: '#fff5ef' }}>
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            🧠 AI & Technology Expertise
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Enterprise-Grade Technology Stack
          </motion.h2>
          <div className="landing-services-grid">
            {expertiseAreas.map((area, idx) => (
              <motion.div 
                key={area.title} 
                className="landing-service-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <span className="landing-service-subtitle">{area.subtitle}</span>
                <h3 className="landing-service-title">{area.title}</h3>
                <ul className="landing-service-list">
                  {area.items.map((item, i) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 + i * 0.08 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <p className="landing-service-cta">👉 {area.cta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="landing-services">
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            🎯 Who We Work With & 📈 Business Outcomes
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Partner With Us & Achieve Measurable Results
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '40px' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 style={{ fontFamily: 'Manrope', fontSize: '24px', fontWeight: 700, color: '#00123C', marginBottom: '20px' }}>
                We Partner With
              </h3>
              <ul className="landing-service-list">
                {audience.map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 style={{ fontFamily: 'Manrope', fontSize: '24px', fontWeight: 700, color: '#00123C', marginBottom: '20px' }}>
                What You Can Expect
              </h3>
              <ul className="landing-service-list">
                {outcomes.map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="landing-services" style={{ background: '#fff5ef' }}>
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            🌐 Why Infogenx
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Infogenx Difference
          </motion.h2>
          <ul className="landing-service-list" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
            {reasons.map((reason, i) => (
              <motion.li 
                key={reason} 
                style={{ fontSize: '16px', marginBottom: '16px' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {reason}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta">
        <div className="landing-cta-container">
          <motion.span 
            className="landing-section-badge" 
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            📞 Ready to Transform Your Business?
          </motion.span>
          <motion.h2 
            className="landing-cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's Design a Solution Tailored to Your Business Goals
          </motion.h2>
          <motion.div 
            className="landing-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="landing-primary-btn" 
              onClick={() => navigate('/contact-us')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👉 Book a Free Strategy Call Today
            </motion.button>
            <motion.button 
              className="landing-secondary-btn" 
              onClick={() => navigate('/contact-us')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👉 Get a Custom AI & Automation Roadmap
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="landing-contact-form-section">
        <div className="landing-services-container">
          <motion.span 
            className="landing-section-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            📝 Get In Touch
          </motion.span>
          <motion.h2 
            className="landing-section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start Your Transformation Journey Today
          </motion.h2>
          
          <motion.div
            className="landing-hero-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="landing-hero-form" onSubmit={handleSubmit}>
              <div className="landing-form-row">
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Full Name *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  />
                </motion.div>
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  />
                </motion.div>
              </div>
              <div className="landing-form-row">
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  />
                </motion.div>
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <input
                    type="email"
                    name="businessEmail"
                    placeholder="Business Email *"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  />
                </motion.div>
              </div>
              <div className="landing-form-row">
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <select
                    name="organisationSize"
                    value={formData.organisationSize}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  >
                    <option value="">Organisation Size *</option>
                    <option value="1-10">1–10</option>
                    <option value="10-50">10–50</option>
                    <option value="50-200">50–200</option>
                    <option value="200-1000">200–1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </motion.div>
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  >
                    <option value="">Designation / Role *</option>
                    <option value="CEO">CEO</option>
                    <option value="COO">COO</option>
                    <option value="CIO">CIO</option>
                    <option value="Director">Director</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>
              </div>
              <div className="landing-form-row">
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <select
                    name="businessObjective"
                    value={formData.businessObjective}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  >
                    <option value="">Primary Business Objective *</option>
                    <option value="Operational Efficiency">Operational Efficiency</option>
                    <option value="Revenue Growth">Revenue Growth</option>
                    <option value="Cost Optimisation">Cost Optimisation</option>
                    <option value="AI Adoption">AI Adoption</option>
                    <option value="System Consolidation">System Consolidation</option>
                  </select>
                </motion.div>
                <motion.div 
                  className="landing-form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <select
                    name="transformationBudget"
                    value={formData.transformationBudget}
                    onChange={handleInputChange}
                    required
                    className="landing-form-input"
                  >
                    <option value="">Estimated Transformation Budget (AUD) *</option>
                    <option value="Under $100k">Under $100k</option>
                    <option value="$100k-$250k">$100k – $250k</option>
                    <option value="$250k-$500k">$250k – $500k</option>
                    <option value="$500k+">$500k+</option>
                  </select>
                </motion.div>
              </div>
              <motion.div 
                className="landing-form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="landing-tech-stack">
                  <label className="landing-tech-label">Current Technology Stack (Select all that apply) *</label>
                  <div className="landing-tech-grid">
                    {['Microsoft', 'Zoho', 'Shopify', 'Odoo', 'Salesforce', 'HubSpot', 'Xero', 'Manual/Excel', 'Other'].map((tech) => (
                      <label key={tech} className="landing-checkbox-label">
                        <input
                          type="checkbox"
                          name="techStack"
                          value={tech}
                          onChange={handleInputChange}
                          checked={formData.techStack.includes(tech)}
                        />
                        <span>{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="landing-form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <textarea
                  name="message"
                  placeholder="Describe your current transformation challenge *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="landing-form-textarea"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="landing-form-submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Processing...' : 'REQUEST STRATEGY BRIEFING'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
