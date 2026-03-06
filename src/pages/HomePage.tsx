import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import StatCard from "@/components/StatCard";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  const { lang } = useLanguage();
  const s = translations.home;

  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-16 sm:py-24 px-4 text-center w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-secondary border-4 border-primary/30 mb-8 flex items-center justify-center text-3xl sm:text-4xl font-display font-black text-primary"
        >
          KR
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-sm sm:text-base text-muted-foreground font-medium tracking-wide uppercase mb-2"
        >
          {t(s.greeting, lang)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tight leading-tight"
        >
          <span className="text-primary">{t(s.title, lang)}</span>{" "}
          <span className="text-foreground">{t(s.titleBold, lang)}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 text-base sm:text-lg font-semibold text-foreground/80"
        >
          {t(s.subtitle, lang)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          {t(s.description, lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex gap-3 sm:gap-4 flex-col sm:flex-row w-full sm:w-auto"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            {t(s.cta, lang)} <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary/10 transition-colors"
          >
            {t(s.contact, lang)}
          </Link>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="w-full max-w-4xl mx-auto px-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
