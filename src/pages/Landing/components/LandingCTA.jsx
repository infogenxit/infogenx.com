import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../animations'

const styles = {
  section: {
    padding: '128px 0',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(135deg, #1E3A8A 0%, #6D28D9 60%, #06B6D4 100%)',
  },
  ring1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '600px',
    pointerEvents: 'none',
  },
  ringCircle: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  dot1: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '10px',
    height: '10px',
    backgroundColor: '#06B6D4',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 12px #06B6D4',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  badge: {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#06B6D4',
  },
  title: {
    fontSize: '56px',
    fontWeight: 'bold',
    marginTop: '12px',
    marginBottom: '24px',
    lineHeight: 1.2,
    color: '#fff',
  },
  titleAccent: {
    color: '#06B6D4',
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaPrimary: {
    color: '#fff',
    fontWeight: 'bold',
    padding: '20px 40px',
    borderRadius: '16px',
    fontSize: '18px',
    boxShadow: '0 8px 32px rgba(249,115,22,0.4)',
    backgroundColor: '#F97316',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  ctaSecondary: {
    fontWeight: 'bold',
    padding: '20px 40px',
    borderRadius: '16px',
    fontSize: '18px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1.5px solid rgba(6,182,212,0.5)',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
}

export default function LandingCTA() {
  return (
    <section id="contact" style={styles.section}>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={styles.ring1}
      >
        <div style={styles.ringCircle} />
        <div style={styles.dot1} />
      </motion.div>

      <div style={styles.overlay} />

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={styles.container}
      >
        <motion.span variants={fadeUp} style={styles.badge}>
          📞 Ready to Transform Your Business?
        </motion.span>
        <motion.h2 variants={fadeUp} style={styles.title}>
          Let's Design a Solution
          <br />
          <span style={styles.titleAccent}>Tailored to Your Business Goals</span>
        </motion.h2>

        <motion.div variants={fadeUp} style={styles.ctaContainer}>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 35px rgba(249,115,22,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={styles.ctaPrimary}
          >
            👉 Book a Free Strategy Call Today
          </motion.a>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={styles.ctaSecondary}
          >
            👉 Get a Custom AI & Automation Roadmap
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
