import { useLanguage } from '../i18n/LanguageContext'
import { experience } from '../data/experience'
import Reveal from './Reveal'

export default function Experience() {
  const { t, lang } = useLanguage()

  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">{t.nav.experience}</span>
          <h2 className="section__title">
            {t.experience.title}
          </h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08}>
              <div className={`tl-item ${job.period.endPresent ? 'tl-item--present' : ''}`}>
                <h3 className="tl-role">{job.role[lang]}</h3>
                <p className="tl-org">{job.org}</p>
                <p className="tl-period">{job.period[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
