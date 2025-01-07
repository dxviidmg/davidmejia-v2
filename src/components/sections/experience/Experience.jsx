import { Col, Container, Image, Row } from "react-bootstrap";
import positions from "../../../data/positions.json";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience" className="paddings">
      <Container>
        <h2>Experience</h2>
        <Row>
          {positions.map(({ position, company, period, modality, location, logo, lineOfBusiness }, index) => {
            const positionInfo = `${position} at ${company.name}`;
            const isUS = location.includes("Boston");
            const countryFlag = isUS
              ? "https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"
              : "https://upload.wikimedia.org/wikipedia/commons/c/c0/Mexico_flag_icon.svg";

            return (
              <Col sm={12} md={6} xxl={4} key={index}>
                <h3>
                  {position}{" "}
                  {positionInfo.length <= 55 && <br />} at{" "}
                  <a href={company.url} target="_blank" rel="noreferrer">
                    {company.name}
                  </a>
                </h3>
                <Row>
                  <Col sm={12} md={6} xxl={8}>
                    <p>
                      <strong>Period:</strong> {period}
                      <br />
                      <strong>Line of business:</strong> {lineOfBusiness}
                      <br />
                      <strong>Modality:</strong> {modality}
                      <br />
                      <strong>Location:</strong> {location}{" "}
                      <Image
                        src={countryFlag}
                        roundedCircle
                        style={{ height: "22px", paddingBottom: "3px" }}
                        alt="Country Flag"
                      />
                    </p>
                  </Col>
                  <Col sm={12} md={6}  xxl={4}>
                    <Image
                      src={logo}
                      roundedCircle
                      style={{ height: "100px" }}
                      thumbnail
                      alt={`${company.name} Logo`}
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
