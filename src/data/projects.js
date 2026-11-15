// =============================================================
//  Proyectos destacados.
//  Para agregar/editar uno, copia el formato de abajo.
//  - desc: descripción corta (2-3 líneas) en ES y EN
//  - tags: tecnologías mostradas como chips
//  - image: captura importada desde src/assets/projects (o null)
//  - repo / live: enlaces (deja null si no aplica)
//  - featured: true => card más grande
//  - soon: true => marca "Próximamente" y atenúa la card
// =============================================================

import fclImg from '../assets/projects/fcl.webp'
import creciendoImg from '../assets/projects/creciendo.webp'
import kaptaImg from '../assets/projects/kapta.webp'
import kruzformImg from '../assets/projects/kruzform.webp'
import dagasImg from '../assets/projects/dagas.webp'
import kruzappImg from '../assets/projects/kruzapp.webp'

export const projects = [
  {
    id: 'first-class-listening',
    name: 'First Class Listening',
    desc: {
      es: 'Plataforma de canje y acceso a contenido digital (audio/video) para First Class Institute. Cada libro físico trae un código que el alumno canjea para desbloquear sus audios y videos. En producción.',
      en: 'Redemption and access platform for digital content (audio/video) for First Class Institute. Each physical book includes a code students redeem to unlock its audios and videos. In production.',
    },
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Cloudflare R2/Workers'],
    image: fclImg,
    repo: null,
    live: 'https://firstclasslistening.com',
    featured: true,
    soon: false,
  },
  {
    id: 'creciendo-en-movimiento',
    name: 'Creciendo en Movimiento',
    desc: {
      es: 'Embudo de venta digital para la guía de ejercicios infantiles del Dr. Raúl Cañas Pérez (PhysioRun): landing, pago, entrega del PDF por enlace con token, correos automáticos y venta de consultas por videollamada. En producción.',
      en: 'Digital sales funnel for a pediatric exercise guide by Dr. Raúl Cañas Pérez (PhysioRun): landing page, checkout, token-based PDF delivery, automated emails and video-consultation upsell. In production.',
    },
    tags: ['Astro', 'ASP.NET Core', 'PostgreSQL', 'Cloudflare Pages/R2'],
    image: creciendoImg,
    repo: null,
    live: 'https://www.creciendoenmovimiento.com',
    featured: false,
    soon: false,
  },
  {
    id: 'kapta',
    name: 'Kapta',
    desc: {
      es: 'Plataforma de cursos con evaluación y certificado verificable, más un perfil profesional para mostrar lo logrado. Monolito modular en .NET 10 y web en Next.js sobre Cloudflare.',
      en: 'Course platform with assessments and verifiable certificates, plus a professional profile to showcase achievements. Modular .NET 10 monolith and a Next.js frontend on Cloudflare.',
    },
    tags: ['ASP.NET Core', 'Next.js', 'PostgreSQL', 'Cloudflare Workers'],
    image: kaptaImg,
    repo: null,
    live: 'https://kapta-academy.com',
    featured: false,
    soon: false,
  },
  {
    id: 'kruzapp',
    name: 'Kruzapp',
    desc: {
      es: 'Producto propio: automatiza la atención por WhatsApp con IA (Claude) para varios negocios. Cada dueño configura contenido, políticas y derivaciones desde un panel, sin tocar código, con avisos al equipo por Telegram.',
      en: 'In-house product: AI-powered WhatsApp customer service (Claude) for multiple businesses. Each owner configures content, policies and handoffs from a dashboard, no code needed, with team alerts via Telegram.',
    },
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Claude API', 'WhatsApp API'],
    image: kruzappImg,
    repo: null,
    live: null,
    featured: true,
    soon: false,
  },
  {
    id: 'kruzform',
    name: 'Kruzform',
    desc: {
      es: 'Producto propio: servicio de formularios tipo Typeform. Los formularios se sirven desde el edge y siguen funcionando aunque el servidor principal caiga. Tiene panel con editor visual, analítica y exportación CSV.',
      en: 'In-house product: a Typeform-style forms service. Forms are served from the edge and keep working even if the main server goes down. It has a dashboard with a visual editor, analytics and CSV export.',
    },
    tags: ['TypeScript', 'Hono', 'Cloudflare Workers/D1', 'React', 'Preact'],
    image: kruzformImg,
    repo: null,
    live: null,
    featured: false,
    soon: false,
  },
  {
    id: 'dagas-y-mentiras',
    name: 'Dagas y Mentiras',
    desc: {
      es: 'Roguelike cenital en pixel art para 1 a 4 jugadores, en local o en LAN, con fuego amigo, 4 clases, mejoras aleatorias y jefe final. Hecho con el equipo Morioh Devs para la Game Jam GJ+ 26/27.',
      en: 'Top-down pixel-art roguelike for 1 to 4 players, local or over LAN, with friendly fire, 4 classes, random upgrades and a final boss. Built with team Morioh Devs for the GJ+ 26/27 Game Jam.',
    },
    tags: ['Godot 4', 'GDScript', 'Multijugador LAN'],
    image: dagasImg,
    repo: null,
    live: 'https://junior02000xd.itch.io/dagas-y-mentiras',
    featured: false,
    soon: false,
  },
]
