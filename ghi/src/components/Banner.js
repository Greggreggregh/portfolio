import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/greg-waving-memoji.png"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [delta, setDelta] = useState(400 * Math.random());
    const isMobile = useMediaQuery({ query: '(max-width: 991px)'});
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
            <section className={isMobile ? "mobile-banner-image" : "d-none"} id={isMobile ? "home": ""}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} className="small-img">
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={isMobile ? "mobile-banner" : "banner"} id={isMobile ? "": "home"}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} lg={8}>
                            <h1>{isMobile ? `Hi,` : `Hi👋 `}&nbsp;{`I'm Greg:`}</h1>
                            <h2><span>{text}</span></h2>
                            <p>A multi-faceted software engineer with a background in product and business. <br/><br/>I enjoy developing for web, mobile, and browser extensions. Check out{' '}
                                <HashLink className="link" to='#projects'>
                                    <button>my projects</button>
                                </HashLink>!
                            </p>
                            <HashLink to='#connect'>
                                <button>Let's Connect <ArrowRightCircle size={25} /></button>
                            </HashLink>
                        </Col>
                        <Col className={isMobile ? "d-none" : "align-self-start d-none d-md-block"}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </BrowserRouter>
    )
}
