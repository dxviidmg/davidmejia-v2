import { Col, Row, Container, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ["Fullstack Developer", "Data Analyst", "Data Scientist jr"];

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    /*        console.log(updateText)*/
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section id="banner">
      <Container className="">
        <Row className="min-height d-flex align-items-center text-center">
          <Col md={12} className="">
            <h1>Hi there, I am David.</h1>
            <h2>I am {text}</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
