import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Data Pipeline Manager",
    desc: { fr: "Outil d'orchestration de pipelines de données avec interface visuelle.", en: "Data pipeline orchestration tool with visual interface." },
    tags: ["Python", "Airflow", "React"],
  },
  {
    title: "BI Dashboard",
    desc: { fr: "Dashboard interactif de Business Intelligence pour l'analyse de ventes.", en: "Interactive Business Intelligence dashboard for sales analysis." },
    tags: ["Power BI", "SQL", "DAX"],
  },
  {
    title: "Cloud Data Lake",
    desc: { fr: "Architecture de Data Lake sur AWS pour le traitement big data.", en: "AWS Data Lake architecture for big data processing." },
    tags: ["AWS", "S3", "Glue", "Athena"],
  },
  {
    title: "Portfolio Web",
    desc: { fr: "Site portfolio personnel construit avec React et TypeScript.", en: "Personal portfolio website built with React and TypeScript." },
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "ML Prediction API",
    desc: { fr: "API de prédiction basée sur le Machine Learning.", en: "Machine Learning-based prediction API." },
    tags: ["Python", "FastAPI", "scikit-learn"],
  },
  {
    title: "ETL Automation",
    desc: { fr: "Système d'automatisation ETL pour intégration de données.", en: "ETL automation system for data integration." },
    tags: ["Python", "Spark", "Docker"],
  },
];

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const p = translations.projects;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display font-bold text-primary mb-10"
      >
        {t(p.title, lang)}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-border bg-card p-6 flex flex-col"
          >
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">
              {t(project.desc, lang)}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="inline-flex items-center gap-1 text-sm text-primary hover:underline self-start">
              {t(p.viewProject, lang)} <ExternalLink size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
