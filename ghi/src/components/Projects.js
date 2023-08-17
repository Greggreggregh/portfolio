import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg3 from '../assets/img/project-img3.png';
import CarPrime from '../assets/gif/CarPrime_Demo.gif';

export const Projects = () => {
    const projects = [
        {
            title: "CarPrime",
            subtitle: "Dealership Management Service",
            description: "Python, Javascript, Django, React, Bootstrap, Docker",
            imgUrl: CarPrime,
            codeUrl: "https://gitlab.com/greg-herren/project-beta",
        },
        {
            title: "Plunge",
            subtitle: "Education Marketplace",
            description: "Python, Django, React, Bootstrap, Docker",
            imgUrl: CarPrime,
            codeUrl: "https://gitlab.com/greg-herren/project-beta",
            appUrl: "https://gitlab.com/greg-herren/project-beta",
        },
        {
            title: "CarPrime",
            subtitle: "Dealership Management Service",
            description: "Python, Django, React, Bootstrap, Docker",
            imgUrl: CarPrime,
            codeUrl: "https://gitlab.com/greg-herren/project-beta",
            appUrl: "https://gitlab.com/greg-herren/project-beta",
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Check out some of the cool things I've done recently</p>
                        {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container> */}
                        <Row>
                            {projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index} {...project}/>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
