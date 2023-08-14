import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/greg-waving-memoji.png"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [delta, setDelta] = useState(400 * Math.random());
    const period = 2000;

    useEffect(() => {
        const toRotate = [ "Full Stack Developer", "Product Manager", "Web Developer", "Business Analyst"];

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let regex = /[a-z]/ig;
            let placeholderText = fullText.replaceAll(regex, "_")
            if (isDeleting) {
                setTextLength(textLength - 1)
            } else {
                setTextLength(textLength + 1)
            }
            let textFragment = fullText.substring(0, textLength)
            let placeholderFragment = placeholderText.substring(textLength, fullText.length)
            let updatedText = textFragment+placeholderFragment

            setText(updatedText);

            if (isDeleting) {
                setDelta(200 * Math.random())
            } else {
                setDelta(400 * Math.random())
            }

            if (!isDeleting && textFragment === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && textFragment === '') {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                    setDelta(200);
                }
            }

        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text, delta, isDeleting, loopNum, textLength])

    return (
        <BrowserRouter>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col md={7}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Greg, `}<span className="wrap">{text}</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <HashLink to='#connect'>
                                <button>Let's Connect <ArrowRightCircle size={25} /></button>
                            </HashLink>
                        </Col>
                        <Col md={5} className="d-flex justify-content-center d-none d-md-block">
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </BrowserRouter>
    )
}
