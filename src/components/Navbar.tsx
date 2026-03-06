import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: t(translations.nav.home, lang) },
    { to: "/about", label: t(translations.nav.about, lang) },
    { to: "/projects", label: t(translations.nav.projects, lang) },
    { to: "/contact", label: t(translations.nav.contact, lang) },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-header/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold">
          <span className="text-primary">B.</span>
          <span className="text-foreground">Dumortier</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-semibold px-2 py-1 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-switch-track text-switch-thumb hover:opacity-80 transition-opacity"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-header border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                  className="text-xs font-semibold px-2 py-1 rounded border border-border text-muted-foreground"
                >
                  {lang === "fr" ? "EN" : "FR"}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-switch-track text-switch-thumb"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
