import { createContext, useContext, useState } from "react";
import en from "../data/i18n/en.json";
import es from "../data/i18n/es.json";

const langs = { en, es };
const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const t = langs[lang];
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  
  // CV URLs based on language
  const cvUrl = lang === "en" ? process.env.REACT_APP_CV_URL_EN : process.env.REACT_APP_CV_URL_ES;
  
  return (
    <LangContext.Provider value={{ lang, t, toggle, cvUrl }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
