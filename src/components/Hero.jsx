import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { config } from '../config'
import { ArrowUpRight, GithubIcon } from './icons'
import julioPhoto from '../assets/julio.webp'

// Variante B: hero clásico (texto izquierda, foto derecha), sin 3D ni
// typewriter. El titular aparece con un fade + slide-up limpio al cargar.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <header className="hero section" id="top">
      <div className="container">
        <div className="hero__grid">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p className="hero__greeting" variants={item}>
              {t.hero.greeting}
            </motion.p>
            <motion.h1 className="hero__name" variants={item}>
              Julio César <span className="accent">Cruz K.</span>
            </motion.h1>
            <motion.p className="hero__role" variants={item}>
              {t.hero.roles[0]}
            </motion.p>
            <motion.p className="hero__tagline" variants={item}>
              {t.hero.tagline}
            </motion.p>
            <motion.div className="hero__cta" variants={item}>
              <a href="#contact" className="btn btn--primary">
                {t.hero.ctaPrimary}
                <ArrowUpRight width={17} height={17} />
              </a>
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <GithubIcon width={18} height={18} />
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Forma de acento estática detrás de la foto (sin 3D) */}
            <div className="hero__shape" />
            <div className="hero__photo">
              <img src={julioPhoto} alt="Julio César Cruz K." loading="eager" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
