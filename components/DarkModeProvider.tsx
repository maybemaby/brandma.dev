import React, { createContext, ReactNode } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const DarkModeContext = createContext<{
  darkOn: boolean;
  setDarkOn: (value: boolean) => void;
} | null>(null);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkOn, setDarkOn] = useDarkMode();
  const value = { darkOn, setDarkOn };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
