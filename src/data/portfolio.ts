import { Server, Trophy, Smartphone, BarChart3, Zap, Database, Globe } from "lucide-react";

export type ProjectStatus = "done" | "in-progress" | "planned";

export interface RoadmapStep {
  label: { fr: string; en: string };
  status: ProjectStatus;
  detail: { fr: string; en: string };
  link?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  desc: { fr: string; en: string };
  longDesc?: { fr: string; en: string };
  tags: string[];
  status: ProjectStatus;
  icon: React.ElementType;
  link?: string;
  objectives?: { fr: string; en: string }[];
  tools?: string[];
  timeline?: { fr: string; en: string };
  cost?: { fr: string; en: string };
  roadmap?: RoadmapStep[];
  docs?: { label: { fr: string; en: string }; url: string }[];
}

export const technologies = [
  "Python", "SQL", "Power BI", "Power Automate", "DAX", "Jupyter",
  "C", "C++", "C#", "PHP", "JavaScript", "HTML", "CSS",
  "MySQL", "PostgreSQL", "MongoDB", "NoSQL",
  "Java", "Kotlin", "TypeScript", "React", "Tailwind CSS",
  "Spigot/Paper", "API REST",
];

export const tools = [
  "VS Code", "GitHub", "Microsoft Power Platform", "Excel",
  "Android Studio", "Firebase", "Linux", "Docker",
  "Power Automate", "Jupyter Notebook", "Ulis (Sopra Steria)",
];

