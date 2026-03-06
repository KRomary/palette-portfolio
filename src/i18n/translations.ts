export type Lang = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    about: { fr: "À propos", en: "About" },
    projects: { fr: "Projets", en: "Projects" },
    contact: { fr: "Contact", en: "Contact" },
  },
  home: {
    title: { fr: "Kilyion", en: "Kilyion" },
    titleBold: { fr: "Nromary", en: "Nromary" },
    greeting: { fr: "Salut, moi c'est", en: "Hey, I'm" },
    subtitle: { fr: "Développeur & Créateur Digital", en: "Developer & Digital Creator" },
    description: {
      fr: "Je conçois des expériences numériques modernes, de l'idée au déploiement. Toujours curieux, toujours en train de construire quelque chose de nouveau.",
      en: "I craft modern digital experiences, from idea to deployment. Always curious, always building something new.",
    },
    cta: { fr: "Voir mes projets", en: "See my projects" },
    contact: { fr: "Discutons ensemble", en: "Let's talk" },
    stats: {
      years: { fr: "Années d'études", en: "Years of study" },
      yearsDetail: { fr: "Formation ingénieur", en: "Engineering degree" },
      exp: { fr: "Expériences pro", en: "Work experiences" },
      expDetail: { fr: "Stages & missions", en: "Internships & missions" },
      tech: { fr: "Technologies", en: "Technologies" },
      techDetail: { fr: "Stack & outils", en: "Stack & tools" },
      projects: { fr: "Projets réalisés", en: "Projects built" },
      projectsDetail: { fr: "Perso & pro", en: "Personal & pro" },
    },
  },
  about: {
    title: { fr: "À propos de moi", en: "About me" },
    intro: {
      fr: "Passionné par le développement et les nouvelles technologies, j'aime transformer des idées en produits concrets. Mon parcours m'a permis d'acquérir une solide expertise technique et une vision créative.",
      en: "Passionate about development and new technologies, I love turning ideas into real products. My journey has allowed me to build solid technical expertise and a creative vision.",
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
