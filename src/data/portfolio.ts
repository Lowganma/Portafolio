export const projects = [
  {
    title: 'Homelab Lowserver',
    status: 'En desarrollo / Activo',
    description:
      'Servidor casero construido sobre una laptop con Debian 12, CasaOS y Docker. Uso Cloudflare Tunnel para exponer servicios mediante subdominios propios en lowganma.site.',
    technologies: ['Debian', 'Linux', 'Docker', 'CasaOS', 'Cloudflare Tunnel', 'SSH', 'Pi-hole', 'Jellyfin'],
    learnings: ['Administración Linux', 'Redes', 'DNS', 'Contenedores', 'Despliegue de servicios', 'Seguridad básica'],
  },
  {
    title: 'Achantes',
    status: 'En línea',
    description: 'Aplicación web desplegada en servidor propio usando Docker y publicada mediante Cloudflare Tunnel.',
    technologies: ['React', 'TypeScript', 'Vite', 'Docker', 'Cloudflare Tunnel', 'Supabase'],
    url: 'https://achantes.lowganma.site',
  },
  {
    title: 'CV online',
    status: 'Publicado como servicio web',
    description: 'Publicación de CV personal como servicio web en contenedor Nginx, expuesto mediante Cloudflare Tunnel.',
    technologies: ['HTML', 'CSS', 'Docker', 'Nginx', 'Cloudflare Tunnel'],
    url: 'https://cv.lowganma.site',
  },
];

export const skillGroups = [
  { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Vite'] },
  { category: 'Backend / Datos', skills: ['MySQL', 'Supabase', 'Postman'] },
  { category: 'Infraestructura', skills: ['Linux', 'Debian', 'Docker', 'Docker Compose', 'SSH', 'Cloudflare Tunnel', 'CasaOS', 'Pi-hole'] },
  { category: 'Herramientas', skills: ['GitHub', 'VS Code', 'Canva', 'CapCut', 'Adobe Premiere', 'ChatGPT'] },
];

export const experience = [
  {
    role: 'Analista de Datos',
    company: 'DCTI',
    description:
      'Diseño e implementación de bases de datos MySQL, desarrollo de un sistema de inventario, pruebas con Postman, mantenimiento de equipos y procesamiento de información institucional.',
  },
  {
    role: 'Editor de Video / Creador de Contenido Digital',
    company: 'Mokkadollars',
    description:
      'Edición remota de contenido con CapCut, Adobe Premiere y Canva, integrando herramientas de IA como ChatGPT y ElevenLabs para mejorar flujos de producción.',
  },
  {
    role: 'Administrador',
    company: 'Carnicería La Pik4',
    description:
      'Gestión de pagos, cuentas bancarias y tareas administrativas, con enfoque en organización, responsabilidad y control operativo diario.',
  },
];
