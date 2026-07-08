'use strict';

/* =========================================================
   SPECIALTY ICONS
   ========================================================= */
const SPECIALTY_ICONS = {
  branding:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  social:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  identity:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  packaging: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  editorial: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  print:     `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  web:       `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  motion:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  photo:     `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  content:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  signage:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  norm:      `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

/* =========================================================
   PROFILES DATA
   ========================================================= */
const profiles = {
  victor: {
    name:     'Victor Emmanuel Ortuño Tolibia',
    initials: 'VO',
    title:    'Diseñador de producción gráfica',
    location: 'Monterrey, Nuevo León',
    exp:      '8 años de experiencia',
    email:    'vortuno05@outlook.com',
    whatsapp: '7821281930',
    linkedin: 'linkedin.com/in/vortuno',
    linkedinUrl: 'https://www.linkedin.com/in/vortuno/',
    bio:      'Profesional en diseño y producción gráfica con experiencia en atención directa al cliente, preparación de archivos, seguimiento de pedidos y soporte a producción.',
    image:    '/img_profile_victor.jpg',
    featured: [
      {
        category:     'Señalética',
        title:        'La Pahuateca',
        subtitle:     'Fachada comercial, letras 3D y señalética integral',
        image:        '/img_lapahuateca.jpg',
        alt:          'Proyecto de fachada y señalética integral para La Pahuateca',
        description:  'Proyecto de identidad exterior e interior para la nueva matriz de La Pahuateca. La solución incluyó letras 3D, tiras de acrílico iluminadas, bastidor con lona para comunicación comercial y señalética funcional para orientar espacios y reforzar la experiencia del cliente.',
        intervention: ['Letras 3D para fachada principal', 'Tiras de acrílico iluminadas', 'Bastidor con lona promocional', 'Señalética interior y personalizada'],
        resolves:     ['Escala y presencia comercial', 'Aplicación en exterior e interior', 'Integración de identidad y orientación', 'Soluciones visuales funcionales']
      },
      {
        category:     'Branding',
        title:        'Vitalis — Identidad para Clínica Médica',
        subtitle:     'Salud, confianza y atención humana',
        image:        '/img_vitalis_identidad.jpg',
        alt:          'Identidad visual completa para Vitalis Clínica Médica',
        description:  'Diseño de identidad visual integral para clínica médica, enfocada en transmitir profesionalismo, calidez y empatía. El logotipo combina una cruz médica con una figura humana y hojas que representan el bienestar y cuidado.',
        intervention: ['Logotipo principal y versiones secundarias', 'Paleta de colores corporativos', 'Tipografía y diagramación', 'Guía de uso de marca'],
        resolves:     ['Identidad visual consistente en medios', 'Transmisión de confianza y profesionalismo', 'Enfoque visual centrado en el paciente']
      },
      {
        category:     'Señalética',
        title:        'Vitalis — Sistema de Señalética',
        subtitle:     'Orientación clara y experiencia de marca en interiores',
        image:        '/img_vitalis_senaletica.jpg',
        alt:          'Sistema de señalética para Vitalis Clínica Médica',
        description:  'Desarrollo de un sistema de señalética interior y exterior coherente con la identidad visual de la clínica. Facilita la orientación de pacientes y visitas, y comunica orden y pulcritud.',
        intervention: ['Directorio general y direccionales', 'Placas para consultorios y baños', 'Iconografía universal a la medida', 'Propuesta de materiales y acabados'],
        resolves:     ['Ubicación rápida y navegación fluida', 'Estandarización visual de espacios', 'Materiales duraderos y de fácil mantenimiento']
      },
      {
        category:     'Branding',
        title:        'Ala Brava — Identidad de Marca',
        subtitle:     'Alitas & Burgers con sabor que se antoja',
        image:        '/img_alabrava_identidad.jpg',
        alt:          'Identidad visual para Ala Brava Alitas & Burgers',
        description:  'Desarrollo de identidad visual comercial para restaurante de comida rápida. El símbolo fusiona un ala de pollo con una llama para representar velocidad, calor de parrilla y sazón intenso.',
        intervention: ['Logotipo principal e ícono de marca', 'Paleta de colores enérgica y tipografía', 'Aplicaciones en empaques y delantales', 'Dirección gráfica para redes sociales'],
        resolves:     ['Gran impacto visual y recordación de marca', 'Imagen atractiva para un mercado joven y dinámico', 'Consistencia de marca en empaque para llevar']
      },
      {
        category:     'Señalética',
        title:        'Ala Brava — Sistema de Señalética',
        subtitle:     'Experiencia gastronómica desde la entrada',
        image:        '/img_alabrava_senaletica.jpg',
        alt:          'Sistema de señalética para Ala Brava Alitas & Burgers',
        description:  'Diseño de señalética exterior e interior comercial para Ala Brava. Combina la personalidad enérgica de la marca con señalamientos claros de flujo de caja, entrega y consumo.',
        intervention: ['Fachada exterior y letrero principal', 'Direccionales de caja, pick-up y baños', 'Menú mural y totems de exterior', 'Familia de íconos calados en fuego'],
        resolves:     ['Optimización de flujo en horas pico', 'Alta visibilidad de zonas de cobro y entrega', 'Consistencia temática e interiorismo de marca']
      },
      {
        category:     'Señalética',
        title:        'Señalética de Seguridad',
        subtitle:     'Cumplimiento NOM-026-STPS-2008',
        image:        '/img_senaletica_seguridad.jpg',
        alt:          'Sistema de señalética de seguridad bajo norma mexicana',
        description:  'Diseño y estructuración de un sistema de señales de seguridad e higiene industrial, alineado a la normativa oficial mexicana NOM-026 para identificación de riesgos e indicaciones.',
        intervention: ['Señales de evacuación y salvamento', 'Señales de equipo contra incendios', 'Señales de advertencia de peligros', 'Señales de obligación y uso de equipo'],
        resolves:     ['Cumplimiento total con auditorías y ley', 'Prevención efectiva y visibilidad extrema de riesgos', 'Adaptabilidad de materiales (PVC, Acrílico, Vinil)']
      },
      {
        category:     'Señalética ext.',
        title:        'Señalética exterior para clínica dental pediátrica',
        subtitle:     'Dr. Jorge Casian Adem · Odontología Pediátrica y Ortodoncia',
        image:        '/img_dr_casian.jpg',
        alt:          'Señalética exterior para clínica dental pediátrica Dr. Jorge Casian Adem',
        description:  'Proyecto de señalética exterior desarrollado para fortalecer la presencia del consultorio mediante un sistema coherente de identificación. La solución integra un letrero elevado, el nombre en fachada y una placa de acceso que comunican la especialidad, generando mayor reconocimiento, claridad y confianza para los pacientes y acompañantes.',
        intervention: ['Letrero superior', 'Identificación de fachada', 'Placa de acceso'],
        resolves:     ['Mayor visibilidad', 'Reconocimiento del consultorio', 'Comunicación clara de especialidad']
      },
      {
        category:     'Letreros',
        title:        'Letreros Comerciales y Letras Corpóreas',
        subtitle:     'Señalética exterior para negocios y plazas',
        image:        '/img_letreros_comerciales.jpg',
        alt:          'Letreros y letras corpóreas para negocios y plazas',
        description:  'Proyecto que reúne soluciones de fachadas comerciales e instalación de anuncios tridimensionales de alto impacto para negocios locales y fachadas arquitectónicas.',
        intervention: ['Diseño y aplicación de anuncios de fachada', 'Letreros tipo bandera luminosos', 'Letras 3D corpóreas gigantes', 'Asesoría en materiales de resistencia exterior'],
        resolves:     ['Atracción efectiva de tráfico peatonal', 'Reconocimiento de marca y locales comerciales', 'Presencia sólida en el entorno urbano']
      },
      {
        category:     'Señalética ext.',
        title:        'VA-LENSS Óptica — Fachada Comercial',
        subtitle:     'Presencia de calle con ingenio y bajo presupuesto',
        image:        '/img_valenss_optica.jpg',
        alt:          'Diseño y aplicación de fachada para Va-Lenss Óptica',
        description:  'Fachada exterior de bajo presupuesto para óptica local. Integra el logotipo VL de forma limpia y aprovecha el lateral del anuncio con una cartilla de examen visual clásica para generar interacción.',
        intervention: ['Letras corpóreas de acrílico negro', 'Lateral con test visual interactivo', 'Diseño de propuesta digital y montaje final', 'Distribución de información comercial clara'],
        resolves:     ['Elemento diferenciador en la calle', 'Óptima visibilidad a costos de producción reducidos', 'Legibilidad de datos de contacto de forma estética']
      },
      {
        category:     'Señalética ext.',
        title:        'CEFEVER — Centro de Fertilidad',
        subtitle:     'Imagen exterior que transmite calidez y confianza',
        image:        '/img_cefever.jpg',
        alt:          'Señalética exterior con letras corpóreas para Cefever',
        description:  'Proyecto de fachada comercial para clínica especializada. Combina paneles texturizados tipo madera, celosía metálica con corte láser y letras de acrílico retroiluminadas con luz cálida.',
        intervention: ['Panel tipo madera de exterior', 'Letras 3D en acrílico con volumen', 'Diseño de celosía metálica decorativa', 'Iluminación cálida oculta de bajo consumo'],
        resolves:     ['Elegancia e impacto visual nocturno', 'Imagen profesional y de alta gama', 'Ambiente que genera cercanía y confort visual']
      },
      {
        category:     'Señaletica personalizada',
        title:        'Señalética de Eventos y Bienes Raíces',
        subtitle:     'Diseños de alta visibilidad para exteriores',
        image:        '/img_custom_signage.jpg',
        alt:          'Señales personalizadas para eventos, bienes raíces y negocios locales',
        description:  'Línea de letreros temporales de jardín para promoción inmobiliaria, eventos comunitarios y publicidad local con tipografía de alto contraste.',
        intervention: ['Diseño de layouts de letreros', 'Selección de tipografías bold de alta legibilidad', 'Esquema de colores de alta visibilidad'],
        resolves:     ['Promoción directa y rápida de propiedades', 'Fácil colocación en exteriores', 'Lectura ágil a distancias cortas y medias']
      },
      {
        category:     'Figuras recortadas',
        title:        'Siluetas Recortadas Personalizadas',
        subtitle:     'Figuras gigantes para graduaciones y eventos',
        image:        '/img_bighead_cutouts.jpg',
        alt:          'Figuras recortadas gigantes para graduación y fiestas',
        description:  'Siluetas recortadas en materiales ligeros de rostros gigantes para fiestas de graduación, bodas, celebraciones y eventos deportivos.',
        intervention: ['Retoque y optimización de imágenes', 'Trazado vectorial de líneas de corte', 'Preparación de archivos para impresión digital'],
        resolves:     ['Interactividad y diversión en el evento', 'Pieza fotogénica ideal para fotos grupales', 'Alta definición de impresión en escala real']
      }
    ],
    specialties: [
      { icon: 'branding',  label: 'Diseño y producción'  },
      { icon: 'signage',   label: 'Señalética e impresión' },
      { icon: 'identity',  label: 'Relación con clientes'  },
      { icon: 'content',   label: 'Gestión operativa'     },
      { icon: 'norm',      label: 'Normativa NOM-026'    },
    ],
    tools: [
      { name: 'CorelDRAW',   abbr: 'Cd', color: '#00A859', level: 'Experto' },
      { name: 'Illustrator', abbr: 'Ai', color: '#FF9A00', level: 'Medio' },
      { name: 'Photoshop',   abbr: 'Ps', color: '#31A8FF', level: 'Medio' },
      { name: 'Figma',       abbr: 'Fg', color: '#A259FF', level: 'Muy Bajo' },
    ],
    experience: [
      { role: 'Gestión y Desarrollo de Negocio', company: 'Lumina', period: 'Enero 2026 – Actualidad', desc: 'Apoyo la estructura administrativa, comercial y operativa del negocio desde su etapa inicial. Realizo y adapto materiales visuales para comunicación con clientes, promoción y necesidades del negocio.' },
      { role: 'Jefe de Diseño / Responsable Administrativo-Operativo', company: 'Agencia Publicitaria Print Flash | Chemical Solutions', period: 'Marzo 2022 – Octubre 2025', desc: 'Colaboré con clientes para entender necesidades de diseño y adaptar materiales visuales para producción. Preparé archivos para impresión, corte, grabado y 3D, y coordiné pedidos desde cotización hasta entrega.' },
      { role: 'Coordinador Comercial', company: 'Agencia Publicitaria Print Flash | Chemical Solutions', period: 'Febrero 2018 – Mayo 2021', desc: 'Gestioné atención al cliente y seguimiento de ventas por distintos canales, con más de 500 interacciones semanales. Di seguimiento a solicitudes desde cotización, producción, entrega y cobranza.' },
      { role: 'Gestor de Citas', company: 'Universidad de Oriente', period: 'Junio 2024 – Diciembre 2024', desc: 'Recibí y clasifiqué leads por nivel de interés, manteniendo orden en la información de prospectos y citas, canalizándolos con agentes de ventas.' },
    ],
  },

  ulises: {
    name:     'Ulises Mendoza',
    initials: 'UM',
    title:    'Fotógrafo y director creativo',
    location: 'Ciudad de México, México',
    exp:      '8+ años de experiencia',
    email:    'ulises@merkana.club',
    website:  'www.ulisesmendoza.com',
    bio:      'Fotografío y dirijo proyectos visuales para marcas con identidad. Del food styling a la dirección de arte en campañas.',
    image:    '',
    featured: [
      {
        category:     'Fotografía',
        title:        'Food Styling Editorial',
        subtitle:     'Dirección de arte gastronómica',
        image:        '',
        alt:          'Food Styling Editorial',
        description:  'Dirección de arte y styling fotográfico gastronómico para menús de restaurantes y editoriales culinarias enfocadas en evocar frescura.',
        intervention: ['Food styling profesional en set', 'Esquema de iluminación natural y flashes', 'Retoque de color de alimentos', 'Dirección de props'],
        resolves:     ['Imágenes sumamente apetecibles para publicidad', 'Estilo fotográfico consistente en menús', 'Fotografías de alta definición para gran formato']
      },
      {
        category:     'Branding',
        title:        'Identidad para Café Nómada',
        subtitle:     'Esencia rústica y viajera',
        image:        '',
        alt:          'Identidad Café Nómada',
        description:  'Proyecto integral de branding y fotografía de marca para cafetería móvil de especialidad. Evoca libertad, naturaleza y aroma.',
        intervention: ['Fotografía de producto y estilo de vida', 'Estructura de logotipo y menú impreso', 'Paleta de colores tierra y orgánicos'],
        resolves:     ['Imagen rústica alineada a la calidad del café', 'Alta presencia en Instagram', 'Estética que atrae a entusiastas del café de especialidad']
      },
      {
        category:     'Dirección de arte',
        title:        'Campaña de Temporada',
        subtitle:     'Colección otoño / invierno',
        image:        '',
        alt:          'Campaña de Temporada',
        description:  'Coordinación artística de campaña visual de moda para marca local de ropa. Enfoque en contrastes, texturas de ropa y paisajes urbanos.',
        intervention: ['Búsqueda de locaciones exteriores', 'Dirección de modelos y poses', 'Retoque fotográfico con tonos fríos cinematográficos'],
        resolves:     ['Imagen de marca sofisticada y europea', 'Contenido para banner web y redes sociales', 'Aumento de interacción comercial de colección']
      },
      {
        category:     'Social Media',
        title:        'Parrilla Marca Fitness',
        subtitle:     'Estilo de vida saludable y activo',
        image:        '',
        alt:          'Parrilla Marca Fitness',
        description:  'Generación de contenido fotográfico mensual para redes sociales de gimnasio boutique. Enfoque en registrar esfuerzo, sudor e interacción.',
        intervention: ['Fotografía en acción en entrenamientos', 'Diseño de layouts para posts de Instagram', 'Videos cortos de alta energía (Reels)'],
        resolves:     ['Comunidad activa e interacción en redes', 'Atracción de nuevos usuarios locales', 'Demostración visual del equipamiento y servicios']
      },
      {
        category:     'Packaging',
        title:        'Línea de Producto Local',
        subtitle:     'Ecológico e identitario',
        image:        '',
        alt:          'Línea de Producto Local',
        description:  'Dirección de arte fotográfico para lanzamientos de empaques biodegradables de productos locales, con énfasis en el origen ecológico.',
        intervention: ['Fotografía macro de texturas de producto', 'Esquema de iluminación suave en estudio', 'Diseño de props con plantas y elementos naturales'],
        resolves:     ['Comunicación clara de valores ecológicos de marca', 'Presentación limpia de productos en e-commerce', 'Mayor interés en compras en línea']
      }
    ],
    specialties: [
      { icon: 'photo',     label: 'Fotografía'       },
      { icon: 'editorial', label: 'Editorial'         },
      { icon: 'content',   label: 'Contenido digital' },
      { icon: 'branding',  label: 'Branding'          },
      { icon: 'motion',    label: 'Motion'            },
      { icon: 'print',     label: 'Impresión'         },
    ],
    tools: [
      { name: 'Lightroom',     abbr: 'Lr', color: '#1a5fa8' },
      { name: 'Photoshop',     abbr: 'Ps', color: '#31A8FF' },
      { name: 'Capture One',   abbr: 'C1', color: '#4D7E3E' },
      { name: 'After Effects', abbr: 'Ae', color: '#9999FF' },
      { name: 'InDesign',      abbr: 'Id', color: '#FF3366' },
      { name: 'Figma',         abbr: 'Fg', color: '#A259FF' },
    ],
    experience: [
      { role: 'Fotógrafo Senior',      company: 'Estudio Kinesis', period: '2021 – Actualidad', desc: 'Dirijo sesiones fotográficas editoriales y de producto para marcas nacionales.' },
      { role: 'Director creativo Jr.', company: 'Agencia Sur',    period: '2018 – 2021',       desc: 'Coordiné producción visual para campañas digitales y materiales impresos.' },
      { role: 'Fotógrafo freelance',   company: 'Independiente',  period: '2015 – 2018',       desc: 'Proyectos de food styling, retratos y eventos para clientes locales.' },
    ],
  },
};

/* =========================================================
   ROUTING
   ========================================================= */
function getProfileKey() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const last  = parts[parts.length - 1];
  return profiles[last] ? last : 'victor';
}

