import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Code, Database, BarChart3, Globe } from "lucide-react";

const skills = [
  { icon: Database, label: "Data Engineering", tools: "Python, SQL, Spark, Airflow" },
  { icon: BarChart3, label: "Business Intelligence", tools: "Power BI, Tableau, Looker" },
  { icon: Code, label: "Development", tools: "React, TypeScript, Java" },
  { icon: Globe, label: "Cloud & DevOps", tools: "AWS, Docker, CI/CD" },
];

const AboutPage = () => {
  const { lang } = useLanguage();
  const a = translations.about;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display font-bold text-primary mb-6"
      >
        {t(a.title, lang)}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground leading-relaxed mb-12"
      >
        {t(a.intro, lang)}
      </motion.p>

      <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
        {t(a.skillsTitle, lang)}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl border border-border bg-card p-5 flex items-start gap-4"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <skill.icon size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-card-foreground">{skill.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{skill.tools}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
