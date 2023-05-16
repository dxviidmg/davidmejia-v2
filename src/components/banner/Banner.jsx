import { Col, Row, Container } from "react-bootstrap";
import HeaderImg from '../../assets/img/header-img.svg'
import { useEffect, useState } from "react";
export function Banner(){

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const titles = ["Fullstack Developer", "Data Analyst", "Data Scientist jr"]

    const[text, setText] = useState('')
    const [delta, setDelta] = useState (300 - Math.random() * 100)
    const period = 2000

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % titles.length
        let fullText = titles[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1): 
        fullText.substring(0, text.length + 1)
        console.log(updateText)
        setText(updateText)
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }

    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my portolio</span>
                        <h1> Hi, I am David. I am <span className="wrap">{text}</span></h1>
                        <button onClick={()=>console.log('connect')}>Lets connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={HeaderImg} alt="header logo"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}