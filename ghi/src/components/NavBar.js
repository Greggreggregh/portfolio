import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/greg-smiling-memoji-close.png';
import linkedinIcon from '../assets/img/linkedin-icon-white.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import gitlabIcon from '../assets/img/gitlab-logo-white.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 991px)'});

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

  useEffect(() => {
    const onDocumentClick = (e) => {
      const container = document.getElementById("navbar")
      if (e.target !== container && !container.contains(e.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener("click", onDocumentClick);

return () => document.removeEventListener("click", onDocumentClick);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div id="navbar">
      <BrowserRouter>
        <Navbar expand="lg" className={scrolled || isMobile ? "scrolled" : ""} expanded={expanded}>
          <Container>
            <Navbar.Brand href="#home" onClick={()=>setExpanded(false)}>
              <img src={logo} style={{height: "55px"}} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link text-end' : 'navbar-link text-end'} onClick={() => {onUpdateActiveLink('home'); setExpanded(false);}}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link text-end' : 'navbar-link text-end'} onClick={() => {onUpdateActiveLink('skills'); setExpanded(false);}}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link text-end' : 'navbar-link text-end'} onClick={() => {onUpdateActiveLink('projects'); setExpanded(false);}}>Projects</Nav.Link>
                <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link text-end' : 'navbar-link text-end'} onClick={() => {onUpdateActiveLink('resume'); setExpanded(false);}}>Resume</Nav.Link>
              </Nav>
              <span className="navbar-text justify-content-end">
                <div className="social-icon text-md-end">
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/greg-herren/"><img src={linkedinIcon} alt="" /></a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Greggreggregh"><img src={githubIcon} alt="" /></a>
                  <a target="_blank" rel="noreferrer" href="https://gitlab.com/greg-herren"><img src={gitlabIcon} alt="" /></a>
                </div>
              </span>
              <span className="navbar-text justify-content-end">
                <HashLink to='#connect' onClick={()=>setExpanded(false)}>
                  <button className="vvd"><span>{`Let's Connect`}</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </BrowserRouter>
    </div>
  )
}
