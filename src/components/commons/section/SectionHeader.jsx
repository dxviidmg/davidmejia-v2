'use client';

import { useInView } from "../../../utils/useInView";

export const SectionHeader = ({ title }) => {
  const [ref, visible] = useInView();
  return (
    <header ref={ref} className={`section-header ${visible ? "visible" : ""}`}>
      <h2 className="section-title">
        <span className="section-title-mask"><span className="section-title-inner">{title}</span></span>
      </h2>
    </header>
  );
};
