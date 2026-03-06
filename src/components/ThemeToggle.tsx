import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 rounded-full p-1 w-[160px] h-[44px] transition-colors duration-300"
      style={{
        background: isDark
          ? "hsl(var(--secondary))"
          : "hsl(var(--muted))",
        boxShadow: isDark
          ? "inset 2px 2px 6px hsl(var(--background) / 0.5), inset -2px -2px 6px hsl(var(--muted-foreground) / 0.1)"
          : "inset 2px 2px 6px hsl(var(--border)), inset -2px -2px 6px hsl(var(--background))",
      }}
      aria-label="Toggle theme"
    >
      {/* Sliding thumb */}
      <div
        className="absolute top-1 h-[36px] w-[36px] rounded-full transition-all duration-300 flex items-center justify-center"
        style={{
          left: isDark ? "calc(100% - 40px)" : "4px",
          background: isDark
            ? "hsl(var(--muted))"
            : "hsl(var(--background))",
          boxShadow: "2px 2px 8px hsl(var(--foreground) / 0.15), -1px -1px 4px hsl(var(--background) / 0.5)",
        }}
      >
        {isDark ? (
          <Moon size={16} className="text-primary" />
        ) : (
          <Sun size={16} className="text-primary" />
        )}
      </div>

      {/* Label text */}
      <span
        className="text-[10px] font-bold uppercase tracking-wider transition-opacity duration-300 select-none w-full text-center"
        style={{
          paddingLeft: isDark ? "0" : "40px",
          paddingRight: isDark ? "40px" : "0",
          color: "hsl(var(--muted-foreground))",
        }}
      >
        {isDark ? "DARK MODE" : "LIGHT MODE"}
      </span>
    </button>
  );
};

export default ThemeToggle;
