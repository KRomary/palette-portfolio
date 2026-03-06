import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import StatCard from "@/components/StatCard";

const HomePage = () => {
  const { lang } = useLanguage();
  const s = translations.home;

  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 rounded-full bg-secondary border-4 border-primary/30 mb-6 flex items-center justify-center text-4xl font-display font-bold text-primary"
        >
          BD
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-display"
        >
          <span className="text-primary">{t(s.title, lang)}</span>{" "}
          <span className="font-bold text-foreground">{t(s.titleBold, lang)}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 text-lg text-muted-foreground"
        >
          {t(s.subtitle, lang)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed"
        >
          {t(s.description, lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {t(s.cta, lang)}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/10 transition-colors"
          >
            {t(s.contact, lang)}
          </Link>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="w-full max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="5+" label={t(s.stats.years, lang)} detail={t(s.stats.yearsDetail, lang)} />
          <StatCard value="6+" label={t(s.stats.exp, lang)} detail={t(s.stats.expDetail, lang)} />
          <StatCard value="20+" label={t(s.stats.tech, lang)} detail={t(s.stats.techDetail, lang)} />
          <StatCard value="6+" label={t(s.stats.projects, lang)} detail={t(s.stats.projectsDetail, lang)} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
