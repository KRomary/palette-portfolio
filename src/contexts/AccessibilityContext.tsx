import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ColorVisionMode = "none" | "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia";

interface AccessibilityContextType {
  colorVisionMode: ColorVisionMode;
  setColorVisionMode: (mode: ColorVisionMode) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  colorVisionMode: "none",
  setColorVisionMode: () => {},
});

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [colorVisionMode, setColorVisionMode] = useState<ColorVisionMode>(() => {
    return (localStorage.getItem("colorVisionMode") as ColorVisionMode) || "none";
  });

  useEffect(() => {
    localStorage.setItem("colorVisionMode", colorVisionMode);
    document.documentElement.setAttribute("data-vision", colorVisionMode);
  }, [colorVisionMode]);

  return (
    <AccessibilityContext.Provider value={{ colorVisionMode, setColorVisionMode }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
