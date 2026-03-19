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
    <nav className="sticky top-0 z-50 bg-header border-b border-border shadow-sm">
      {/* Blur gradient overlay at bottom edge */}
      <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-b from-header/50 via-header/20 to-transparent pointer-events-none z-40" />
      <div className="relative container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo left */}
        <Link to="/" className="shrink-0 font-display font-bold text-xl text-foreground tracking-tight">
          <span className="text-primary">K</span>Romary
        </Link>

        {/* Center links */}
        <div className="hidden lg:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
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
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-header border-b border-border overflow-visible shadow-lg z-50"
          >
            <div className="flex p-4 gap-4">
              {/* Left: all links */}
              <div className="flex flex-col gap-3 flex-1">
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
              </div>

              {/* Right: controls */}
              <div className="flex flex-col items-end gap-3 shrink-0">
                <ThemeToggle />
                <div className="relative z-[70]">
                  <LanguageDropdown />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
