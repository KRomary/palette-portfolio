import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useTheme } from "@/contexts/ThemeContext";
import logoKR from "@/assets/logo-kr.png";
import logoKRLight from "@/assets/logo-kr-light.png";

const Navbar = () => {
  const { lang } = useLanguage();
  const { theme } = useTheme();
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
        {/* Logo left */}
        <Link to="/" className="shrink-0">
          <img src={theme === "dark" ? logoKR : logoKRLight} alt="KRomary" className="h-8 object-contain" />
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-5">
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
        <div className="hidden md:flex items-center gap-3 shrink-0">
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
            className="md:hidden bg-header border-b border-border"
          >
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-3 p-4 items-start">
              <Link
                to={links[0].to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${
                  location.pathname === links[0].to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {links[0].label}
              </Link>
              <div className="justify-self-end">
                <ThemeToggle />
              </div>

              <Link
                to={links[1].to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${
                  location.pathname === links[1].to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {links[1].label}
              </Link>
              <div className="justify-self-end relative z-[70]">
                <LanguageDropdown />
              </div>

              {links.slice(2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium col-span-2 ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/settings"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium col-span-2 ${
                  location.pathname === "/settings" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t(translations.nav.settings, lang)}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
