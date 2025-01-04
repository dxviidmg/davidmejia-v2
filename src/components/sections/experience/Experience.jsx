import { Col, Container, Image, Row } from "react-bootstrap";
import positions from "../../../data/positions.json";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience" className="paddings">
      <Container>
        <h2>Experience</h2>
        <Row>
          {positions.map((position, index) => {
            const positionInfo = `${position.position} at ${position.company.name}`;

            const country = position.location.includes("Boston")
              ? "https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"
              : "https://upload.wikimedia.org/wikipedia/commons/c/c0/Mexico_flag_icon.svg";
            return (
              <Col sm={12} md={6} key={index}>
                <h3>
                  {position.position}{" "}
                  {positionInfo.length > 55 ? "" : <br></br>} at{" "}
                  <a
                    href={position.company.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {position.company.name}
                  </a>
                </h3>
                <Row>
                  <Col sm={12} md={6}>
                    <p>
                      <strong>Period:</strong> {position.period}
                      <br />
                      <strong>Modality:</strong> {position.modality}
                      <br />
                      <strong>Location:</strong> {position.location}{" "}
                      <span>
                        {" "}
                        <Image
                          src={country}
                          roundedCircle
                          style={{ height: "22px", paddingBottom: '3px' }}
                        />
                      </span>
                      <br />
                    </p>
                  </Col>
                  <Col sm={12} md={6} className="">
                    <Image
                      src={position.logo}
                      roundedCircle
                      style={{ height: "70px" }}
                      thumbnail
                    />
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
