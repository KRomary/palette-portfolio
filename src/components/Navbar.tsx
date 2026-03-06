import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageDropdown from "@/components/LanguageDropdown";

const Navbar = () => {
  const { lang } = useLanguage();
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
        <Link to="/" className="font-display text-xl font-black tracking-tight">
          <span className="text-primary">K.</span>
          <span className="text-foreground">Romary</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
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

          <LanguageDropdown />
          <ThemeToggle />

          <Link
            to="/settings"
            className={`p-2 rounded-full hover:bg-accent/20 transition-colors ${
              location.pathname === "/settings" ? "text-primary" : "text-muted-foreground"
            }`}
            aria-label="Settings"
          >
            <Settings size={18} />
          </Link>
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
              <Link
                to="/settings"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${
                  location.pathname === "/settings" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t(translations.nav.settings, lang)}
              </Link>
              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <LanguageDropdown />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
