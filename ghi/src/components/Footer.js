import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/greg-smiling-memoji.png";
import linkedinIcon from '../assets/img/linkedin-icon-white.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import gitlabIcon from '../assets/img/gitlab-logo-white.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} className="align-self-center">
                        {/* <img src={logo} alt="Logo" /> */}
                        <span>© 2023 Greg Herren. All Rights Reserved</span>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/greg-herren/"><img src={linkedinIcon} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Greggreggregh"><img src={githubIcon} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://gitlab.com/greg-herren"><img src={gitlabIcon} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
