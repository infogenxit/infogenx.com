import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '../animations'

const expertiseAreas = [
  {
    id: 'ai',
    icon: '🧠',
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
    tabActive: { bg: '#1E3A8A', shadow: 'rgba(30,58,138,0.25)' },
    accent: '#1E3A8A',
    dot: '#6D28D9',
  },
  {
    id: 'saas',
    icon: '☁️',
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
    tabActive: { bg: '#6D28D9', shadow: 'rgba(109,40,217,0.25)' },
    accent: '#6D28D9',
    dot: '#06B6D4',
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'Automation & Integration Platforms',
    subtitle: 'Seamless Connectivity',
    items: [
      'Zoho Flow & Zoho Creator',
      'Microsoft Power Automate',
      'Azure Logic Apps & API Management',
      'Microsoft Dataverse (Unified data layer)',
    ],
    cta: 'Create a fully automated, integrated enterprise environment.',
    tabActive: { bg: '#06B6D4', shadow: 'rgba(6,182,212,0.25)' },
    accent: '#06B6D4',
    dot: '#1E3A8A',
  },
]

const styles = {
  section: {
    padding: '112px 0',
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  badge: {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#06B6D4',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginTop: '12px',
    color: '#111827',
  },
  tabContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '48px',
  },
  tabButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    cursor: 'pointer',
    border: 'none',
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '56px',
  },
  panelGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    alignItems: 'center',
  },
  icon: {
    fontSize: '64px',
    marginBottom: '24px',
    display: 'inline-block',
  },
  panelSubtitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '8px',
  },
  panelTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#111827',
  },
  panelCta: {
    fontWeight: 600,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    color: '#374151',
    marginBottom: '16px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginTop: '6px',
    flexShrink: 0,
  },
}

export default function LandingExpertise() {
  const [active, setActive] = useState('ai')
  const area = expertiseAreas.find(a => a.id === active)

  return (
    <section id="expertise" style={styles.section}>
      <div style={styles.container}>
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} style={styles.header}>
          <motion.span variants={fadeUp} style={styles.badge}>
            🧠 AI & Technology Expertise
          </motion.span>
          <motion.h2 variants={fadeUp} style={styles.title}>
            Enterprise-Grade Technology Stack
          </motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={styles.tabContainer}>
          {expertiseAreas.map((a) => (
            <motion.button
              key={a.id}
              onClick={() => setActive(a.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                ...styles.tabButton,
                ...(active === a.id
                  ? { backgroundColor: a.tabActive.bg, color: '#fff', boxShadow: `0 8px 24px ${a.tabActive.shadow}` }
                  : { backgroundColor: '#F9FAFB', color: '#6B7280', border: '1px solid #E5E7EB' }),
              }}
            >
              <span>{a.icon}</span> {a.title}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              ...styles.panel,
              border: `1.5px solid ${area.accent}33`,
              boxShadow: `0 4px 40px ${area.accent}15`,
            }}
          >
            <div style={styles.panelGrid}>
              <div>
                <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} style={styles.icon}>
                  {area.icon}
                </motion.div>
                <span style={{ ...styles.panelSubtitle, color: area.accent }}>🔷 {area.subtitle}</span>
                <h3 style={styles.panelTitle}>{area.title}</h3>
                <p style={{ ...styles.panelCta, color: area.accent }}>👉 {area.cta}</p>
              </div>
              <ul style={styles.list}>
                {area.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={styles.listItem}
                  >
                    <span style={{ ...styles.dot, backgroundColor: area.dot }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
