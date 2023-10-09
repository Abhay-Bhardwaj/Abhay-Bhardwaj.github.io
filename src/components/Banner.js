import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner=()=>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate = useMemo(() => ["Web Developer", "Programmer", "Coder"], []);
    const [text,setText]=useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period=2000;
    useEffect(() => {
        const tick = () => {
          let i = loopNum % toRotate.length;
          let fullText = toRotate[i];
          let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      
          setText(updateText);
      
          if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
          }
      
          if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
          } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
          }
        };
      
        let ticker = setInterval(() => {
          tick();
        }, delta);
      
        return () => {
          clearInterval(ticker);
        };
      }, [text, delta, loopNum, isDeleting, toRotate, period]);
      
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h2>{`Hi i'm Abhay Bhardwaj`}</h2>
                        <h3>{`i'm a `}<span className="wrap">{text}</span></h3>
                        <p>I'm a third-year student at Netaji Subhash University of Technology. I'm passionate about back-end and front-end development. I'm also familiar with C++ and Python and always eager to learn more.</p>
                        <button onClick={()=> window.open("https://www.linkedin.com/in/bhardwaj-abhay/", "_blank")}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>


        )
    
}