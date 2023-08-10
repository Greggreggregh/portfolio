import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
import logo from '../assets/img/greg-smiling-memoji.png';
import linkedinIcon from '../assets/img/linkedin-icon-white.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import gitlabIcon from '../assets/img/gitlab-logo-white.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} style={{height: "55px"}} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/greg-herren/"><img src={linkedinIcon} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Greggreggregh"><img src={githubIcon} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://gitlab.com/greg-herren"><img src={gitlabIcon} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{`Let's Connect`}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  )
}
