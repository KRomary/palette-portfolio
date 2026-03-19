import { Server, Trophy, Smartphone, BarChart3, Zap, Database, Globe } from "lucide-react";

export type ProjectStatus = "done" | "in-progress" | "planned";
export type ProjectOrigin = "cesi" | "sia" | "upv" | "personal";

export interface RoadmapStep {
  label: { fr: string; en: string; es?: string };
  status: ProjectStatus;
  detail: { fr: string; en: string; es?: string };
  link?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  desc: { fr: string; en: string; es?: string };
  longDesc?: { fr: string; en: string; es?: string };
  tags: string[];
  status: ProjectStatus;
  origin: ProjectOrigin;
  icon: React.ElementType;
  link?: string;
  objectives?: { fr: string; en: string; es?: string }[];
  tools?: string[];
  timeline?: { fr: string; en: string; es?: string };
  cost?: { fr: string; en: string; es?: string };
  roadmap?: RoadmapStep[];
  docs?: { label: { fr: string; en: string; es?: string }; url: string }[];
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

export const originLabels: Record<ProjectOrigin, { fr: string; en: string; es: string }> = {
  cesi: { fr: "CESI", en: "CESI", es: "CESI" },
  sia: { fr: "SIA Habitat", en: "SIA Habitat", es: "SIA Habitat" },
  upv: { fr: "UPV Valencia", en: "UPV Valencia", es: "UPV Valencia" },
  personal: { fr: "Personnel", en: "Personal", es: "Personal" },
};

export const projectsData: ProjectData[] = [
  {
    slug: "minecraft-server",
    title: "Minecraft Server",
    origin: "personal",
    desc: {
      fr: "Création et gestion d'un serveur Minecraft communautaire.",
      en: "Creation and management of a community Minecraft server.",
      es: "Creación y gestión de un servidor Minecraft comunitario.",
    },
    longDesc: {
      fr: "Création et gestion d'un serveur Minecraft communautaire. Les visiteurs du site peuvent voir l'état du serveur, les joueurs connectés et envoyer une demande pour créer un profil afin de rejoindre le serveur.",
      en: "Creation and management of a community Minecraft server. Site visitors can see server status, connected players, and submit a request to create a profile to join the server.",
      es: "Creación y gestión de un servidor Minecraft comunitario. Los visitantes del sitio pueden ver el estado del servidor, los jugadores conectados y enviar una solicitud para crear un perfil y unirse al servidor.",
    },
    tags: ["Java", "Spigot/Paper", "Linux", "Networking"],
    status: "in-progress",
    icon: Server,
    objectives: [
      { fr: "Héberger un serveur Minecraft communautaire stable", en: "Host a stable community Minecraft server", es: "Alojar un servidor Minecraft comunitario estable" },
      { fr: "Afficher le statut en temps réel sur le portfolio", en: "Display real-time status on the portfolio", es: "Mostrar el estado en tiempo real en el portfolio" },
      { fr: "Permettre aux visiteurs de demander un accès", en: "Allow visitors to request access", es: "Permitir a los visitantes solicitar acceso" },
    ],
    tools: ["Java", "Spigot/Paper", "Linux", "Docker", "Networking"],
    timeline: { fr: "Mars 2025 – En cours", en: "March 2025 – Ongoing", es: "Marzo 2025 – En curso" },
    cost: { fr: "Gratuit (auto-hébergé)", en: "Free (self-hosted)", es: "Gratis (autoalojado)" },
    roadmap: [
      { label: { fr: "Configuration du serveur", en: "Server Setup", es: "Configuración del servidor" }, status: "done", detail: { fr: "Installation et config de Paper/Spigot sur VPS Linux", en: "Paper/Spigot install and config on Linux VPS", es: "Instalación y configuración de Paper/Spigot en VPS Linux" } },
      { label: { fr: "Plugins & gameplay", en: "Plugins & Gameplay", es: "Plugins y gameplay" }, status: "done", detail: { fr: "Sélection et configuration des plugins essentiels", en: "Selection and configuration of essential plugins", es: "Selección y configuración de los plugins esenciales" } },
      { label: { fr: "Intégration web (statut serveur)", en: "Web Integration (server status)", es: "Integración web (estado del servidor)" }, status: "in-progress", detail: { fr: "API pour afficher le statut et les joueurs connectés", en: "API to display status and connected players", es: "API para mostrar el estado y los jugadores conectados" } },
      { label: { fr: "Système de demande d'accès", en: "Access Request System", es: "Sistema de solicitud de acceso" }, status: "planned", detail: { fr: "Formulaire et workflow d'approbation", en: "Form and approval workflow", es: "Formulario y flujo de aprobación" } },
    ],
  },
  {
    slug: "football-prediction",
    title: "Football Prediction",
    origin: "personal",
    desc: {
      fr: "Système de prédiction de résultats de matchs de football utilisant le Machine Learning.",
      en: "Football match result prediction system using Machine Learning.",
      es: "Sistema de predicción de resultados de partidos de fútbol usando Machine Learning.",
    },
    longDesc: {
      fr: "Système de prédiction de résultats de matchs de football utilisant le Machine Learning. Projet en cours de développement avec une roadmap structurée.",
      en: "Football match result prediction system using Machine Learning. Currently in development with a structured roadmap.",
      es: "Sistema de predicción de resultados de partidos de fútbol usando Machine Learning. Actualmente en desarrollo con una hoja de ruta estructurada.",
    },
    tags: ["Python", "MongoDB", "API-Football", "ML"],
    status: "in-progress",
    icon: Trophy,
    objectives: [
      { fr: "Prédire les résultats de matchs avec du ML", en: "Predict match results using ML", es: "Predecir resultados de partidos con ML" },
      { fr: "Collecter des données via API-Football", en: "Collect data via API-Football", es: "Recopilar datos a través de API-Football" },
      { fr: "Créer un dashboard de visualisation", en: "Create a visualization dashboard", es: "Crear un dashboard de visualización" },
    ],
    tools: ["Python", "MongoDB", "Jupyter Notebook", "API REST"],
    timeline: { fr: "Janv. 2025 – En cours", en: "Jan 2025 – Ongoing", es: "Ene 2025 – En curso" },
    cost: { fr: "~20€/mois (API Football)", en: "~€20/month (API Football)", es: "~20€/mes (API Football)" },
    roadmap: [
      { label: { fr: "Sélection de l'API Football", en: "API Football Selection", es: "Selección de la API Football" }, status: "done", detail: { fr: "API-Football (api-football.com) choisie pour la couverture et la documentation", en: "API-Football (api-football.com) chosen for coverage and documentation", es: "API-Football (api-football.com) elegida por su cobertura y documentación" }, link: "https://www.api-football.com/documentation-v3" },
      { label: { fr: "Création des scripts de population BDD", en: "DB Population Scripts", es: "Scripts de poblamiento de BD" }, status: "done", detail: { fr: "Scripts Python pour récupérer et insérer les données dans MongoDB", en: "Python scripts to fetch and insert data into MongoDB", es: "Scripts Python para obtener e insertar datos en MongoDB" } },
      { label: { fr: "Tests des scripts de population", en: "Population Scripts Testing", es: "Pruebas de los scripts de poblamiento" }, status: "in-progress", detail: { fr: "Validation de la cohérence des données collectées", en: "Validating collected data consistency", es: "Validación de la consistencia de los datos recopilados" } },
      { label: { fr: "Feature engineering & entraînement ML", en: "Feature Engineering & ML Training", es: "Feature engineering y entrenamiento ML" }, status: "planned", detail: { fr: "Préparation des features et entraînement des modèles de prédiction", en: "Feature preparation and prediction model training", es: "Preparación de features y entrenamiento de modelos de predicción" } },
      { label: { fr: "Interface de visualisation", en: "Visualization Interface", es: "Interfaz de visualización" }, status: "planned", detail: { fr: "Dashboard web pour afficher les prédictions", en: "Web dashboard to display predictions", es: "Dashboard web para mostrar las predicciones" } },
    ],
    docs: [
      { label: { fr: "Documentation API-Football", en: "API-Football Documentation", es: "Documentación API-Football" }, url: "https://www.api-football.com/documentation-v3" },
    ],
  },
  {
    slug: "beauty-survey",
    title: "Beauty Survey App",
    origin: "personal",
    desc: {
      fr: "Application Android permettant de sonder des personnes sur la beauté de différents profils.",
      en: "Android application to survey people on the beauty of different profiles.",
      es: "Aplicación Android para encuestar a personas sobre la belleza de diferentes perfiles.",
    },
    longDesc: {
      fr: "Application Android permettant de sonder des personnes sur la beauté de différents profils. Collecte et analyse statistique des résultats.",
      en: "Android application to survey people on the beauty of different profiles. Statistical collection and analysis of results.",
      es: "Aplicación Android para encuestar a personas sobre la belleza de diferentes perfiles. Recopilación y análisis estadístico de los resultados.",
    },
    tags: ["Android Studio", "Kotlin", "Firebase"],
    status: "in-progress",
    icon: Smartphone,
    objectives: [
      { fr: "Sonder les perceptions de beauté", en: "Survey beauty perceptions", es: "Encuestar las percepciones de belleza" },
      { fr: "Collecter et analyser les résultats statistiques", en: "Collect and analyze statistical results", es: "Recopilar y analizar resultados estadísticos" },
    ],
    tools: ["Android Studio", "Kotlin", "Firebase"],
    timeline: { fr: "Fév. 2025 – En cours", en: "Feb 2025 – Ongoing", es: "Feb 2025 – En curso" },
    cost: { fr: "Gratuit (Firebase Spark)", en: "Free (Firebase Spark)", es: "Gratis (Firebase Spark)" },
    roadmap: [
      { label: { fr: "Maquettage UI", en: "UI Mockup", es: "Maqueta UI" }, status: "done", detail: { fr: "Design des écrans principaux", en: "Design of main screens", es: "Diseño de las pantallas principales" } },
      { label: { fr: "Développement de l'app", en: "App Development", es: "Desarrollo de la app" }, status: "in-progress", detail: { fr: "Implémentation en Kotlin avec Firebase", en: "Implementation in Kotlin with Firebase", es: "Implementación en Kotlin con Firebase" } },
      { label: { fr: "Analyse statistique", en: "Statistical Analysis", es: "Análisis estadístico" }, status: "planned", detail: { fr: "Module de visualisation des résultats", en: "Results visualization module", es: "Módulo de visualización de resultados" } },
    ],
  },
  {
    slug: "power-bi-dashboards",
    title: "Power BI Dashboards",
    origin: "sia",
    desc: {
      fr: "Conception de tableaux de bord Power BI pour le contrôle de gestion chez SIA Habitat.",
      en: "Design of Power BI dashboards for management control at SIA Habitat.",
      es: "Diseño de dashboards Power BI para el control de gestión en SIA Habitat.",
    },
    longDesc: {
      fr: "Conception de tableaux de bord Power BI pour le contrôle de gestion chez SIA Habitat : suivi de la vacance locative, automatisation du suivi d'usage via Power Automate.",
      en: "Design of Power BI dashboards for management control at SIA Habitat: rental vacancy tracking, usage monitoring automation via Power Automate.",
      es: "Diseño de dashboards Power BI para el control de gestión en SIA Habitat: seguimiento de vacancia de alquileres, automatización del seguimiento de uso mediante Power Automate.",
    },
    tags: ["Power BI", "DAX", "SQL", "Power Automate"],
    status: "done",
    icon: BarChart3,
    objectives: [
      { fr: "Suivi de la vacance locative", en: "Rental vacancy tracking", es: "Seguimiento de la vacancia de alquileres" },
      { fr: "Automatisation du suivi d'usage", en: "Usage monitoring automation", es: "Automatización del seguimiento de uso" },
    ],
    tools: ["Power BI", "DAX", "SQL", "Power Automate", "Excel"],
    timeline: { fr: "Août 2024 – Oct. 2025", en: "Aug 2024 – Oct 2025", es: "Ago 2024 – Oct 2025" },
    cost: { fr: "N/A (entreprise)", en: "N/A (company)", es: "N/A (empresa)" },
  },
  {
    slug: "ev-route-optimization",
    title: "EV Route Optimization",
    origin: "upv",
    desc: {
      fr: "Solution Python pour l'optimisation de trajets de véhicules électriques.",
      en: "Python solution for electric vehicle route optimization.",
      es: "Solución Python para la optimización de rutas de vehículos eléctricos.",
    },
    longDesc: {
      fr: "Développement d'une solution Python pour l'optimisation de trajets de véhicules électriques, intégrant des API de géocodage et des données topographiques (stage à l'UPV, Valence).",
      en: "Python solution for electric vehicle route optimization, integrating geocoding APIs and topographic data (internship at UPV, Valencia).",
      es: "Solución Python para la optimización de rutas de vehículos eléctricos, integrando APIs de geocodificación y datos topográficos (prácticas en la UPV, Valencia).",
    },
    tags: ["Python", "API REST", "Géocodage", "Recherche"],
    status: "done",
    icon: Zap,
    objectives: [
      { fr: "Optimiser les trajets pour véhicules électriques", en: "Optimize routes for electric vehicles", es: "Optimizar rutas para vehículos eléctricos" },
      { fr: "Intégrer des API de géocodage", en: "Integrate geocoding APIs", es: "Integrar APIs de geocodificación" },
    ],
    tools: ["Python", "API REST", "Jupyter Notebook"],
    timeline: { fr: "Août 2023 – Jan. 2024", en: "Aug 2023 – Jan 2024", es: "Ago 2023 – Ene 2024" },
    cost: { fr: "Gratuit (recherche académique)", en: "Free (academic research)", es: "Gratis (investigación académica)" },
  },
  {
    slug: "data-quality-script",
    title: "Data Quality Script",
    origin: "sia",
    desc: {
      fr: "Script Python de repérage et d'analyse des doublons dans les tiers fournisseurs.",
      en: "Python script for detecting and analyzing supplier duplicates.",
      es: "Script Python para la detección y análisis de duplicados en proveedores.",
    },
    longDesc: {
      fr: "Script Python de repérage et d'analyse des doublons dans les tiers fournisseurs pour améliorer la qualité des données chez SIA Habitat.",
      en: "Python script for detecting and analyzing supplier duplicates to improve data quality at SIA Habitat.",
      es: "Script Python para la detección y análisis de duplicados en proveedores para mejorar la calidad de los datos en SIA Habitat.",
    },
    tags: ["Python", "Data Quality", "SQL"],
    status: "done",
    icon: Database,
    objectives: [
      { fr: "Détecter les doublons fournisseurs", en: "Detect supplier duplicates", es: "Detectar duplicados de proveedores" },
      { fr: "Améliorer la qualité des données", en: "Improve data quality", es: "Mejorar la calidad de los datos" },
    ],
    tools: ["Python", "SQL", "Excel"],
    timeline: { fr: "2024", en: "2024", es: "2024" },
    cost: { fr: "N/A (entreprise)", en: "N/A (company)", es: "N/A (empresa)" },
  },
];
