export type Lang = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    about: { fr: "À propos", en: "About" },
    projects: { fr: "Projets", en: "Projects" },
    contact: { fr: "Contact", en: "Contact" },
    settings: { fr: "Réglages", en: "Settings" },
  },
  home: {
    title: { fr: "Kilyion Paul", en: "Kilyion Paul" },
    titleBold: { fr: "Romary", en: "Romary" },
    greeting: { fr: "Salut, moi c'est", en: "Hey, I'm" },
    subtitle: { fr: "Ingénieur Data Science & BI", en: "Data Science & BI Engineer" },
    description: {
      fr: "Ingénieur en informatique spécialisé en Data Science et Business Intelligence. Je transforme les données en insights actionnables et je construis des solutions innovantes, du dashboard à l'application complète.",
      en: "Computer engineer specialized in Data Science and Business Intelligence. I turn data into actionable insights and build innovative solutions, from dashboards to full applications.",
    },
    cta: { fr: "Voir mes projets", en: "See my projects" },
    contact: { fr: "Discutons ensemble", en: "Let's talk" },
    stats: {
      years: { fr: "Années d'études", en: "Years of study" },
      yearsDetail: { fr: "Diplôme d'ingénieur CESI", en: "CESI engineering degree" },
      exp: { fr: "Expériences pro", en: "Work experiences" },
      expDetail: { fr: "Alternance & stage international", en: "Apprenticeship & international internship" },
      tech: { fr: "Technologies", en: "Technologies" },
      techDetail: { fr: "Python, SQL, Power BI…", en: "Python, SQL, Power BI…" },
      tools: { fr: "Outils", en: "Tools" },
      toolsDetail: { fr: "VS Code, Power BI, GitHub…", en: "VS Code, Power BI, GitHub…" },
      projects: { fr: "Projets réalisés", en: "Projects built" },
      projectsDetail: { fr: "Data, Web & Mobile", en: "Data, Web & Mobile" },
    },
  },
  about: {
    title: { fr: "À propos de moi", en: "About me" },
    intro: {
      fr: "Ingénieur en informatique diplômé de CESI école d'ingénieurs, spécialisé en Data Science et Business Intelligence. Je recherche un poste d'ingénieur data ou data analyste pour mettre à profit mes compétences en analyse et automatisation de données, tout en continuant à me développer dans un environnement innovant.",
      en: "Computer engineer graduated from CESI engineering school, specialized in Data Science and Business Intelligence. I'm looking for a data engineer or data analyst position to leverage my skills in data analysis and automation, while continuing to grow in an innovative environment.",
    },
    skillsTitle: { fr: "Compétences techniques", en: "Technical Skills" },
    educationTitle: { fr: "Formation", en: "Education" },
  },
  projects: {
    title: { fr: "Mes Projets", en: "My Projects" },
    viewProject: { fr: "Voir le projet", en: "View project" },
  },
  contact: {
    title: { fr: "Me Contacter", en: "Contact Me" },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Email", en: "Email" },
    message: { fr: "Message", en: "Message" },
    send: { fr: "Envoyer", en: "Send" },
    success: { fr: "Message envoyé avec succès !", en: "Message sent successfully!" },
  },
  settings: {
    title: { fr: "Réglages", en: "Settings" },
    accessibility: { fr: "Accessibilité visuelle", en: "Visual Accessibility" },
    accessibilityDesc: {
      fr: "Activez un filtre pour adapter les couleurs du site à votre vision.",
      en: "Enable a filter to adapt the site colors to your vision.",
    },
    none: { fr: "Vision normale", en: "Normal vision" },
    protanopia: { fr: "Protanopie", en: "Protanopia" },
    protanopiaDesc: { fr: "Difficulté à percevoir le rouge", en: "Difficulty perceiving red" },
    deuteranopia: { fr: "Deutéranopie", en: "Deuteranopia" },
    deuteranopiaDesc: { fr: "Difficulté à percevoir le vert", en: "Difficulty perceiving green" },
    tritanopia: { fr: "Tritanopie", en: "Tritanopia" },
    tritanopiaDesc: { fr: "Difficulté à percevoir le bleu", en: "Difficulty perceiving blue" },
    achromatopsia: { fr: "Monochromatisme", en: "Achromatopsia" },
    achromatopsiaDesc: { fr: "Vision en nuances de gris", en: "Grayscale vision" },
  },
} as const;

export function t(obj: { fr: string; en: string }, lang: Lang): string {
  return obj[lang];
}
