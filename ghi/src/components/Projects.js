import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from './ProjectCard';
import CarPrime from '../assets/gif/20230821_CarPrime_Demo.gif';
import Plunge from '../assets/gif/20230821_Plunge_Demo.gif';
import SudokuSolver from '../assets/gif/20230913_Sudoku_Solver_Demo.gif';

export const Projects = () => {
    const projects = [
        {
            title: "Plunge",
            subtitle: "Education Marketplace",
            description: "Python, Django, React, Redux, Bootstrap, FastAPI, PostgreSQL, Docker, Pytest",
            imgUrl: Plunge,
            codeUrl: "https://gitlab.com/greg-herren/plunge",
            appUrl: "https://greg-herren.gitlab.io/plunge/",
        },
        {
            title: "Sudoku Solver",
            subtitle: "Solves Any Sudoku Puzzle",
            description: "Python, Javascript, AWS Lambda, React, Bootstrap, Docker",
            imgUrl: SudokuSolver,
            codeUrl: "https://gitlab.com/greg-herren/sudoku-solver",
            appUrl: "https://sudoku.hey-greg.com/",
        },
        {
            title: "CarPrime",
            subtitle: "Dealership Management Service",
            description: "Python, Javascript, Django, React, Bootstrap, Docker",
            imgUrl: CarPrime,
            codeUrl: "https://gitlab.com/greg-herren/project-beta",
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Check out some of the cool things I've done recently!</p>
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
                        <Row className="d-flex justify-content-center">
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
