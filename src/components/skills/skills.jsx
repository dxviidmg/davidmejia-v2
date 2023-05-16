import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pythonLogo from "../../assets/img/python.svg";
import djangoLogo from "../../assets/img/django.svg";
import pqslLogo from "../../assets/img/postgresql.svg";
import apiLogo from "../../assets/img/api.svg";
import graphqlLogo from "../../assets/img/graphql.svg";
import jsLogo from "../../assets/img/js.svg";
import reactLogo from "../../assets/img/react.svg";

import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={pythonLogo} alt="img"></img>
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <img src={jsLogo} alt="img"></img>
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={djangoLogo} alt="img"></img>
                  <h5>Django</h5>
                </div>

                <div className="item">
                  <img src={reactLogo} alt="img"></img>
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={pqslLogo} alt="img"></img>
                  <h5>Postgresql</h5>
                </div>
                <div className="item">
                  <img src={apiLogo} alt="img"></img>
                  <h5>django rest framework</h5>
                </div>
                <div className="item">
                  <img src={graphqlLogo} alt="img"></img>
                  <h5>Graphql</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
