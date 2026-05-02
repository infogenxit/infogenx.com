import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../animations'

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
    iconBg: 'linear-gradient(135deg, #1E3A8A, #6D28D9)',
    accentColor: '#6D28D9',
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
    iconBg: 'linear-gradient(135deg, #6D28D9, #06B6D4)',
    accentColor: '#06B6D4',
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
    iconBg: 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
    accentColor: '#1E3A8A',
  },
]

const styles = {
  section: {
    padding: '112px 0',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#F9FAFB',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '28px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
  },
  iconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  subtitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#111827',
  },
  desc: {
    fontSize: '14px',
    marginBottom: '24px',
    color: '#6B7280',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    flex: 1,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#374151',
    marginBottom: '10px',
  },
  check: {
    marginTop: '2px',
    flexShrink: 0,
    fontWeight: 'bold',
    color: '#22C55E',
  },
  cta: {
    fontSize: '14px',
    fontWeight: 600,
    marginTop: 'auto',
    paddingTop: '16px',
    borderTop: '1px solid #E5E7EB',
  },
}

export default function LandingServices() {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={styles.header}
        >
          <motion.span variants={fadeUp} style={styles.badge}>
            💡 What We Do
          </motion.span>
          <motion.h2 variants={fadeUp} style={styles.title}>
            Our Core Services
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          style={styles.grid}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={styles.card}
            >
              <div style={{ ...styles.iconBox, background: s.iconBg }}>{s.icon}</div>
              <span style={{ ...styles.subtitle, color: s.accentColor }}>{s.subtitle}</span>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.desc}>{s.desc}</p>
              <ul style={styles.list}>
                {s.points.map((p) => (
                  <li key={p} style={styles.listItem}>
                    <span style={styles.check}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p style={{ ...styles.cta, color: s.accentColor }}>👉 {s.cta}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
