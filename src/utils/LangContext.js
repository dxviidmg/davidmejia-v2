import { createContext, useContext, useState } from "react";
import en from "../data/i18n/en.json";
import es from "../data/i18n/es.json";

const langs = { en, es };
const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const t = langs[lang];
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
