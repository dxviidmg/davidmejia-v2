'use client';

import { useInView } from "../../../utils/useInView";
import { useLang } from "../../../utils/LangContext";
import { sectionNumber, sectionOf } from "../../../sections";

// Number and eyebrow come from the section list, so they follow the page order
export const SectionEyebrow = ({ id, className = "" }) => {
  const { t } = useLang();
  return (
    <span className={`section-eyebrow ${className}`}>
      <span className="num">{sectionNumber(id)}</span> — {t.nav[sectionOf(id).nav]}
    </span>
  );
};

export const SectionHeader = ({ id, title }) => {
  const [ref, visible] = useInView();
  return (
    <header ref={ref} className={`section-header ${visible ? "visible" : ""}`}>
      <SectionEyebrow id={id} />
      <h2 className="section-title">
        <span className="section-title-mask"><span className="section-title-inner">{title}</span></span>
      </h2>
      <span className="section-rule" />
    </header>
  );
};
