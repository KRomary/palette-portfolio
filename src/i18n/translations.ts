export type Lang = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    about: { fr: "À propos", en: "About" },
    projects: { fr: "Projets", en: "Projects" },
    contact: { fr: "Contact", en: "Contact" },
  },
  home: {
    title: { fr: "Brieuc", en: "Brieuc" },
    titleBold: { fr: "Dumortier", en: "Dumortier" },
    subtitle: { fr: "Ingénieur IT - Data", en: "IT Engineer - Data" },
    description: {
      fr: "Spécialisé en Data Engineering et Business Intelligence. Passionné par la création, la conception et l'innovation technologique.",
      en: "Specialized in Data Engineering and Business Intelligence. Passionate about creation, design and technological innovation.",
    },
    cta: { fr: "Découvrir mes réalisations", en: "Discover my work" },
    contact: { fr: "Me contacter", en: "Contact me" },
    stats: {
      years: { fr: "Années d'études", en: "Years of study" },
      yearsDetail: { fr: "École d'ingénieur IT", en: "IT Engineering school" },
      exp: { fr: "Expériences professionnelles", en: "Professional experiences" },
      expDetail: { fr: "Stages & alternances", en: "Internships & apprenticeships" },
      tech: { fr: "Technologies maîtrisées", en: "Technologies mastered" },
      techDetail: { fr: "Data stack & outils", en: "Data stack & tools" },
      projects: { fr: "Projets personnels", en: "Personal projects" },
      projectsDetail: { fr: "Créations & innovations", en: "Creations & innovations" },
    },
  },
  about: {
    title: { fr: "À propos de moi", en: "About me" },
    intro: {
      fr: "Je suis un ingénieur IT passionné par la data, le développement et l'innovation technologique. Mon parcours m'a permis de développer une expertise solide en Data Engineering et Business Intelligence.",
      en: "I'm an IT engineer passionate about data, development and technological innovation. My journey has allowed me to develop solid expertise in Data Engineering and Business Intelligence.",
    },
    skillsTitle: { fr: "Compétences", en: "Skills" },
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
} as const;

export function t(obj: { fr: string; en: string }, lang: Lang): string {
  return obj[lang];
}