const profileKey = getProfileKey();
const profile    = profiles[profileKey];

/* =========================================================
   HELPERS
   ========================================================= */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setText(sel, val) {
  document.querySelectorAll(sel).forEach(el => el.textContent = val);
}

const IMG_PH = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;

/* =========================================================
   POPULATE — META
   ========================================================= */
document.title = `${profile.name} — Portafolio`;

setText('[data-profile-name]',     profile.name);
setText('[data-profile-name2]',    profile.name);
setText('[data-profile-name3]',    profile.name);
setText('[data-profile-initials]', profile.initials);
setText('[data-profile-label]',    profile.title);
setText('[data-profile-bio]',      profile.bio);
setText('[data-profile-location]', profile.location);
setText('[data-profile-exp]',      profile.exp);
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Email links
document.querySelectorAll('#contact-link, #nav-contact').forEach(el => {
  if (el) el.href = `mailto:${profile.email}`;
});

// Avatar
const avatarEl = document.querySelector('[data-profile-avatar]');
if (avatarEl && profile.image) {
  avatarEl.setAttribute('role', 'button');
  avatarEl.setAttribute('tabindex', '0');
  avatarEl.setAttribute('aria-label', `Ampliar foto de ${profile.name}`);
  avatarEl.innerHTML = `<img src="${escHtml(profile.image)}" alt="Foto de ${escHtml(profile.name)}" />`;
  avatarEl.addEventListener('click', () => openLightbox(profile.image, `Foto de ${profile.name}`));
  avatarEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(profile.image, `Foto de ${profile.name}`);
    }
  });
}

