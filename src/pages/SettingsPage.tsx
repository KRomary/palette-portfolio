import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAccessibility, ColorVisionMode } from "@/contexts/AccessibilityContext";
import { translations, t } from "@/i18n/translations";
import { Eye } from "lucide-react";

const modes: { key: ColorVisionMode; labelKey: keyof typeof translations.settings; descKey: keyof typeof translations.settings; color: string }[] = [
  { key: "none", labelKey: "none", descKey: "none", color: "bg-primary" },
  { key: "protanopia", labelKey: "protanopia", descKey: "protanopiaDesc", color: "bg-yellow-600" },
  { key: "deuteranopia", labelKey: "deuteranopia", descKey: "deuteranopiaDesc", color: "bg-amber-600" },
  { key: "tritanopia", labelKey: "tritanopia", descKey: "tritanopiaDesc", color: "bg-rose-500" },
  { key: "achromatopsia", labelKey: "achromatopsia", descKey: "achromatopsiaDesc", color: "bg-gray-500" },
];

const SettingsPage = () => {
  const { lang } = useLanguage();
  const { colorVisionMode, setColorVisionMode } = useAccessibility();
  const s = translations.settings;

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display font-bold text-primary mb-10"
      >
        {t(s.title, lang)}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="rounded-xl border border-border bg-card p-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Eye size={20} className="text-primary" />
          </div>
          <h2 className="font-display text-xl font-semibold text-card-foreground">
            {t(s.accessibility, lang)}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          {t(s.accessibilityDesc, lang)}
        </p>

        <div className="space-y-3">
          {modes.map((mode) => {
            const label = t(s[mode.labelKey] as { fr: string; en: string }, lang);
            const desc = mode.key === "none" ? undefined : t(s[mode.descKey] as { fr: string; en: string }, lang);
            const isActive = colorVisionMode === mode.key;

            return (
              <button
                key={mode.key}
                onClick={() => setColorVisionMode(mode.key)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                  isActive
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  isActive ? "border-primary" : "border-muted-foreground"
                }`}>
                  {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${isActive ? "text-primary" : "text-card-foreground"}`}>
                    {label}
                  </p>
                  {desc && <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>}
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
