import { motion } from 'framer-motion'

// Wrapper de scroll-reveal (Variante B): fade + slide-up discreto y
// rápido al entrar en viewport (una sola vez). delay opcional para escalonar.
export default function Reveal({ children, delay = 0, y = 18, className, as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
