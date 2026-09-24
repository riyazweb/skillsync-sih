"use client";
import { createContext, useContext, useState, useCallback } from "react";
import translations from "@/data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "mr" : "en"));
  }, []);

  // t("kpiJobSignals") => returns the correct language string
  const t = useCallback(
    (key) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry["en"] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
