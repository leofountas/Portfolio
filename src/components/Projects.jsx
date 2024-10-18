import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/images/teemohitter.png";
import projImg2 from "../assets/images/pizzeria.png";
import projImg3 from "../assets/images/jungle.png";

export default function Projects() {
  const projects = [
    {
      title: "Teem Hitter",
      description:
        "Cookie Clicker inspired by the world of League of Legends made with JS, HTML, CSS, Bootstrap",
      imgUrl: projImg1,
      Url: "https://github.com/Flow1202a/CookieProjet",
    },
    {
      title: "MammamiaPizzeria",
      description:
        "Fake resturant Web site made with Bootstrap, Js, Css, HTML. On my github you can find also a version with some backend",
      imgUrl: projImg2,
      Url: "https://github.com/leofountas/restaurant-css-framework?tab=readme-ov-file",
    },
    {
      title: "Maison Jungle",
      description:
        "Fake e-shop for plants, little project to start learning React",
      imgUrl: projImg3,
      Url: "https://github.com/leofountas/react-shop",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Here are some of the main projects I&apos;ve worked on recently.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Incoming projects</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Incoming projects</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
