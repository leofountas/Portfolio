import { Container, Nav, Navbar } from "react-bootstrap";
import icon from "../assets/images/icon.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/leonardo-fountas-163388309/">
                <img src={icon} alt="linkedin icon" />
              </a>
              <a href="https://www.instagram.com/77redman77/">
                <img src={icon2} alt="instagram icon" />
              </a>
              <a href="https://github.com/leofountas">
                <img src={icon3} alt="github icon" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
