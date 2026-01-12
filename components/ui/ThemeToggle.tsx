import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/context/ThemeContext";
import { IconButton } from "./IconButton";
import { ARIA_LABELS } from "@/constants";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <IconButton
      icon={isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      onClick={toggleTheme}
      variant="default"
      ariaLabel={`${ARIA_LABELS.TOGGLE_THEME} (currently ${theme})`}
      active={isDark}
    />
  );
};
