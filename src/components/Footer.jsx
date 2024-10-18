import { Container, Row, Col } from "react-bootstrap";
import icon from "../assets/images/icon.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Leo&apos;s portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
