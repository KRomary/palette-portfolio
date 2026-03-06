import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { ExternalLink, Server, Trophy, Smartphone, BarChart3, Zap, Database, CheckCircle2, Circle, Clock, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectStatus = "done" | "in-progress" | "planned";

interface Project {
  title: string;
  desc: { fr: string; en: string };
  tags: string[];
  status: ProjectStatus;
  icon: React.ElementType;
  link?: string;
}

const projectsData: Project[] = [
  {
    title: "Minecraft Server",
    desc: {
      fr: "Création et gestion d'un serveur Minecraft communautaire. Les visiteurs du site peuvent voir l'état du serveur, les joueurs connectés et envoyer une demande pour créer un profil afin de rejoindre le serveur.",
      en: "Creation and management of a community Minecraft server. Site visitors can see server status, connected players, and submit a request to create a profile to join the server.",
    },
    tags: ["Java", "Spigot/Paper", "Linux", "Networking"],
    status: "done",
    icon: Server,
  },
  {
    title: "Football Prediction",
    desc: {
      fr: "Système de prédiction de résultats de matchs de football utilisant le Machine Learning. Projet en cours de développement avec une roadmap structurée.",
      en: "Football match result prediction system using Machine Learning. Currently in development with a structured roadmap.",
    },
    tags: ["Python", "MongoDB", "API-Football", "ML"],
    status: "in-progress",
    icon: Trophy,
  },
  {
    title: "Beauty Survey App",
    desc: {
      fr: "Application Android permettant de sonder des personnes sur la beauté de différents profils. Collecte et analyse statistique des résultats.",
      en: "Android application to survey people on the beauty of different profiles. Statistical collection and analysis of results.",
    },
    tags: ["Android Studio", "Kotlin", "Firebase"],
    status: "in-progress",
    icon: Smartphone,
  },
  {
    title: "Power BI Dashboards",
    desc: {
      fr: "Conception de tableaux de bord Power BI pour le contrôle de gestion chez SIA Habitat : suivi de la vacance locative, automatisation du suivi d'usage via Power Automate.",
      en: "Design of Power BI dashboards for management control at SIA Habitat: rental vacancy tracking, usage monitoring automation via Power Automate.",
    },
    tags: ["Power BI", "DAX", "SQL", "Power Automate"],
    status: "done",
    icon: BarChart3,
  },
  {
    title: "EV Route Optimization",
    desc: {
      fr: "Développement d'une solution Python pour l'optimisation de trajets de véhicules électriques, intégrant des API de géocodage et des données topographiques (stage à l'UPV, Valence).",
      en: "Python solution for electric vehicle route optimization, integrating geocoding APIs and topographic data (internship at UPV, Valencia).",
    },
    tags: ["Python", "API REST", "Géocodage", "Recherche"],
    status: "done",
    icon: Zap,
  },
  {
    title: "Data Quality Script",
    desc: {
      fr: "Script Python de repérage et d'analyse des doublons dans les tiers fournisseurs pour améliorer la qualité des données chez SIA Habitat.",
      en: "Python script for detecting and analyzing supplier duplicates to improve data quality at SIA Habitat.",
    },
    tags: ["Python", "Data Quality", "SQL"],
    status: "done",
    icon: Database,
  },
  {
    title: "Portfolio Web",
    desc: {
      fr: "Ce site portfolio personnel construit avec React, TypeScript et Tailwind CSS. Bilingue, accessible et responsive.",
      en: "This personal portfolio website built with React, TypeScript and Tailwind CSS. Bilingual, accessible and responsive.",
    },
    tags: ["React", "TypeScript", "Tailwind"],
    status: "done",
    icon: Globe,
  },
];

// Football prediction roadmap
const roadmapSteps = [
  { label: { fr: "Sélection de l'API Football", en: "API Football Selection" }, status: "done" as const, detail: { fr: "API-Football (api-football.com) choisie pour la couverture et la documentation", en: "API-Football (api-football.com) chosen for coverage and documentation" }, link: "https://www.api-football.com/documentation-v3" },
  { label: { fr: "Création des scripts de population BDD", en: "DB Population Scripts" }, status: "done" as const, detail: { fr: "Scripts Python pour récupérer et insérer les données dans MongoDB", en: "Python scripts to fetch and insert data into MongoDB" } },
  { label: { fr: "Tests des scripts de population", en: "Population Scripts Testing" }, status: "in-progress" as const, detail: { fr: "Validation de la cohérence des données collectées", en: "Validating collected data consistency" } },
  { label: { fr: "Feature engineering & entraînement ML", en: "Feature Engineering & ML Training" }, status: "planned" as const, detail: { fr: "Préparation des features et entraînement des modèles de prédiction", en: "Feature preparation and prediction model training" } },
  { label: { fr: "Interface de visualisation", en: "Visualization Interface" }, status: "planned" as const, detail: { fr: "Dashboard web pour afficher les prédictions", en: "Web dashboard to display predictions" } },
];

const statusConfig = {
  done: { label: { fr: "Terminé", en: "Done" }, color: "bg-green-500/10 text-green-600 border-green-500/20", icon: CheckCircle2 },
  "in-progress": { label: { fr: "En cours", en: "In Progress" }, color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", icon: Clock },
  planned: { label: { fr: "Planifié", en: "Planned" }, color: "bg-muted text-muted-foreground border-border", icon: Circle },
};



const ProjectsPage = () => {
  const { lang } = useLanguage();
  const p = translations.projects;

  const doneProjects = projectsData.filter((pr) => pr.status === "done");
  const ongoingProjects = projectsData.filter((pr) => pr.status !== "done");

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display font-black text-primary mb-10"
      >
        {t(p.title, lang)}
      </motion.h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">{t({ fr: "Tous", en: "All" }, lang)}</TabsTrigger>
          <TabsTrigger value="ongoing">{t({ fr: "En cours", en: "Ongoing" }, lang)} ({ongoingProjects.length})</TabsTrigger>
          <TabsTrigger value="done">{t({ fr: "Terminés", en: "Completed" }, lang)} ({doneProjects.length})</TabsTrigger>
        </TabsList>

        {(["all", "ongoing", "done"] as const).map((tab) => {
          const filtered = tab === "all" ? projectsData : tab === "ongoing" ? ongoingProjects : doneProjects;
          return (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((project, i) => {
                  const st = statusConfig[project.status];
                  const Icon = project.icon;
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * i }}
                      whileHover={{ y: -4 }}
                    >
                      <Card className="h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Icon size={20} className="text-primary" />
                            </div>
                            <h3 className="font-display text-lg font-bold text-card-foreground flex-1">
                              {project.title}
                            </h3>
                            <Badge variant="outline" className={st.color}>
                              {t(st.label, lang)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4 flex-1">
                            {t(project.desc, lang)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Football Prediction Roadmap */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
          <Trophy size={22} className="text-primary" />
          {t({ fr: "Roadmap — Football Prediction", en: "Roadmap — Football Prediction" }, lang)}
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          {t({ fr: "Étapes du projet de prédiction de résultats de football", en: "Steps for the football result prediction project" }, lang)}
        </p>

        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border" />

          {roadmapSteps.map((step, i) => {
            const st = statusConfig[step.status];
            const StepIcon = st.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="relative flex items-start gap-4 pb-8 last:pb-0"
              >
                <div className={`z-10 p-1.5 rounded-full border-2 ${step.status === "done" ? "border-green-500 bg-green-500/10" : step.status === "in-progress" ? "border-yellow-500 bg-yellow-500/10" : "border-border bg-muted"}`}>
                  <StepIcon size={14} className={step.status === "done" ? "text-green-600" : step.status === "in-progress" ? "text-yellow-600" : "text-muted-foreground"} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-card-foreground">{t(step.label, lang)}</p>
                    <Badge variant="outline" className={`text-[10px] ${st.color}`}>{t(st.label, lang)}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{t(step.detail, lang)}</p>
                  {step.link && (
                    <a href={step.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1">
                      {t({ fr: "Voir la documentation", en: "View documentation" }, lang)} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
