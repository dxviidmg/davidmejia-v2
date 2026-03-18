import { Col, Container, Row } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import "./certifications.css";

const CertCard = ({ cert, index }) => {
  const [ref, visible] = useInView();
  return (
    <Col sm={6} md={3} className="col-gap" ref={ref}>
      <div className={`dark-card dark-card-hover cert-card fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${index * 0.1}s` }}>
        <h5 className="cert-name">{cert.name}</h5>
        <p className="cert-institution">{cert.instution}</p>
        <p className="cert-date">{cert.expedition}</p>
        {cert.expiration && <p className="cert-meta">Expires: {cert.expiration}</p>}
        {cert.id && <p className="cert-meta">ID: {cert.id}</p>}
      </div>
    </Col>
  );
};

export const Certifications = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section id="certifications" className="section-light paddings">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.certifications.title}</h2>
        <Row className="justify-content-center">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
