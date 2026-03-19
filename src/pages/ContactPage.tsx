import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactPage = () => {
  const { lang } = useLanguage();
  const c = translations.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t(c.success, lang));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-display font-bold text-primary mb-10"
      >
        {t(c.title, lang)}
      </motion.h1>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t(c.name, lang)}</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t(c.email, lang)}</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t(c.message, lang)}</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          {t(c.send, lang)}
        </button>
      </motion.form>

      <div className="mt-12 flex gap-4 justify-center">
        <a href="#" className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
        <a href="#" className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
