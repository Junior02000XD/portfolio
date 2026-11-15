# Portafolio de Julio César Cruz K.

Landing personal bilingüe (ES/EN) con tema claro y minimalista. Sirve como punto de
contacto para clientes freelance y reclutadores: proyectos, stack, experiencia y un
formulario de contacto.

## Stack

- **React 18 + Vite 6**, sitio estático.
- **Framer Motion** para las animaciones al hacer scroll y el cambio de idioma.
- **EmailJS** para el formulario de contacto, sin backend.
- Deploy en **Cloudflare Pages**: cada push a `main` publica la nueva versión.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build de producción
```

## Cómo editar el contenido

El contenido está separado del diseño:

| Qué | Dónde |
|---|---|
| Textos ES/EN (hero, secciones, formulario) | [src/i18n/translations.js](src/i18n/translations.js) |
| Proyectos | [src/data/projects.js](src/data/projects.js) |
| Capturas de los proyectos | [src/assets/projects/](src/assets/projects/) (WebP, ~1200 px de ancho) |
| Experiencia | [src/data/experience.js](src/data/experience.js) |
| Stack | [src/data/stack.js](src/data/stack.js) |
| WhatsApp, EmailJS, redes | [src/config.js](src/config.js) |
| Título, descripción e imagen al compartir | [index.html](index.html) y [public/og-image.jpg](public/og-image.jpg) (1200x630) |
| Color de acento | `--accent-1` / `--accent-2` en [src/index.css](src/index.css) |

### Agregar un proyecto

1. Guarda la captura en `src/assets/projects/` como `.webp`.
2. Impórtala arriba de `src/data/projects.js` y agrega un objeto a la lista, con la
   descripción en `es` y `en`, los `tags` y los enlaces (`repo` y `live`, o `null`).
3. `featured: true` hace que la card ocupe todo el ancho. Conviene que la cantidad de
   cards normales sea par para que la grilla quede completa.

Los proyectos privados van con `repo: null`. Si la captura muestra un panel con datos
de clientes, usa una versión con datos de ejemplo (como la de Kruzapp).
