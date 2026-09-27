import { useInView } from "../../../utils/useInView";

export const SectionHeader = ({ index, eyebrow, title }) => {
  const [ref, visible] = useInView();
  return (
    <header ref={ref} className={`section-header ${visible ? "visible" : ""}`}>
      <span className="section-eyebrow"><span className="num">{String(index).padStart(2, "0")}</span> — {eyebrow}</span>
      <h2 className="section-title">
        <span className="section-title-mask"><span className="section-title-inner">{title}</span></span>
      </h2>
      <span className="section-rule" />
    </header>
  );
};
