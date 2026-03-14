import { Col, Container, Row } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import { useLang } from "../../../utils/LangContext";
import "./certifications.css";

export const Certifications = () => {
  const { t } = useLang();
  return (
    <section id="certifications" className="section-light paddings">
      <Container>
        <h2>{t.certifications.title}</h2>
        <Row className="justify-content-center">
          {certifications.map((cert, index) => (
            <Col sm={6} md={3} key={index} className="col-gap">
              <div className="dark-card dark-card-hover cert-card">
                <h5 className="cert-name">{cert.name}</h5>
                <p className="cert-institution">{cert.instution}</p>
                <p className="cert-date">{cert.expedition}</p>
                {cert.expiration && <p className="cert-meta">Expires: {cert.expiration}</p>}
                {cert.id && <p className="cert-meta">ID: {cert.id}</p>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
