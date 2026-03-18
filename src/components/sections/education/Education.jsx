import { Container, Row, Col } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";

export const Education = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section className="section-dark paddings" id="education">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.education.title}</h2>
        <Row>
          {t.education.items.map((item, i) => (
            <Col xs={12} sm={6} key={i} className="col-gap">
              <div className={`dark-card dark-card-hover fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h5 className="card-title-light">{item.degree}</h5>
                <p className="card-subtitle">{item.institution}</p>
                <span className="card-accent">{item.period}</span>
                {item.note && <span className="card-muted">{item.note}</span>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
