/*
export const proyectosDestacados = [
    {
        nombre: "Pagina SAP con Framework Vue.js",
        descripcion: 'SPA desarrollada con Vue.js para el frontend. Incluye Node.js para el backend y gestión de bases de datos MongoDB. Experiencia Full Stack y rendimiento optimizado.',
        link: 'https://vue-portafolio.vercel.app/',
        imageUrl: "/images/vue_portafolio.jpg",
        imageAlt: "Vue portafolio",
    },
    {
        nombre: "Pagina SAP con Framework React.js",
        descripcion: 'SPA desarrollada con React.js para el frontend. Incluye Node.js para el backend y gestión de bases de datos MongoDB. Experiencia Full Stack y rendimiento optimizado.',
        link: 'https://react-portafolio-gules.vercel.app/',
        imageUrl: "/images/react_portafolio.jpg",
        imageAlt: "React portafolio",
    },
    {
        nombre: "Diseño Totalmente Adaptativo con Vue y Tailwind CSS",
        descripcion: 'Single Page Application (SPA) construida con Vue.js y estilizada con Tailwind CSS. Garantiza una experiencia de usuario perfecta al adaptarse de forma nativa a cualquier dispositivo móvil, tablet o escritorio.',
        link: 'https://plantilla-tailwind-vue.vercel.app/',
        imageUrl: '/images/platilla_tailwind.jpg',
        imageAlt: "Plantilla Tailwind",
    }
      
];
*/

export const proyectosDestacados = [
    // --- SECCIÓN DE VIDEO EDITING (Prioridad para Facebook) ---
    {
        id: 1,
        tipo: 'video',
        nombre: "Saitama: Psicología de la Masculinidad",
        descripcion: 'Edición dinámica de alto impacto. Implementación de ganchos (hooks) visuales en los primeros 5 segundos y storytelling psicológico para maximizar la retención de audiencia.',
        link: 'https://youtu.be/DOaUdCLb4V4',
        videoPreview: '/videos/saitama_preview.mp4', // Aquí iría tu clip corto
        thumbnail: '/images/saitama_thumb.jpg',
        tech: ['CapCut Desktop', 'Storytelling', 'Sound Design'],
        metrica: 'Retención optimizada +60%'
    },
    {
        id: 2,
        tipo: 'video',
        nombre: "Eren Jaeger: El Trauma y el Arquetipo",
        descripcion: 'Análisis documental con ritmo de edición rápido. Uso de B-roll estratégico y overlays de texto dinámicos para simplificar conceptos complejos de psicología analítica.',
        link: 'https://youtu.be/dHrLX3ANkrk',
        videoPreview: '/videos/eren_preview.mp4',
        thumbnail: '/images/eren_thumb.jpg',
        tech: ['CapCut', 'Audacity', 'Gemini AI (Visuals)'],
        metrica: 'Formato Documental'
    },
    {
        id: 3,
        tipo: 'video',
        nombre: "Short: La Ley de Oro de la Congruencia",
        descripcion: 'Adaptación de formato largo a vertical (9:16). Subtítulos dinámicos de alta velocidad y efectos de sonido para captar atención en el feed de TikTok/Reels.',
        link: 'https://www.tiktok.com/@hombredecongruencia/video/7582339003064831288',
        videoPreview: '/videos/short_preview.mp4',
        thumbnail: '/images/short_thumb.jpg',
        tech: ['Mobile First', 'Subtítulos Dinámicos', 'SFX'],
        metrica: 'Viral Hook Design'
    },

    // --- SECCIÓN DE PROGRAMACIÓN FULL STACK ---
    {
        id: 4,
        tipo: 'web',
        nombre: "SPA con Vue.js & Node.js",
        descripcion: 'Arquitectura completa con gestión de estados y base de datos MongoDB. Enfoque en rendimiento y escalabilidad técnica.',
        link: 'https://vue-portafolio.vercel.app/',
        imageUrl: "/images/vue_portafolio.jpg",
        imageAlt: "Vue portafolio",
        tech: ['Vue.js', 'Node.js', 'MongoDB']
    },
    {
        id: 5,
        tipo: 'web',
        nombre: "Diseño Adaptativo con Tailwind",
        descripcion: 'Single Page Application enfocada en UX/UI responsivo. Código limpio y optimizado para SEO y velocidad de carga.',
        link: 'https://plantilla-tailwind-vue.vercel.app/',
        imageUrl: '/images/platilla_tailwind.jpg',
        imageAlt: "Plantilla Tailwind",
        tech: ['Tailwind CSS', 'Vite', 'Frontend']
    }
];