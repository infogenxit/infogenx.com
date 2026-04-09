import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../animations'

const reasons = [
  { icon: '🧠', title: 'Deep Ecosystem Expertise', text: 'Deep expertise across Zoho + Microsoft ecosystems' },
  { icon: '⚡', title: 'AI-First Approach', text: 'Strong focus on AI, Automation & Data Engineering' },
  { icon: '🔗', title: 'Proven Integrations', text: 'Proven experience in enterprise integrations & cloud solutions' },
  { icon: '🎯', title: 'Business-First', text: 'Business-first approach (not just technology)' },
  { icon: '📐', title: 'Tailored Solutions', text: 'Tailored, scalable solutions (not one-size-fits-all)' },
]

const styles = {
  section: {
    padding: '112px 0',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#F9FAFB',
  },
  container: {
    maxWidth: '1200px',
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
  subtitle: {
    marginTop: '16px',
    maxWidth: '672px',
    margin: '16px auto 0',
    color: '#6B7280',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '28px',
    border: '1px solid #E5E7EB',
    cursor: 'default',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
  },
  icon: {
    fontSize: '32px',
    marginBottom: '16px',
    display: 'block',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '16px',
    color: '#1E3A8A',
  },
  cardText: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#6B7280',
  },
  ctaCard: {
    borderRadius: '16px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #F97316, #ea580c)',
  },
  ctaText: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#fff',
    lineHeight: 1.3,
  },
  ctaButton: {
    marginTop: '24px',
    display: 'inline-block',
    backgroundColor: '#fff',
    color: '#F97316',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '12px 20px',
    borderRadius: '12px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
}

export default function LandingWhyUs() {
  return (
    <section id="why-us" style={styles.section}>
      <div style={styles.container}>
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} style={styles.header}>
          <motion.span variants={fadeUp} style={styles.badge}>
            🌐 Why Infogenx
          </motion.span>
          <motion.h2 variants={fadeUp} style={styles.title}>
            The Infogenx Difference
          </motion.h2>
          <motion.p variants={fadeUp} style={styles.subtitle}>
            We don't just implement technology — we engineer business outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          style={styles.grid}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              style={styles.card}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 3 }}
                style={styles.icon}
              >
                {r.icon}
              </motion.span>
              <h3 style={styles.cardTitle}>{r.title}</h3>
              <p style={styles.cardText}>{r.text}</p>
            </motion.div>
          ))}

          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            style={styles.ctaCard}
          >
            <p style={styles.ctaText}>Ready to transform your business?</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={styles.ctaButton}
            >
              Let's Talk →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