/* =========================================================
   POPULATE — PROJECTS (Structured Showcase)
   ========================================================= */
const grid = document.querySelector('[data-projects-grid]');
if (grid) {
  grid.className = 'projects-list'; // Change class to vertical list
  profile.featured.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'project-row';
    row.setAttribute('data-reveal', '');

    const visualHtml = p.image
      ? `<div class="project-img-container">
           <img src="${escHtml(p.image)}" alt="${escHtml(p.alt || p.title)}" loading="lazy" />
           <div class="project-zoom-overlay">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
             <span>Click para ampliar</span>
           </div>
         </div>`
      : `<div class="proj-placeholder">${IMG_PH}<span>Sin imagen</span></div>`;

    let interventionItems = '';
    if (p.intervention) {
      p.intervention.forEach(item => {
        interventionItems += `<li>${escHtml(item)}</li>`;
      });
    }

    let resolvesItems = '';
    if (p.resolves) {
      p.resolves.forEach(item => {
        resolvesItems += `<li>${escHtml(item)}</li>`;
      });
    }

    row.innerHTML = `
      <div class="project-meta-col">
        <span class="project-category">${escHtml(p.category)}</span>
        <h3 class="project-title-text">${escHtml(p.title)}</h3>
        <p class="project-subtitle-text">${escHtml(p.subtitle || '')}</p>
        <p class="project-description-text">${escHtml(p.description || '')}</p>
        
        <div class="project-details-lists">
          ${interventionItems ? `
          <div class="detail-list-col">
            <strong>Intervención</strong>
            <ul>${interventionItems}</ul>
          </div>` : ''}
          ${resolvesItems ? `
          <div class="detail-list-col">
            <strong>Qué resuelve / Objetivo</strong>
            <ul>${resolvesItems}</ul>
          </div>` : ''}
        </div>
      </div>
      <div class="project-visual-col">
        ${visualHtml}
      </div>
    `;

    // Click to Open Lightbox
    const imgContainer = row.querySelector('.project-img-container');
    if (imgContainer) {
      imgContainer.addEventListener('click', () => {
        openLightbox(p.image, p.alt || p.title);
      });
    }

    grid.appendChild(row);
  });
}

