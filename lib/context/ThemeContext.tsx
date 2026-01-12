"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount (client-only)
  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme =
      (savedTheme as Theme) || (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);
  }, []);

  const applyTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          "content",
          newTheme === "dark" ? "#1f2937" : "#ffffff"
        );
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  }, [theme, applyTheme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  // CRITICAL: Always provide context value, even during SSR
  // Use defaultTheme before mounting, real theme after
  return (
    <ThemeContext.Provider
      value={{
        theme: mounted ? theme : defaultTheme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
