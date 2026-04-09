import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../animations'

const words = ['Applications', 'Automation', 'Analytics', 'Intelligence']

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #1E3A8A 0%, #6D28D9 55%, #06B6D4 100%)',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  blob1: {
    position: 'absolute',
    top: '25%',
    left: '20%',
    width: '480px',
    height: '480px',
    backgroundColor: 'rgba(109,40,217,0.35)',
    borderRadius: '50%',
    filter: 'blur(120px)',
    pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute',
    bottom: '25%',
    right: '20%',
    width: '400px',
    height: '400px',
    backgroundColor: 'rgba(6,182,212,0.3)',
    borderRadius: '50%',
    filter: 'blur(120px)',
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '14px',
    fontWeight: 500,
    padding: '8px 20px',
    borderRadius: '9999px',
    marginBottom: '32px',
  },
  h1: {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: 1.1,
    marginBottom: '24px',
    letterSpacing: '-0.02em',
  },
  h1Mobile: {
    fontSize: '40px',
  },
  wordContainer: {
    display: 'block',
    height: '1.2em',
    position: 'relative',
    overflow: 'hidden',
  },
  word: {
    position: 'absolute',
    inset: 0,
    color: '#06B6D4',
  },
  p1: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '768px',
    margin: '0 auto 16px',
    lineHeight: 1.6,
  },
  p2: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '40px',
  },
  p3: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 600,
    marginBottom: '40px',
    fontSize: '18px',
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaPrimary: {
    backgroundColor: '#F97316',
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 36px',
    borderRadius: '12px',
    fontSize: '16px',
    boxShadow: '0 8px 32px rgba(249,115,22,0.4)',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  ctaSecondary: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 36px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
}

export default function LandingHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % words.length), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={styles.section}>
      <div style={styles.overlay} />

      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={styles.blob1}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={styles.blob2}
      />

      <motion.div
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate="show"
        style={styles.container}
      >
        <motion.div variants={scaleIn} style={styles.badge}>
          <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
            🚀
          </motion.span>
          AI-Powered Applications, Automation & Analytics for Scalable Growth
        </motion.div>

        <motion.h1 variants={fadeUp} style={styles.h1}>
          <span style={{ display: 'block', color: '#fff' }}>Transform Your Business with</span>
          <span style={{ display: 'block', color: '#fff' }}>AI-Driven</span>
          <span style={styles.wordContainer}>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 60, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -60, opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={styles.word}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} style={styles.p1}>
          We empower businesses to simplify operations, eliminate manual bottlenecks, and unlock scalable growth through AI-enabled Applications Development, Intelligent Process Automation, and Analytics Engineering.
        </motion.p>

        <motion.p variants={fadeUp} style={styles.p2}>
          Our expertise spans <span style={{ color: '#fff', fontWeight: 600 }}>Zoho, Microsoft, Shopify, and Odoo</span> platforms, along with custom-built enterprise applications tailored to your unique business needs.
        </motion.p>

        <motion.p variants={fadeUp} style={styles.p3}>
          👉 Build Smarter. Automate Faster. Scale Confidently.
        </motion.p>

        <motion.div variants={fadeUp} style={styles.ctaContainer}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 35px rgba(249,115,22,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={styles.ctaPrimary}
          >
            Book a Free Consultation
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.18)' }}
            whileTap={{ scale: 0.97 }}
            style={styles.ctaSecondary}
          >
            Get a Custom Solution Proposal
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
