import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from "../assets/images/JavaScript.svg";
import css from "../assets/images/CSS3.svg";
import html from "../assets/images/HTML5.svg";
import bootstrap from "../assets/images/Bootstrap.svg";
import mysql from "../assets/images/MySQL.svg";
import php from "../assets/images/PHP.svg";
import react from "../assets/images/React.svg";
import typescript from "../assets/images/TypeScript.svg";
import reactbootstrap from "../assets/images/ReactBootstrap.svg";
import vs from "../assets/images/VisualStudio.svg";
import backimage from "../assets/images/color-sharp.png";
import backimage2 from "../assets/images/color-sharp2.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Throughout my career, I&apos;ve gained hands-on experience with
                a wide range of technologies.
                <br /> Here are some of the key tools, frameworks, and languages
                I&apos;ve mastered and regularly work with:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={js} alt="javascript icon" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css icon" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html icon" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap icon" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="mysql icon" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={php} alt="php icon" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react icon" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={reactbootstrap} alt="bootstrap icon" />
                  <h5>React-Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="typescript icon" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={vs} alt="vs code icon" />
                  <h5>VS Code</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={backimage} alt="bg-galaxy" />
      <img
        className="background-image-right"
        src={backimage2}
        alt="bg-galaxy"
      ></img>
    </section>
  );
}
