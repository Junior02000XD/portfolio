import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../i18n/LanguageContext'
import { buildWhatsappLink, config, isEmailJsConfigured } from '../config'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon, YoutubeIcon } from './icons'

// Estados del formulario: idle | sending | sent | error
export default function Contact() {
  const { t, lang } = useLanguage()
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const configured = isEmailJsConfigured()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!configured || status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        formRef.current,
        { publicKey: config.emailjs.publicKey },
      )
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact__wrap">
          {/* Izquierda: CTA WhatsApp + redes */}
          <Reveal className="contact__left">
            <span className="eyebrow">{t.nav.contact}</span>
            <h2 className="section__title">
              {t.contact.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="accent">{t.contact.title.split(' ').slice(-1)}</span>
            </h2>
            <p className="contact__lead">{t.contact.subtitle}</p>

            <a
              href={buildWhatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary contact__wa"
            >
              <WhatsappIcon width={20} height={20} />
              {t.contact.whatsappCta}
            </a>

            <div className="contact__socials">
              <a
                className="contact__social"
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                className="contact__social"
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                className="contact__social"
                href={config.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                className="contact__social"
                href={`mailto:${config.social.email}`}
                aria-label="Email"
              >
                <MailIcon />
              </a>
            </div>
          </Reveal>

          {/* Derecha: formulario */}
          <Reveal delay={0.1}>
            <form className="form" ref={formRef} onSubmit={onSubmit}>
              <div className="form__field">
                <label className="form__label" htmlFor="name">
                  {t.contact.name}
                </label>
                <input
                  className="form__input"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.placeholderName}
                />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="email">
                  {t.contact.email}
                </label>
                <input
                  className="form__input"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.placeholderEmail}
                />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="message">
                  {t.contact.message}
                </label>
                <textarea
                  className="form__textarea"
                  id="message"
                  name="message"
                  required
                  placeholder={t.contact.placeholderMessage}
                />
              </div>

              {!configured && (
                <p className="form__note form__note--info">{t.contact.notConfigured}</p>
              )}
              {status === 'sent' && (
                <p className="form__note form__note--ok">{t.contact.sent}</p>
              )}
              {status === 'error' && (
                <p className="form__note form__note--err">{t.contact.error}</p>
              )}

              <button
                type="submit"
                className="btn btn--primary form__submit"
                disabled={!configured || status === 'sending'}
              >
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
