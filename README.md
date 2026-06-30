# Portafolio — Julio César Cruz K. (Variante B)

Landing page personal bilingüe (ES/EN), **tema claro / minimalista**. Sirve como punto
central de contacto para clientes freelance y reclutadores.

**Variante B** — fondo claro, mucho espacio en blanco, acento único verde azulado
(`#0D9488`), sin elementos 3D. Hero clásico (texto a la izquierda, foto a la derecha),
animaciones discretas y rápidas. La **Variante A** (oscura, con acentos 3D) vive en la
carpeta `../portfolio`.

> Mismo contenido, datos, idioma y funcionalidades que la Variante A — solo cambia la
> dirección visual, para poder comparar ambas.

## Stack

- **React 18 + Vite** — sitio estático, deploy gratuito en Vercel/Netlify.
- **Framer Motion** — scroll-reveals discretos (fade + slide-up corto y rápido),
  transición de idioma, micro-interacciones de hover.
- **EmailJS** — formulario de contacto sin backend.
- Sin three.js: el bundle es notablemente más liviano que la Variante A.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build de producción
```

## Cómo editar el contenido

Todo el contenido está separado del diseño (idéntico a la Variante A):

| Qué | Dónde |
|---|---|
| Textos ES/EN (hero, secciones, labels) | [src/i18n/translations.js](src/i18n/translations.js) |
| Proyectos destacados | [src/data/projects.js](src/data/projects.js) |
| Experiencia (timeline) | [src/data/experience.js](src/data/experience.js) |
| Stack / skills | [src/data/stack.js](src/data/stack.js) |
| WhatsApp, EmailJS, redes | [src/config.js](src/config.js) |
| Color de acento | variables `--accent-1` / `--accent-2` en [src/index.css](src/index.css) |

Para cambiar el acento a un **índigo suave**: `--accent-1: #6366f1; --accent-2: #4f46e5;`
en [src/index.css](src/index.css).

## Diferencias respecto a la Variante A

| Elemento | Variante A | Variante B |
|---|---|---|
| Fondo | Oscuro | Blanco / gris claro |
| Acentos 3D | Sí (three.js) | No |
| Animaciones | Llamativas, parallax | Sutiles y rápidas |
| Hero | Centrado, typewriter | Texto izquierda, foto derecha, fade limpio |
| Tipografía | Space Grotesk (display) | Plus Jakarta Sans + Inter (sans puro) |
| Sensación | Técnica / impactante | Cálida / profesional |

## Deploy

Cualquier host estático sirve. Recomendado **Vercel** o **Netlify**: conectar el repo,
build command `npm run build`, output `dist/`.
