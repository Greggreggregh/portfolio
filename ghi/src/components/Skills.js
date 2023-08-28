import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bootstrap from '../assets/img/skills_bootstrap.svg';
import css from '../assets/img/skills_css.svg';
import django from '../assets/img/skills_django.svg';
import docker from '../assets/img/skills_docker.png';
import fastapi from '../assets/img/skills_fastapi.svg';
import html5 from '../assets/img/skills_html5.svg';
import javascript from '../assets/img/skills_javascript.png';
import mongodb from '../assets/img/skills_mongodb.svg';
import postgres from '../assets/img/skills_postgresql.svg';
import python from '../assets/img/skills_python.png';
import rabbitmq from '../assets/img/skills_rabbitmq.png';
import react from '../assets/img/skills_react.svg';
import redux from '../assets/img/skills_redux.svg';

export const Skills = () => {

    const [expanded, setExpanded] = useState(false);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 992 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 991, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 767, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 575, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <button onClick={() => {setExpanded(expanded ? false : true)}}>{expanded ? "▿ show preview" : "▹ show all"}</button>
                            <Carousel className={expanded ? "d-none" : "skill-slider"} responsive={responsive} infinite={true} swipeable={true} draggable={true} arrows={false} autoPlay={true} autoPlaySpeed={2000}>
                                <div className="item">
                                    <img src={python} alt="Python logo" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className="item-no-bg">
                                    <img src={django} alt="" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={fastapi} alt="" />
                                    <h5>FastAPI</h5>
                                </div>
                                <div className="item">
                                    <img src={html5} alt="" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={postgres} alt="" />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={rabbitmq} alt="" />
                                    <h5>RabbitMQ</h5>
                                </div>
                            </Carousel>
                            <Row className={expanded ? "skill-grid" : "d-none"}>
                                <Col xs={12} sm={true} md={4} lg={3}>
                                    <div className="item">
                                        <img src={python} alt="Python logo" />
                                        <h5>Python</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={javascript} alt="" />
                                        <h5>Javascript</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={react} alt="" />
                                        <h5>React</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item-no-bg">
                                        <img src={django} alt="" />
                                        <h5>Django</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={fastapi} alt="" />
                                        <h5>FastAPI</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={html5} alt="" />
                                        <h5>HTML5</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={css} alt="" />
                                        <h5>CSS</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={bootstrap} alt="" />
                                        <h5>Bootstrap</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={docker} alt="" />
                                        <h5>Docker</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={postgres} alt="" />
                                        <h5>PostgreSQL</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={mongodb} alt="" />
                                        <h5>MongoDB</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={redux} alt="" />
                                        <h5>Redux</h5>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <div className="item">
                                        <img src={rabbitmq} alt="" />
                                        <h5>RabbitMQ</h5>
                                    </div>
                                </Col>
                            </Row>
                            <p>Something missing? Don't worry, I'm a quick study 🤓</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    }
