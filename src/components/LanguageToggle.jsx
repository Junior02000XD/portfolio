import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

// Botón que alterna ES/EN. La etiqueta muestra el idioma AL QUE
// cambiará. Transición suave (crossfade vertical) al cambiar.
export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <span className="lang-toggle__dot" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={t.langLabel}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.langLabel}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
