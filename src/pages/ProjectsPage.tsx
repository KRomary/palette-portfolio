import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";
import { projectsData, originLabels, ProjectOrigin } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, Circle, ArrowRight } from "lucide-react";
import logoCesi from "@/assets/logo-cesi.png";
import logoSia from "@/assets/logo-sia.svg";
import logoUpv from "@/assets/logo-upv.png";

const statusConfig = {
  done: { label: { fr: "Terminé", en: "Done" }, color: "bg-green-500/10 text-green-600 border-green-500/20", icon: CheckCircle2 },
  "in-progress": { label: { fr: "En cours", en: "In Progress" }, color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", icon: Clock },
  planned: { label: { fr: "Planifié", en: "Planned" }, color: "bg-muted text-muted-foreground border-border", icon: Circle },
};

const originLogos: Record<ProjectOrigin, string | null> = {
  cesi: logoCesi,
  sia: logoSia,
  upv: logoUpv,
  personal: null,
};

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const [originFilter, setOriginFilter] = useState<ProjectOrigin | "all">("all");

  const doneProjects = projectsData.filter((pr) => pr.status === "done");
  const ongoingProjects = projectsData.filter((pr) => pr.status !== "done");

  const applyOriginFilter = (projects: typeof projectsData) =>
    originFilter === "all" ? projects : projects.filter((p) => p.origin === originFilter);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display font-black text-primary mb-6"
      >
        {t({ fr: "Mes Projets", en: "My Projects" }, lang)}
      </motion.h1>

      {/* Origin filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setOriginFilter("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${originFilter === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-card text-card-foreground border-border hover:border-primary/50"}`}
        >
          {t({ fr: "Toutes provenances", en: "All origins" }, lang)}
        </button>
        {(Object.keys(originLabels) as ProjectOrigin[]).map((key) => {
          const logo = originLogos[key];
          return (
            <button
              key={key}
              onClick={() => setOriginFilter(key)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${originFilter === key ? "bg-primary text-primary-foreground border-primary" : "bg-card text-card-foreground border-border hover:border-primary/50"}`}
            >
              {logo && <img src={logo} alt={t(originLabels[key], lang)} className="h-5 w-5 rounded object-contain" />}
              {t(originLabels[key], lang)}
            </button>
          );
        })}
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">{t({ fr: "Tous", en: "All" }, lang)}</TabsTrigger>
          <TabsTrigger value="ongoing">{t({ fr: "En cours", en: "Ongoing" }, lang)} ({applyOriginFilter(ongoingProjects).length})</TabsTrigger>
          <TabsTrigger value="done">{t({ fr: "Terminés", en: "Completed" }, lang)} ({applyOriginFilter(doneProjects).length})</TabsTrigger>
        </TabsList>

        {(["all", "ongoing", "done"] as const).map((tab) => {
          const base = tab === "all" ? projectsData : tab === "ongoing" ? ongoingProjects : doneProjects;
          const filtered = applyOriginFilter(base);
          return (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((project, i) => {
                  const st = statusConfig[project.status];
                  const Icon = project.icon;
                  const originLogo = originLogos[project.origin];
                  return (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * i }}
                      whileHover={{ y: -4 }}
                    >
                      <Link to={`/projects/${project.slug}`} className="block h-full">
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Icon size={20} className="text-primary" />
                              </div>
                              <h3 className="font-display text-lg font-bold text-card-foreground flex-1">
                                {project.title}
                              </h3>
                              {originLogo && (
                                <img src={originLogo} alt={t(originLabels[project.origin], lang)} className="h-8 w-8 rounded-lg object-contain bg-white/80 p-0.5" />
                              )}
                              <Badge variant="outline" className={st.color}>
                                {t(st.label, lang)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 flex-1">
                              {t(project.desc, lang)}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <ArrowRight size={16} className="text-primary shrink-0 ml-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
