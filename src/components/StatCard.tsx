import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  detail: string;
  glow?: boolean;
}

const StatCard = ({ value, label, detail, glow }: StatCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`relative rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg overflow-hidden ${glow ? "group" : ""}`}
  >
    {glow && (
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
    )}
    <p className="font-display text-3xl font-bold text-primary relative z-10">{value}</p>
    <p className="mt-1 text-sm font-semibold text-card-foreground relative z-10">{label}</p>
    <p className="mt-0.5 text-xs text-muted-foreground relative z-10">{detail}</p>
  </motion.div>
);

export default StatCard;
