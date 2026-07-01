import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "havilah-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Only run on client
    if (typeof window === "undefined") return defaultTheme;
    
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored === "light" || stored === "dark") {
        return stored as Theme;
      } else if (stored) {
        window.localStorage.removeItem(storageKey);
      }
    } catch (e) {
      // LocalStorage might be blocked by Brave Shields or Incognito mode
      console.warn("localStorage is blocked or unavailable.", e);
    }
    
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    try {
      window.localStorage.setItem(storageKey, newTheme);
    } catch (e) {
      console.warn("Failed to save theme to localStorage", e);
    }
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