/* =========================================================
   POPULATE — INSTALLATIONS (CAROUSEL)
   ========================================================= */
const installations = [
  { image: '/img_real_caesars1.jpg', title: 'Little Caesars Pizza — Entrada Drive Thru' },
  { image: '/img_real_caesars2.jpg', title: 'Little Caesars Pizza — Cartelería de Combos' },
  { image: '/img_real_pepitos.jpg',   title: 'Los Pepitos — Rotulación de Fachada' },
  { image: '/img_real_scanclinic.png',title: 'Scan Clinic — Anuncio Luminoso 3D LED' },
  { image: '/img_real_gnp.jpg',       title: 'GNP Seguros — Fachada con Letras 3D' },
  { image: '/img_real_tepeyac.jpg',   title: 'Colegio Tepeyac — Pintura y Vinil en Portón' },
  { image: '/img_real_mg.jpg',        title: 'MG Poza Rica — Lona de Próxima Apertura' },
  { image: '/img_real_greenmotion.jpg',title: 'Green Motion — Letrero de Fachada Car Rental' },
  { image: '/img_real_crit.png',      title: 'CRIT Veracruz — Parabus 15 Aniversario' },
  { image: '/img_real_teleton.png',   title: 'Teletón Veracruz — Vinil de Vidrio 15 Aniversario' },
  { image: '/img_real_thesite.png',   title: 'The Site — Anuncio Luminoso en Plaza' },
  { image: '/img_real_elmexicano.jpg', title: 'Chicharronería El Mexicano — Montaje de Fachada' },
];

