import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import countryFlagEmojis from "country-flag-emojis";

const langConfig: Record<string, { code: string; label: string }> = {
  fr: { code: "FR", label: "FR" },
  en: { code: "GB", label: "GB" },
};

const LanguageDropdown = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const otherLang = lang === "fr" ? "en" : "fr";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary transition-colors"
      >
        <span className="text-base leading-none">{countryFlagEmojis.emojiByCountryCode(langConfig[lang].code)}</span>
        <span className="hidden sm:inline">{langConfig[lang].label}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-36 rounded-lg border border-border bg-popover shadow-lg z-50 overflow-hidden">
          {[lang, otherLang].map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l as "fr" | "en"); setOpen(false); }}
              className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-accent/20 transition-colors ${
                l === lang ? "bg-accent/10 text-primary font-semibold" : "text-foreground"
              }`}
            >
              <span className="text-base">{countryFlagEmojis.emojiByCountryCode(langConfig[l].code)}</span>
              {langConfig[l].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
