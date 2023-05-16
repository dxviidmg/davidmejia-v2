import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pythonLogo from "../../assets/img/python.svg";
import djangoLogo from "../../assets/img/django.svg";

import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <h2>skills</h2>
            </div>
            <p>asdfjasdfjasdfjklasdf</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div className="item">
                <img src={pythonLogo} alt="sdfsfd"></img>
                <h5>Python</h5>
              </div>
              <div className="item">
                <img src={djangoLogo} alt="sdfsfd"></img>
                <h5>sdjasdfjasdfl2</h5>
              </div>
              <div className="item">
                <img src={pythonLogo} alt="sdfsfd"></img>
                <h5>sdjasdfjasdfl3</h5>
              </div>
              <div className="item">
                <img src={pythonLogo} alt="sdfsfd"></img>
                <h5>sdjasdfjasdfl4</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left"></img>
    </section>
  );
};
