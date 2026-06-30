// =============================================================
//  Proyectos destacados.
//  Para agregar/editar uno, copia el formato de abajo.
//  - desc: descripción corta (2-3 líneas) en ES y EN
//  - tags: tecnologías mostradas como chips
//  - repo / live: enlaces (deja null si no aplica)
//  - featured: true => card más grande
//  - soon: true => marca "Próximamente" y atenúa la card
// =============================================================

export const projects = [
  {
    id: 'first-class-listening',
    name: 'First Class Listening',
    desc: {
      es: 'Plataforma de canje y acceso a contenido digital (audio/video) para First Class Institute. Cada libro físico trae un código que el alumno canjea para desbloquear sus audios y videos. En producción.',
      en: 'Redemption and access platform for digital content (audio/video) for First Class Institute. Each physical book includes a code students redeem to unlock its audios and videos. In production.',
    },
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Cloudflare R2/Workers'],
    repo: 'https://github.com/Junior02000XD/first-class-listening-api',
    live: 'https://firstclasslistening.com',
    featured: true,
    soon: false,
  },
  {
    id: 'jalcruz-crm',
    name: 'Jalcruz First Class — CRM',
    desc: {
      es: 'Sistema de gestión a medida: RRHH para la empresa familiar Jalcruz (planillas, asistencias) y un CRM de ventas para el equipo comercial. Reemplazó registros en Excel; migrado de Laravel a ASP.NET Core.',
      en: 'Custom management system: HR for the family company Jalcruz (payroll, attendance) plus a sales CRM for the commercial team. Replaced Excel records; migrated from Laravel to ASP.NET Core.',
    },
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Tailwind'],
    repo: 'https://github.com/Junior02000XD/jalcruz-firstclass-api',
    live: null,
    featured: false,
    soon: false,
  },
  {
    id: 'plataforma-integral',
    name: 'Plataforma Integral (API)',
    desc: {
      es: 'Proyecto universitario integrador: diseño de una base de datos relacional compleja para una plataforma de cursos online tipo Platzi (cursos, inscripciones, clases, pagos, certificados).',
      en: 'University capstone project: design of a complex relational database for a Platzi-style online course platform (courses, enrollments, classes, payments, certificates).',
    },
    tags: ['ASP.NET Core', 'SQL Server', 'MinIO'],
    repo: 'https://github.com/Plataforma-Integral/plataforma-integral-api',
    live: null,
    featured: false,
    soon: false,
  },
  // --- Espacio para proyectos futuros (Kapta, Hamacas Game, etc.) ---
  // Descomenta y completa cuando estén listos para mostrarse:
  // {
  //   id: 'kapta',
  //   name: 'Kapta',
  //   desc: { es: '…', en: '…' },
  //   tags: ['…'],
  //   repo: null,
  //   live: null,
  //   featured: false,
  //   soon: true,
  // },
]
