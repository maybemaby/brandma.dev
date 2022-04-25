import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useMedia } from "./useMedia";

export const useDarkMode = (): [boolean, (value: boolean) => void] => {
  const [mode, setMode] = useLocalStorage<boolean>("dark-mode-enabled");

  const prefersDarkMode = usePrefersDarkMode();

  const enabled = typeof mode !== "undefined" ? mode : prefersDarkMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setMode];
};

const usePrefersDarkMode = () => {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
};
