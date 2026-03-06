import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  detail: string;
}

const StatCard = ({ value, label, detail }: StatCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg"
  >
    <p className="font-display text-3xl font-bold text-primary">{value}</p>
    <p className="mt-1 text-sm font-semibold text-card-foreground">{label}</p>
    <p className="mt-0.5 text-xs text-muted-foreground">{detail}</p>
  </motion.div>
);

export default StatCard;
