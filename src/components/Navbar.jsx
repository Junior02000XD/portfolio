import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

const SECTIONS = ['about', 'stack', 'projects', 'experience', 'contact']

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          Julio<span className="accent">.</span>
        </a>

        <ul className="nav__links">
          {SECTIONS.map((s) => (
            <li key={s}>
              <a href={`#${s}`}>{t.nav[s]}</a>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <LanguageToggle />
          <button
            className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {SECTIONS.map((s) => (
              <li key={s}>
                <a href={`#${s}`} onClick={() => setOpen(false)}>
                  {t.nav[s]}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
