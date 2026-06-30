import { useLanguage } from '../i18n/LanguageContext'
import { stackGroups } from '../data/stack'
import Reveal from './Reveal'

export default function Stack() {
  const { t } = useLanguage()

  return (
    <section className="section" id="stack">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">{t.nav.stack}</span>
          <h2 className="section__title">
            {t.stack.title} <span className="accent">/ skills</span>
          </h2>
          <p className="section__subtitle">{t.stack.subtitle}</p>
        </Reveal>

        <div className="stack__grid">
          {stackGroups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.07}>
              <div className="stack__card">
                <h3 className="stack__card-title">{t.stack.groups[group.key]}</h3>
                <div className="stack__chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
