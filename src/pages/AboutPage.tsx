import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Code, Database, BarChart3, Globe, GraduationCap, Briefcase, Languages, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import logoCesi from "@/assets/logo-cesi.png";
import logoSia from "@/assets/logo-sia.svg";
import logoUpv from "@/assets/logo-upv.png";

const skills = [
  { icon: Database, label: { fr: "Data Science & BI", en: "Data Science & BI" }, tools: "Python, SQL, Power BI, Power Automate, DAX, Jupyter" },
  { icon: Code, label: { fr: "Développement", en: "Development" }, tools: "C, C++, C#, PHP, JavaScript, HTML, CSS" },
  { icon: Globe, label: { fr: "Bases de données", en: "Databases" }, tools: "MySQL, PostgreSQL, MongoDB (NoSQL)" },
  { icon: BarChart3, label: { fr: "Environnements & Outils", en: "Environments & Tools" }, tools: "VS Code, GitHub, Microsoft Power Platform, Excel" },
];

const languages = [
  { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" }, percent: 100 },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "TOEIC niveau B2", en: "TOEIC B2 level" }, percent: 75 },
];

const interests = ["Football", "Musculation", "Science", "Géographie", "Informatique", "Réseaux sociaux"];

const AboutPage = () => {
  const { lang } = useLanguage();
  const a = translations.about;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 space-y-14">
      {/* Intro */}
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-black text-primary mb-6"
        >
          {t(a.title, lang)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg"
        >
          {t(a.intro, lang)}
        </motion.p>
      </section>

      {/* Education */}
      <section>
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <GraduationCap size={24} className="text-primary" />
          {t(a.educationTitle, lang)}
        </h2>
        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <img src={logoCesi} alt="CESI" className="h-14 w-14 rounded-lg object-contain shrink-0" />
            <div>
              <h3 className="font-semibold text-card-foreground text-lg">
                {t({ fr: "Diplôme d'Ingénieur en Sciences du Numérique", en: "Engineering Degree in Digital Sciences" }, lang)}
              </h3>
              <p className="text-primary font-medium mt-1">CESI École d'Ingénieurs — Lille</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t({ fr: "Sept. 2022 – Sept. 2025", en: "Sep 2022 – Sep 2025" }, lang)}
              </p>
              <Badge variant="secondary" className="mt-3">
                {t({ fr: "Majeure : Data Science & Intelligence Artificielle", en: "Major: Data Science & Artificial Intelligence" }, lang)}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section>
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Briefcase size={24} className="text-primary" />
          {t({ fr: "Expériences professionnelles", en: "Work Experience" }, lang)}
        </h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <img src={logoSia} alt="SIA Habitat" className="h-12 w-auto shrink-0 mt-1" />
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 className="font-semibold text-card-foreground text-lg">
                    {t({ fr: "Alternant Chargé de Mission Data", en: "Data Mission Analyst (Apprenticeship)" }, lang)}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {t({ fr: "Août 2024 – Oct. 2025", en: "Aug 2024 – Oct 2025" }, lang)}
                  </span>
                </div>
                <p className="text-primary font-medium mt-1">SIA Habitat — Douai</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>{t({ fr: "Tableaux de bord Power BI pour le contrôle de gestion (vacance locative)", en: "Power BI dashboards for management control (vacancy tracking)" }, lang)}</li>
                  <li>{t({ fr: "Automatisation du suivi d'usage via Power Automate", en: "Usage monitoring automation via Power Automate" }, lang)}</li>
                  <li>{t({ fr: "Script Python de détection de doublons fournisseurs (Data Quality)", en: "Python script for supplier duplicate detection (Data Quality)" }, lang)}</li>
                  <li>{t({ fr: "Spécifications techniques du lot décisionnel (requêtes SQL documentées)", en: "Technical specifications for BI module (documented SQL queries)" }, lang)}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <img src={logoUpv} alt="UPV" className="h-12 w-auto shrink-0 mt-1" />
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 className="font-semibold text-card-foreground text-lg">
                    {t({ fr: "Stage en Laboratoire de Recherche", en: "Research Lab Internship" }, lang)}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {t({ fr: "Août 2023 – Jan. 2024", en: "Aug 2023 – Jan 2024" }, lang)}
                  </span>
                </div>
                <p className="text-primary font-medium mt-1">
                  {t({ fr: "Université Polytechnique de Valence (UPV) — Valence, Espagne", en: "Polytechnic University of Valencia (UPV) — Valencia, Spain" }, lang)}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>{t({ fr: "Optimisation de trajets pour véhicules électriques en Python", en: "Route optimization for electric vehicles in Python" }, lang)}</li>
                  <li>{t({ fr: "Intégration d'API de géocodage et données topographiques", en: "Geocoding API integration and topographic data" }, lang)}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Code size={24} className="text-primary" />
          {t(a.skillsTitle, lang)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="rounded-xl border border-border bg-card p-5 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <skill.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">{t(skill.label, lang)}</p>
                <p className="text-xs text-muted-foreground mt-1">{skill.tools}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Languages size={24} className="text-primary" />
          {t({ fr: "Langues", en: "Languages" }, lang)}
        </h2>
        <div className="space-y-4">
          {languages.map((l, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-card-foreground">{t(l.name, lang)}</span>
                <span className="text-muted-foreground">{t(l.level, lang)}</span>
              </div>
              <Progress value={l.percent} className="h-2" />
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Heart size={24} className="text-primary" />
          {t({ fr: "Centres d'intérêt", en: "Interests" }, lang)}
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge key={interest} variant="outline" className="text-sm px-3 py-1">
              {interest}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
