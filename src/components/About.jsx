import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__wrap">
          <Reveal>
            <span className="eyebrow">{t.nav.about}</span>
            <h2 className="section__title">
              {t.about.title.split(' ')[0]}{' '}
              <span className="accent">{t.about.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__lead">{t.about.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
