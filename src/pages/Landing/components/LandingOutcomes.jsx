import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, slideLeft, slideRight } from '../animations'

const outcomes = [
  { text: 'Reduce operational costs', pct: 40 },
  { text: 'Increase productivity & efficiency', pct: 65 },
  { text: 'Improve decision-making with real-time insights', pct: 80 },
  { text: 'Accelerate digital transformation', pct: 70 },
  { text: 'Build scalable, future-ready systems', pct: 90 },
]

const audience = [
  { icon: '🏢', text: 'Mid-market & enterprise businesses' },
  { icon: '🚀', text: 'Fast-growing startups & scale-ups' },
  { icon: '🔄', text: 'Companies undergoing digital transformation' },
  { icon: '🤖', text: 'Organisations looking to leverage AI, automation & analytics' },
]

const styles = {
  section: {
    padding: '112px 0',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#1E3A8A',
  },
  overlay1: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at bottom left, rgba(109,40,217,0.2) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  overlay2: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at top right, rgba(6,182,212,0.12) 0%, transparent 55%)',
    pointerEvents: 'none',
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
    color: '#fff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#06B6D4',
  },
  h3: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '12px',
    marginBottom: '32px',
    color: '#fff',
  },
  audienceCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    borderRadius: '12px',
    cursor: 'default',
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '24px',
  },
  text: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 500,
  },
  progressContainer: {
    marginBottom: '24px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  progressText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 500,
  },
  check: {
    color: '#22C55E',
    fontWeight: 'bold',
  },
  progressPct: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#06B6D4',
  },
  progressBar: {
    height: '8px',
    borderRadius: '9999px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  progressFill: {
    height: '100%',
    borderRadius: '9999px',
    background: 'linear-gradient(90deg, #06B6D4, #6D28D9)',
  },
}

export default function LandingOutcomes() {
  return (
    <section id="outcomes" style={styles.section}>
      <div style={styles.overlay1} />
      <div style={styles.overlay2} />

      <div style={styles.container}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={styles.header}>
          <span style={styles.badge}>🎯 Who We Work With & 📈 Business Outcomes</span>
          <h2 style={styles.title}>Partner With Us & Achieve Measurable Results</h2>
        </motion.div>

        <div style={styles.grid}>
          <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <span style={styles.sectionTitle}>Who We Work With</span>
            <h3 style={styles.h3}>We Partner With</h3>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {audience.map((item) => (
                <motion.div
                  key={item.text}
                  variants={slideLeft}
                  whileHover={{ x: 8, backgroundColor: 'rgba(6,182,212,0.12)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={styles.audienceCard}
                >
                  <span style={styles.icon}>{item.icon}</span>
                  <span style={styles.text}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <span style={styles.sectionTitle}>Business Outcomes You Can Expect</span>
            <h3 style={styles.h3}>What You Can Expect</h3>
            <div>
              {outcomes.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={styles.progressContainer}
                >
                  <div style={styles.progressHeader}>
                    <span style={styles.progressText}>
                      <span style={styles.check}>✔</span>
                      {item.text}
                    </span>
                    <span style={styles.progressPct}>{item.pct}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      style={styles.progressFill}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
