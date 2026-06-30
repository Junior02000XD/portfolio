import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Julio César Cruz K.</span>
        <span>
          © {year} · {t.footer.rights}
        </span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
