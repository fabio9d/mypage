import { useEffect, useState } from "react";

export type Language = "pt" | "en";

export const DEFAULT_LANGUAGE: Language = "pt";
const STORAGE_KEY = "starfolio-language";
const CHANGE_EVENT = "starfolio-language-change";

function normalizeLanguage(value: string | null): Language {
  return value === "en" ? "en" : DEFAULT_LANGUAGE;
}

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
}

export function setStoredLanguage(language: Language) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, language);
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.cookie = `${STORAGE_KEY}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: language }));
  window.location.reload();
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    setLanguageState(getStoredLanguage());

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setLanguageState(normalizeLanguage(event.newValue));
      }
    };

    const handleChange = (event: Event) => {
      setLanguageState(
        normalizeLanguage((event as CustomEvent<Language>).detail ?? null)
      );
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(CHANGE_EVENT, handleChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(CHANGE_EVENT, handleChange);
    };
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setStoredLanguage(nextLanguage);
    setLanguageState(nextLanguage);
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return { language, setLanguage, toggleLanguage };
}
