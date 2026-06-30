// =============================================================
//  Configuración editable del sitio
//  Julio: cambia estos valores cuando tengas las claves / números.
//  Todo lo marcado como TODO debe reemplazarse antes de lanzar.
// =============================================================

export const config = {
  // --- WhatsApp (botón de contacto directo) ---
  whatsapp: {
    // Número en formato internacional SIN '+' ni espacios. (591 = Bolivia)
    number: '59172640600',
    // Mensaje pre-cargado que verá el cliente al abrir el chat
    messageEs: 'Hola Julio, vi tu portafolio y me gustaría conversar sobre un proyecto.',
    messageEn: 'Hi Julio, I saw your portfolio and would like to talk about a project.',
  },

  // --- EmailJS (formulario de contacto sin backend) ---
  // 1. Crea una cuenta gratis en https://www.emailjs.com/
  // 2. Crea un "Email Service" y un "Email Template".
  // 3. Pega aquí los tres identificadores. Mientras sean placeholders,
  //    el formulario muestra un aviso y NO intenta enviar.
  emailjs: {
    serviceId: 'service_2kp2xyn', // servicio de Gmail
    templateId: 'template_hbw2f29', // Email Template (variables: name, email, message)
    publicKey: 'IWuFuWKdQxkOU2UDj', // Account → API Keys → Public Key
  },

  // --- Enlaces sociales / contacto ---
  social: {
    github: 'https://github.com/Junior02000XD',
    linkedin: 'https://www.linkedin.com/in/julio-cesar-cruz-k-0a4a3733a/',
    youtube: 'https://www.youtube.com/@JuniorXD-ml3dq',
    email: 'juliocesarcruzkubber@gmail.com',
  },
}

// Helper: ¿el formulario EmailJS está configurado (sin placeholders)?
export const isEmailJsConfigured = () =>
  !config.emailjs.serviceId.startsWith('YOUR_') &&
  !config.emailjs.templateId.startsWith('YOUR_') &&
  !config.emailjs.publicKey.startsWith('YOUR_')

// Helper: arma el enlace de WhatsApp según el idioma activo
export const buildWhatsappLink = (lang) => {
  const msg = lang === 'en' ? config.whatsapp.messageEn : config.whatsapp.messageEs
  return `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(msg)}`
}
