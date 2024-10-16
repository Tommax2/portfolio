import { Tab } from "react-bootstrap";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";
import { ProjectCards } from "./ProjectCards";
import  House  from "../img/house3.jpg";
import Time from "../img/time.jpg";
import camera3 from "../img/camera3.jpg";
import Machine from "../img/machine.jpeg";
import background from "../img/background.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: House,
      url:"https://tommax2.github.io/house/"
    },
    {
      title: "TImer",
      description: "Design and Development",
      imgUrl: Time,
      url:"https://tommax2.github.io/timer/",
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: camera3,
      url:"https://tommax2.github.io/camera/",
    },
    {
      title: "Engineer Startup",
      description: "Design and Development",
      imgUrl: Machine,
      url:"https://tommax2.github.io/Engineering-website-/",
    },
    {
      title: "E-commerce",
      description: "Design and Development",
      imgUrl: background,
      url: "https://everythingbybecky.onrender.com",
    },
  ];

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Little of my projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab one</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" >
                  Tab three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey ="first">
                <Row>
  {projects.map((project, index) => {
    return (
      <ProjectCards key={index} {...project} />
    );
  })}
</Row>

                </Tab.Pane>
                <Tab.Pane eventKey = "second">lorem</Tab.Pane>
                <Tab.Pane eventKey ="third">lorem</Tab.Pane>

            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};