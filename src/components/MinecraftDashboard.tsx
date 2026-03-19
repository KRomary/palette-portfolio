import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Wifi, WifiOff, Users, Cpu, HardDrive, Clock,
  Gauge, Activity, RefreshCw, Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServerStatus {
  system: {
    ram_kb_raw: number;
    ram_mb: number;
    ram_gb: number;
    cpu_percent: number;
    uptime_seconds: number;
    uptime_formatted: string;
    pid: string;
  };
  minecraft: {
    online: boolean;
    version: string;
    players: {
      online: number;
      max: number;
      list: string[];
    };
    motd_clean: string;
    latency_ms: number;
  };
  timestamp: string;
}

const t = (obj: { fr: string; en: string; es?: string }, lang: Lang) =>
  obj[lang] || obj.en;

// ⚠️ Change this to your actual server API URL
const API_URL = "http://127.0.0.1:5000/api/status";

const MinecraftDashboard = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch");
      const data: ServerStatus = await res.json();
      setStatus(data);
      setLastRefresh(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const cpuPercent = status?.system.cpu_percent ?? 0;
  const ramGb = status?.system.ram_gb ?? 0;
  const playersOnline = status?.minecraft.players.online ?? 0;
  const playersMax = status?.minecraft.players.max ?? 20;
  const isOnline = status?.minecraft.online ?? false;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
          <Activity size={20} className="text-primary" />
          {t({ fr: "État du serveur", en: "Server Status", es: "Estado del servidor" }, lang)}
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={fetchStatus}
          disabled={loading}
          className="gap-1.5 text-xs text-muted-foreground"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          {t({ fr: "Actualiser", en: "Refresh", es: "Actualizar" }, lang)}
        </Button>
      </div>

      {/* Error / Offline state */}
      {error && (
        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="p-5 flex items-center gap-3">
            <WifiOff size={20} className="text-destructive" />
            <div>
              <p className="font-semibold text-destructive">
                {t({ fr: "Serveur injoignable", en: "Server unreachable", es: "Servidor inalcanzable" }, lang)}
              </p>
              <p className="text-sm text-muted-foreground">
                {t({ fr: "Impossible de récupérer le statut du serveur.", en: "Unable to fetch server status.", es: "No se pudo obtener el estado del servidor." }, lang)}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading skeleton */}
      {loading && !status && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-2">
                <div className="h-4 w-16 rounded bg-muted animate-pulse" />
                <div className="h-7 w-12 rounded bg-muted animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Dashboard */}
      {status && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Online badge + MOTD */}
          <Card>
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`p-2.5 rounded-full ${isOnline ? "bg-green-500/10" : "bg-destructive/10"}`}>
                {isOnline ? (
                  <Wifi size={20} className="text-green-600" />
                ) : (
                  <WifiOff size={20} className="text-destructive" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-display font-bold text-card-foreground">
                    {status.minecraft.motd_clean}
                  </p>
                  <Badge
                    variant="outline"
                    className={isOnline ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-destructive/10 text-destructive border-destructive/20"}
                  >
                    {isOnline
                      ? t({ fr: "En ligne", en: "Online", es: "En línea" }, lang)
                      : t({ fr: "Hors ligne", en: "Offline", es: "Desconectado" }, lang)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  v{status.minecraft.version} · {status.minecraft.latency_ms}ms
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Players */}
            <Card>
              <CardContent className="p-4 text-center">
                <Users size={18} className="mx-auto text-primary mb-1.5" />
                <p className="text-2xl font-display font-bold text-foreground">
                  {playersOnline}
                  <span className="text-sm font-normal text-muted-foreground">/{playersMax}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t({ fr: "Joueurs", en: "Players", es: "Jugadores" }, lang)}
                </p>
              </CardContent>
            </Card>

            {/* CPU */}
            <Card>
              <CardContent className="p-4 text-center">
                <Cpu size={18} className="mx-auto text-primary mb-1.5" />
                <p className="text-2xl font-display font-bold text-foreground">{cpuPercent}%</p>
                <p className="text-xs text-muted-foreground mt-0.5">CPU</p>
                <Progress value={cpuPercent} className="h-1.5 mt-2" />
              </CardContent>
            </Card>

            {/* RAM */}
            <Card>
              <CardContent className="p-4 text-center">
                <HardDrive size={18} className="mx-auto text-primary mb-1.5" />
                <p className="text-2xl font-display font-bold text-foreground">
                  {ramGb.toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground"> GB</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">RAM</p>
              </CardContent>
            </Card>

            {/* Uptime */}
            <Card>
              <CardContent className="p-4 text-center">
                <Clock size={18} className="mx-auto text-primary mb-1.5" />
                <p className="text-lg font-display font-bold text-foreground">
                  {status.system.uptime_formatted}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t({ fr: "Uptime", en: "Uptime", es: "Uptime" }, lang)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Players list */}
          {status.minecraft.players.list.length > 0 && (
            <Card>
              <CardContent className="p-5">
                <h3 className="font-display font-bold text-card-foreground mb-3 flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  {t({ fr: "Joueurs connectés", en: "Connected Players", es: "Jugadores conectados" }, lang)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {status.minecraft.players.list.map((player) => (
                    <Badge key={player} variant="secondary" className="text-xs">
                      {player}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Last updated */}
          {lastRefresh && (
            <p className="text-xs text-muted-foreground text-right">
              {t({ fr: "Dernière mise à jour", en: "Last updated", es: "Última actualización" }, lang)}
              {": "}
              {lastRefresh.toLocaleTimeString()}
            </p>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default MinecraftDashboard;
