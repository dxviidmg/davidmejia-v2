import { Container } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./publications.css";

export const Publications = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section className="section-light paddings" id="publications">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.education.papers.title}</h2>
        <ul className={`papers-list fade-up ${visible ? "visible" : ""}`}>
          {t.education.papers.items.map((p, i) => (
            <li key={i}>
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.title} <FaExternalLinkAlt size={10} />
              </a>
              <span className="paper-meta">{p.publisher}, {p.year}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
