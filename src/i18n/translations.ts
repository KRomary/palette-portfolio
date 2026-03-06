export type Lang = "fr" | "en" | "es";

type TranslationEntry = { fr: string; en: string; es: string };

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home", es: "Inicio" },
    about: { fr: "À propos", en: "About", es: "Acerca de" },
    projects: { fr: "Projets", en: "Projects", es: "Proyectos" },
    contact: { fr: "Contact", en: "Contact", es: "Contacto" },
    settings: { fr: "Réglages", en: "Settings", es: "Ajustes" },
  },
  home: {
    title: { fr: "Kilyion Paul", en: "Kilyion Paul", es: "Kilyion Paul" },
    titleBold: { fr: "Romary", en: "Romary", es: "Romary" },
    greeting: { fr: "Bonjour, moi c'est", en: "Hello, I'm", es: "Hola, soy" },
    subtitle: {
      fr: "Ingénieur Data Science & BI",
      en: "Data Science & BI Engineer",
      es: "Ingeniero Data Science & BI",
    },
    description: {
      fr: "Ingénieur en informatique spécialisé en Data Science et Business Intelligence. Je transforme les données en insights actionnables et je construis des solutions innovantes, du dashboard à l'application complète.",
      en: "Computer engineer specialized in Data Science and Business Intelligence. I turn data into actionable insights and build innovative solutions, from dashboards to full applications.",
      es: "Ingeniero informático especializado en Data Science y Business Intelligence. Transformo los datos en insights accionables y construyo soluciones innovadoras, desde dashboards hasta aplicaciones completas.",
    },
    cta: { fr: "Voir mes projets", en: "See my projects", es: "Ver mis proyectos" },
    contact: { fr: "Discutons ensemble", en: "Let's talk", es: "Hablemos" },
    stats: {
      years: { fr: "Années d'études", en: "Years of study", es: "Años de estudio" },
      yearsDetail: { fr: "Diplôme d'ingénieur CESI", en: "CESI engineering degree", es: "Título de ingeniero CESI" },
      exp: { fr: "Expériences pro", en: "Work experiences", es: "Experiencias profesionales" },
      expDetail: {
        fr: "Alternance & stage international",
        en: "Apprenticeship & international internship",
        es: "Alternancia y prácticas internacionales",
      },
      tech: { fr: "Technologies", en: "Technologies", es: "Tecnologías" },
      techDetail: { fr: "Python, SQL, Power BI…", en: "Python, SQL, Power BI…", es: "Python, SQL, Power BI…" },
      tools: { fr: "Outils", en: "Tools", es: "Herramientas" },
      toolsDetail: {
        fr: "VS Code, Power BI, GitHub…",
        en: "VS Code, Power BI, GitHub…",
        es: "VS Code, Power BI, GitHub…",
      },
      projects: { fr: "Projets réalisés", en: "Projects built", es: "Proyectos realizados" },
      projectsDetail: { fr: "Data, Web & Mobile", en: "Data, Web & Mobile", es: "Data, Web & Mobile" },
    },
  },
  about: {
    title: { fr: "À propos de moi", en: "About me", es: "Sobre mí" },
    intro: {
      fr: "Ingénieur en informatique diplômé de CESI école d'ingénieurs, spécialisé en Data Science et Business Intelligence. Je recherche un poste d'ingénieur data ou data analyste pour mettre à profit mes compétences en analyse et automatisation de données, tout en continuant à me développer dans un environnement innovant.",
      en: "Computer engineer graduated from CESI engineering school, specialized in Data Science and Business Intelligence. I'm looking for a data engineer or data analyst position to leverage my skills in data analysis and automation, while continuing to grow in an innovative environment.",
      es: "Ingeniero informático graduado de la escuela de ingenieros CESI, especializado en Data Science y Business Intelligence. Busco un puesto de ingeniero de datos o analista de datos para aprovechar mis competencias en análisis y automatización de datos, mientras sigo creciendo en un entorno innovador.",
    },
    skillsTitle: { fr: "Compétences techniques", en: "Technical Skills", es: "Competencias técnicas" },
    educationTitle: { fr: "Formation", en: "Education", es: "Formación" },
  },
  projects: {
    title: { fr: "Mes Projets", en: "My Projects", es: "Mis Proyectos" },
    viewProject: { fr: "Voir le projet", en: "View project", es: "Ver proyecto" },
  },
  contact: {
    title: { fr: "Me Contacter", en: "Contact Me", es: "Contáctame" },
    name: { fr: "Nom", en: "Name", es: "Nombre" },
    email: { fr: "Email", en: "Email", es: "Correo" },
    message: { fr: "Message", en: "Message", es: "Mensaje" },
    send: { fr: "Envoyer", en: "Send", es: "Enviar" },
    success: {
      fr: "Message envoyé avec succès !",
      en: "Message sent successfully!",
      es: "¡Mensaje enviado con éxito!",
    },
  },
  settings: {
    title: { fr: "Réglages", en: "Settings", es: "Ajustes" },
    accessibility: { fr: "Accessibilité visuelle", en: "Visual Accessibility", es: "Accesibilidad visual" },
    accessibilityDesc: {
      fr: "Activez un filtre pour adapter les couleurs du site à votre vision.",
      en: "Enable a filter to adapt the site colors to your vision.",
      es: "Active un filtro para adaptar los colores del sitio a su visión.",
    },
    none: { fr: "Vision normale", en: "Normal vision", es: "Visión normal" },
    protanopia: { fr: "Protanopie", en: "Protanopia", es: "Protanopía" },
    protanopiaDesc: {
      fr: "Difficulté à percevoir le rouge",
      en: "Difficulty perceiving red",
      es: "Dificultad para percibir el rojo",
    },
    deuteranopia: { fr: "Deutéranopie", en: "Deuteranopia", es: "Deuteranopía" },
    deuteranopiaDesc: {
      fr: "Difficulté à percevoir le vert",
      en: "Difficulty perceiving green",
      es: "Dificultad para percibir el verde",
    },
    tritanopia: { fr: "Tritanopie", en: "Tritanopia", es: "Tritanopía" },
    tritanopiaDesc: {
      fr: "Difficulté à percevoir le bleu",
      en: "Difficulty perceiving blue",
      es: "Dificultad para percibir el azul",
    },
    achromatopsia: { fr: "Monochromatisme", en: "Achromatopsia", es: "Acromatopsia" },
    achromatopsiaDesc: { fr: "Vision en nuances de gris", en: "Grayscale vision", es: "Visión en escala de grises" },
  },
} as const;

export function t(obj: { fr: string; en: string; es?: string }, lang: Lang): string {
  if (lang === "es") return obj.es ?? obj.en;
  return obj[lang];
}
