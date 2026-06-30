import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import { ArrowUpRight, CodeIcon } from './icons'

function ProjectCard({ project, index }) {
  const { t, lang } = useLanguage()

  const classes = [
    'project',
    project.featured && 'project--featured',
    project.soon && 'project--soon',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    // motion.article = hijo directo del grid (conserva grid-column span)
    // y a la vez el elemento que anima al entrar en viewport.
    <motion.article
      className={classes}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project__top">
        <h3 className="project__name">{project.name}</h3>
        {project.soon && <span className="project__badge">{t.projects.soon}</span>}
      </div>

      <p className="project__desc">{project.desc[lang]}</p>

      <div className="project__tags">
        {project.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project__links">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link project__link--primary"
          >
            {t.projects.live}
            <ArrowUpRight />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
          >
            <CodeIcon />
            {t.projects.repo}
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">{t.nav.projects}</span>
          <h2 className="section__title">
            {t.projects.title.split(' ')[0]}{' '}
            <span className="accent">
              {t.projects.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="section__subtitle">{t.projects.subtitle}</p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
