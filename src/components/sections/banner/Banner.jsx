import { Col, Row, Container } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ParticlesBackground } from "./Particles";
import './banner.css'
import { NavBar } from "../../commons/navbar/Navbar";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const titles = useMemo(
    () => ["Fullstack Developer", "Data Analyst", "Data Scientist jr"],
    []
  );

  useEffect(() => {
    const tick = () => {
      let i = loopNum % titles.length;
      let fullText = titles[i];
      let updateText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updateText);
      if (isDeleting) {
        setDelta(100);
      }
      if (!isDeleting && updateText === fullText) {
        setIsDeleting(true);
        setDelta(3000);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };

    let ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [loopNum, text, isDeleting, delta, titles]);

  return (
    <section id="banner" style={{ position: "relative"}}>
      <ParticlesBackground></ParticlesBackground>
      <NavBar></NavBar>
      <Container>
        <Row className="min-height d-flex align-items-center text-center">
          <Col sm={12}>
            <h1>Hi there, I am David.</h1>
            <h2 id="iam">I am {text}</h2>
            <a
              href="https://www.linkedin.com/in/david-mejia-guzman/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon" size={25} />
            </a>
            <a
              href="https://github.com/dxviidmg"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon" size={25} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}