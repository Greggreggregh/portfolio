import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from '../assets/img/linkedin-icon-white.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import gitlabIcon from '../assets/img/gitlab-logo-white.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="text-center text-sm-start align-self-center">
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