const track = document.getElementById('carousel-track');
if (track) {
  installations.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <img src="${escHtml(item.image)}" alt="${escHtml(item.title)}" loading="lazy" />
      <div class="carousel-slide-title">${escHtml(item.title)}</div>
    `;
    slide.addEventListener('click', () => {
      openLightbox(item.image, item.title);
    });
    track.appendChild(slide);
  });
}

// Carousel Controls
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

if (track && prevBtn && nextBtn) {
  const getScrollAmount = () => {
    const slide = track.querySelector('.carousel-slide');
    if (!slide) return 300;
    return slide.clientWidth + 20; // slide width + gap
  };

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  // Toggle button visibility based on scroll position
  const toggleButtons = () => {
    prevBtn.style.opacity = track.scrollLeft <= 10 ? '0.3' : '1';
    const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
    nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
  };

  track.addEventListener('scroll', toggleButtons);
  window.addEventListener('resize', toggleButtons);
  setTimeout(toggleButtons, 100);
}

/* =========================================================
   POPULATE — SPECIALTIES
   ========================================================= */
const skillsEl = document.querySelector('[data-profile-skills]');
if (skillsEl) {
  profile.specialties.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.setAttribute('data-reveal', '');
    div.setAttribute('data-delay', String(Math.min(i + 1, 6)));
    div.innerHTML = `
      <span class="skill-icon-wrap" aria-hidden="true">${SPECIALTY_ICONS[s.icon] || SPECIALTY_ICONS.branding}</span>
      <span class="skill-label">${escHtml(s.label)}</span>
    `;
    skillsEl.appendChild(div);
  });
}

/* =========================================================
   POPULATE — TOOLS
   ========================================================= */
const toolsEl = document.querySelector('[data-profile-tools]');
if (toolsEl) {
  profile.tools.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'tool-item';
    div.setAttribute('data-reveal', '');
    div.setAttribute('data-delay', String(Math.min(i + 1, 6)));
    div.innerHTML = `
      <span class="tool-abbr" style="background:${t.color}" aria-hidden="true">${escHtml(t.abbr)}</span>
      <span class="tool-name">${escHtml(t.name)}</span>
      ${t.level ? `<span class="tool-level level-${t.level.toLowerCase().replace('á', 'a').replace(' ', '-')}" aria-hidden="true">${escHtml(t.level)}</span>` : ''}
    `;
    toolsEl.appendChild(div);
  });
}

/* =========================================================
   POPULATE — EXPERIENCE
   ========================================================= */
const expEl = document.querySelector('[data-profile-experience]');
if (expEl) {
  profile.experience.forEach((exp, i) => {
    const card = document.createElement('div');
    card.className = 'exp-card';
    card.setAttribute('data-reveal', '');
    card.setAttribute('data-delay', String(i + 1));
    card.innerHTML = `
      <p class="exp-period">${escHtml(exp.period)}</p>
      <p class="exp-role">${escHtml(exp.role)}</p>
      <p class="exp-company">${escHtml(exp.company)}</p>
      <p class="exp-desc">${escHtml(exp.desc)}</p>
    `;
    expEl.appendChild(card);
  });
}

/* =========================================================
   POPULATE — CONTACT
   ========================================================= */
const contactEl = document.querySelector('[data-profile-contact]');
if (contactEl) {
  const MAIL = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  const WHATSAPP = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;
  const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const LINK = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  let html = '';
  
  if (profile.email) {
    html += `
      <li class="contact-item">
        <span class="contact-item-icon" aria-hidden="true">${MAIL}</span>
        <a href="mailto:${escHtml(profile.email)}">${escHtml(profile.email)}</a>
      </li>
    `;
  }
  if (profile.whatsapp) {
    const waUrl = `https://wa.me/52${profile.whatsapp}`;
    html += `
      <li class="contact-item">
        <span class="contact-item-icon" aria-hidden="true">${WHATSAPP}</span>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer">WhatsApp: ${escHtml(profile.whatsapp)}</a>
      </li>
    `;
  }
  if (profile.linkedin) {
    html += `
      <li class="contact-item">
        <span class="contact-item-icon" aria-hidden="true">${LINKEDIN}</span>
        <a href="${escHtml(profile.linkedinUrl)}" target="_blank" rel="noopener noreferrer">${escHtml(profile.linkedin)}</a>
      </li>
    `;
  }
  if (profile.website) {
    html += `
      <li class="contact-item">
        <span class="contact-item-icon" aria-hidden="true">${LINK}</span>
        <a href="https://${escHtml(profile.website)}" target="_blank" rel="noopener noreferrer">${escHtml(profile.website)}</a>
      </li>
    `;
  }
  
  contactEl.innerHTML = html;
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

/* =========================================================
   LIGHTBOX MODAL & ZOOM
   ========================================================= */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxImg.classList.remove('zoomed');
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });
}

if (lightboxImg) {
  lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxImg.classList.toggle('zoomed');
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
