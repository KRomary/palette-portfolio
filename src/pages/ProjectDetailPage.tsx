import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { projectsData, ProjectData, RoadmapStep } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2, Clock, Circle, Target, Wrench, Calendar, Coins, Map, FileText } from "lucide-react";
import MinecraftDashboard from "@/components/MinecraftDashboard";

const statusConfig = {
  done: { label: { fr: "Terminé", en: "Done", es: "Terminado" }, color: "bg-green-500/10 text-green-600 border-green-500/20", icon: CheckCircle2 },
  "in-progress": { label: { fr: "En cours", en: "In Progress", es: "En curso" }, color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", icon: Clock },
  planned: { label: { fr: "Planifié", en: "Planned", es: "Planificado" }, color: "bg-muted text-muted-foreground border-border", icon: Circle },
};

const RoadmapSection = ({ steps, lang }: { steps: RoadmapStep[]; lang: Lang }) => (
  <section>
    <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
      <Map size={20} className="text-primary" />
      Roadmap
    </h2>
    <div className="relative space-y-0">
      <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border" />
      {steps.map((step, i) => {
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
                  {t({ fr: "Voir la documentation", en: "View documentation", es: "Ver documentación" }, lang)} <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-muted-foreground text-lg">Project not found.</p>
        <Link to="/projects" className="text-primary hover:underline mt-4 inline-block">
          ← {t({ fr: "Retour aux projets", en: "Back to projects" }, lang)}
        </Link>
      </div>
    );
  }

  const Icon = project.icon;
  const st = statusConfig[project.status];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 space-y-10">
      {/* Back link */}
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft size={16} />
        {t({ fr: "Retour aux projets", en: "Back to projects", es: "Volver a proyectos" }, lang)}
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon size={28} className="text-primary" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-display font-black text-foreground">{project.title}</h1>
          <Badge variant="outline" className={`mt-2 ${st.color}`}>{t(st.label, lang)}</Badge>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground leading-relaxed text-base md:text-lg">
        {t(project.longDesc || project.desc, lang)}
      </motion.p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
        ))}
      </div>

      {/* Minecraft Dashboard */}
      {project.slug === "minecraft-server" && <MinecraftDashboard />}

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.objectives && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-bold text-card-foreground mb-3 flex items-center gap-2">
                <Target size={16} className="text-primary" />
                {t({ fr: "Objectifs", en: "Objectives", es: "Objetivos" }, lang)}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {project.objectives.map((o, i) => <li key={i}>{t(o, lang)}</li>)}
              </ul>
            </CardContent>
          </Card>
        )}

        {project.tools && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-bold text-card-foreground mb-3 flex items-center gap-2">
                <Wrench size={16} className="text-primary" />
                {t({ fr: "Outils", en: "Tools", es: "Herramientas" }, lang)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-xs">{tool}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {project.timeline && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-bold text-card-foreground mb-3 flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {t({ fr: "Délais", en: "Timeline", es: "Plazos" }, lang)}
              </h3>
              <p className="text-sm text-muted-foreground">{t(project.timeline, lang)}</p>
            </CardContent>
          </Card>
        )}

        {project.cost && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-bold text-card-foreground mb-3 flex items-center gap-2">
                <Coins size={16} className="text-primary" />
                {t({ fr: "Coût", en: "Cost", es: "Coste" }, lang)}
              </h3>
              <p className="text-sm text-muted-foreground">{t(project.cost, lang)}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Documentation */}
      {project.docs && project.docs.length > 0 && (
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText size={20} className="text-primary" />
            Documentation
          </h2>
          <div className="space-y-2">
            {project.docs.map((doc, i) => (
              <a key={i} href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                {t(doc.label, lang)} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Roadmap */}
      {project.roadmap && <RoadmapSection steps={project.roadmap} lang={lang} />}
    </div>
  );
};

export default ProjectDetailPage;
