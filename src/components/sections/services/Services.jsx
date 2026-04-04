import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import "./services.css";

const icons = { FaCode, FaServer, FaDatabase, FaCloud };

export const Services = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section className="section-dark paddings" id="services">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.services.title}</h2>
        <Row className="justify-content-center">
          {t.services.items.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Col key={i} sm={6} lg={3} className={`fade-up stagger-${i + 1} ${visible ? "visible" : ""}`}>
                <div className="service-card">
                  <Icon className="service-icon" />
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