export const projectsData: ProjectData[] = [
  {
    slug: "minecraft-server",
    title: "Minecraft Server",
    desc: {
      fr: "Création et gestion d'un serveur Minecraft communautaire.",
      en: "Creation and management of a community Minecraft server.",
    },
    longDesc: {
      fr: "Création et gestion d'un serveur Minecraft communautaire. Les visiteurs du site peuvent voir l'état du serveur, les joueurs connectés et envoyer une demande pour créer un profil afin de rejoindre le serveur.",
      en: "Creation and management of a community Minecraft server. Site visitors can see server status, connected players, and submit a request to create a profile to join the server.",
    },
    tags: ["Java", "Spigot/Paper", "Linux", "Networking"],
    status: "in-progress",
    icon: Server,
    objectives: [
      { fr: "Héberger un serveur Minecraft communautaire stable", en: "Host a stable community Minecraft server" },
      { fr: "Afficher le statut en temps réel sur le portfolio", en: "Display real-time status on the portfolio" },
      { fr: "Permettre aux visiteurs de demander un accès", en: "Allow visitors to request access" },
    ],
    tools: ["Java", "Spigot/Paper", "Linux", "Docker", "Networking"],
    timeline: { fr: "Mars 2025 – En cours", en: "March 2025 – Ongoing" },
    cost: { fr: "Gratuit (auto-hébergé)", en: "Free (self-hosted)" },
    roadmap: [
      { label: { fr: "Configuration du serveur", en: "Server Setup" }, status: "done", detail: { fr: "Installation et config de Paper/Spigot sur VPS Linux", en: "Paper/Spigot install and config on Linux VPS" } },
      { label: { fr: "Plugins & gameplay", en: "Plugins & Gameplay" }, status: "done", detail: { fr: "Sélection et configuration des plugins essentiels", en: "Selection and configuration of essential plugins" } },
      { label: { fr: "Intégration web (statut serveur)", en: "Web Integration (server status)" }, status: "in-progress", detail: { fr: "API pour afficher le statut et les joueurs connectés", en: "API to display status and connected players" } },
      { label: { fr: "Système de demande d'accès", en: "Access Request System" }, status: "planned", detail: { fr: "Formulaire et workflow d'approbation", en: "Form and approval workflow" } },
    ],
  },
  {
    slug: "football-prediction",
    title: "Football Prediction",
    desc: {
      fr: "Système de prédiction de résultats de matchs de football utilisant le Machine Learning.",
      en: "Football match result prediction system using Machine Learning.",
    },
    longDesc: {
      fr: "Système de prédiction de résultats de matchs de football utilisant le Machine Learning. Projet en cours de développement avec une roadmap structurée.",
      en: "Football match result prediction system using Machine Learning. Currently in development with a structured roadmap.",
    },
    tags: ["Python", "MongoDB", "API-Football", "ML"],
    status: "in-progress",
    icon: Trophy,
    objectives: [
      { fr: "Prédire les résultats de matchs avec du ML", en: "Predict match results using ML" },
      { fr: "Collecter des données via API-Football", en: "Collect data via API-Football" },
      { fr: "Créer un dashboard de visualisation", en: "Create a visualization dashboard" },
    ],
    tools: ["Python", "MongoDB", "Jupyter Notebook", "API REST"],
    timeline: { fr: "Janv. 2025 – En cours", en: "Jan 2025 – Ongoing" },
    cost: { fr: "~20€/mois (API Football)", en: "~€20/month (API Football)" },
    roadmap: [
      { label: { fr: "Sélection de l'API Football", en: "API Football Selection" }, status: "done", detail: { fr: "API-Football (api-football.com) choisie pour la couverture et la documentation", en: "API-Football (api-football.com) chosen for coverage and documentation" }, link: "https://www.api-football.com/documentation-v3" },
      { label: { fr: "Création des scripts de population BDD", en: "DB Population Scripts" }, status: "done", detail: { fr: "Scripts Python pour récupérer et insérer les données dans MongoDB", en: "Python scripts to fetch and insert data into MongoDB" } },
      { label: { fr: "Tests des scripts de population", en: "Population Scripts Testing" }, status: "in-progress", detail: { fr: "Validation de la cohérence des données collectées", en: "Validating collected data consistency" } },
      { label: { fr: "Feature engineering & entraînement ML", en: "Feature Engineering & ML Training" }, status: "planned", detail: { fr: "Préparation des features et entraînement des modèles de prédiction", en: "Feature preparation and prediction model training" } },
      { label: { fr: "Interface de visualisation", en: "Visualization Interface" }, status: "planned", detail: { fr: "Dashboard web pour afficher les prédictions", en: "Web dashboard to display predictions" } },
    ],
    docs: [
      { label: { fr: "Documentation API-Football", en: "API-Football Documentation" }, url: "https://www.api-football.com/documentation-v3" },
    ],
  },
  {
    slug: "beauty-survey",
    title: "Beauty Survey App",
    desc: {
      fr: "Application Android permettant de sonder des personnes sur la beauté de différents profils.",
      en: "Android application to survey people on the beauty of different profiles.",
    },
    longDesc: {
      fr: "Application Android permettant de sonder des personnes sur la beauté de différents profils. Collecte et analyse statistique des résultats.",
      en: "Android application to survey people on the beauty of different profiles. Statistical collection and analysis of results.",
    },
    tags: ["Android Studio", "Kotlin", "Firebase"],
    status: "in-progress",
    icon: Smartphone,
    objectives: [
      { fr: "Sonder les perceptions de beauté", en: "Survey beauty perceptions" },
      { fr: "Collecter et analyser les résultats statistiques", en: "Collect and analyze statistical results" },
    ],
    tools: ["Android Studio", "Kotlin", "Firebase"],
    timeline: { fr: "Fév. 2025 – En cours", en: "Feb 2025 – Ongoing" },
    cost: { fr: "Gratuit (Firebase Spark)", en: "Free (Firebase Spark)" },
    roadmap: [
      { label: { fr: "Maquettage UI", en: "UI Mockup" }, status: "done", detail: { fr: "Design des écrans principaux", en: "Design of main screens" } },
      { label: { fr: "Développement de l'app", en: "App Development" }, status: "in-progress", detail: { fr: "Implémentation en Kotlin avec Firebase", en: "Implementation in Kotlin with Firebase" } },
      { label: { fr: "Analyse statistique", en: "Statistical Analysis" }, status: "planned", detail: { fr: "Module de visualisation des résultats", en: "Results visualization module" } },
    ],
  },
  {
    slug: "power-bi-dashboards",
    title: "Power BI Dashboards",
    desc: {
      fr: "Conception de tableaux de bord Power BI pour le contrôle de gestion chez SIA Habitat.",
      en: "Design of Power BI dashboards for management control at SIA Habitat.",
    },
    longDesc: {
      fr: "Conception de tableaux de bord Power BI pour le contrôle de gestion chez SIA Habitat : suivi de la vacance locative, automatisation du suivi d'usage via Power Automate.",
      en: "Design of Power BI dashboards for management control at SIA Habitat: rental vacancy tracking, usage monitoring automation via Power Automate.",
    },
    tags: ["Power BI", "DAX", "SQL", "Power Automate"],
    status: "done",
    icon: BarChart3,
    objectives: [
      { fr: "Suivi de la vacance locative", en: "Rental vacancy tracking" },
      { fr: "Automatisation du suivi d'usage", en: "Usage monitoring automation" },
    ],
    tools: ["Power BI", "DAX", "SQL", "Power Automate", "Excel"],
    timeline: { fr: "Août 2024 – Oct. 2025", en: "Aug 2024 – Oct 2025" },
    cost: { fr: "N/A (entreprise)", en: "N/A (company)" },
  },
  {
    slug: "ev-route-optimization",
    title: "EV Route Optimization",
    desc: {
      fr: "Solution Python pour l'optimisation de trajets de véhicules électriques.",
      en: "Python solution for electric vehicle route optimization.",
    },
    longDesc: {
      fr: "Développement d'une solution Python pour l'optimisation de trajets de véhicules électriques, intégrant des API de géocodage et des données topographiques (stage à l'UPV, Valence).",
      en: "Python solution for electric vehicle route optimization, integrating geocoding APIs and topographic data (internship at UPV, Valencia).",
    },
    tags: ["Python", "API REST", "Géocodage", "Recherche"],
    status: "done",
    icon: Zap,
    objectives: [
      { fr: "Optimiser les trajets pour véhicules électriques", en: "Optimize routes for electric vehicles" },
      { fr: "Intégrer des API de géocodage", en: "Integrate geocoding APIs" },
    ],
    tools: ["Python", "API REST", "Jupyter Notebook"],
    timeline: { fr: "Août 2023 – Jan. 2024", en: "Aug 2023 – Jan 2024" },
    cost: { fr: "Gratuit (recherche académique)", en: "Free (academic research)" },
  },
  {
    slug: "data-quality-script",
    title: "Data Quality Script",
    desc: {
      fr: "Script Python de repérage et d'analyse des doublons dans les tiers fournisseurs.",
      en: "Python script for detecting and analyzing supplier duplicates.",
    },
    longDesc: {
      fr: "Script Python de repérage et d'analyse des doublons dans les tiers fournisseurs pour améliorer la qualité des données chez SIA Habitat.",
      en: "Python script for detecting and analyzing supplier duplicates to improve data quality at SIA Habitat.",
    },
    tags: ["Python", "Data Quality", "SQL"],
    status: "done",
    icon: Database,
    objectives: [
      { fr: "Détecter les doublons fournisseurs", en: "Detect supplier duplicates" },
      { fr: "Améliorer la qualité des données", en: "Improve data quality" },
    ],
    tools: ["Python", "SQL", "Excel"],
    timeline: { fr: "2024", en: "2024" },
    cost: { fr: "N/A (entreprise)", en: "N/A (company)" },
  },
  {
    slug: "portfolio-web",
    title: "Portfolio Web",
    desc: {
      fr: "Ce site portfolio personnel construit avec React, TypeScript et Tailwind CSS.",
      en: "This personal portfolio website built with React, TypeScript and Tailwind CSS.",
    },
    longDesc: {
      fr: "Ce site portfolio personnel construit avec React, TypeScript et Tailwind CSS. Bilingue, accessible et responsive.",
      en: "This personal portfolio website built with React, TypeScript and Tailwind CSS. Bilingual, accessible and responsive.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS"],
    status: "done",
    icon: Globe,
    objectives: [
      { fr: "Présenter mes compétences et projets", en: "Showcase my skills and projects" },
      { fr: "Site bilingue, accessible et responsive", en: "Bilingual, accessible and responsive site" },
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "VS Code", "GitHub"],
    timeline: { fr: "2025", en: "2025" },
    cost: { fr: "Gratuit", en: "Free" },
  },
];
