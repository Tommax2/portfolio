import { Tab } from "react-bootstrap";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";
import { ProjectCards } from "./ProjectCards";
import { motion } from "framer-motion";
import  House  from "../img/house3.jpg";
import Jais from "../img/logo.jpeg";
import camera3 from "../img/camera3.jpg";
import Machine from "../img/machine.jpeg";
import background from "../img/background-optimized.jpg";
import Books from "../img/kids-books.jpg"

export const Projects = () => {
  const projects = [
    {
      title: "TheTransformedMeAcademy",
      description: "an e-commerce online store for selling books and get them delivered to your doorstep quickly.",
      imgUrl: Books,
      url: "https://thetransformedmeacademy.com",
    },
    {
      title: "JaisTechworld",
      description: "a portfolio website showcasing projects and skills about the company.",
      imgUrl: Jais,
      url: "https://jaistechworld.com",
    },
    {
      title: "EverythingByBecky",
      description: "an e-commerce online store for selling nails and other beauty products.",
      imgUrl: background,
      url: "https://everythingbybecky.onrender.com",
    },
  ];

  const designProjects = [
    {
      title: "camera design demo",
      description: "UI/UX Design",
      imgUrl: camera3,
      url: "https://tommax2.github.io/camera/",
    },
    {
      title: "Industrial Landing Page demo",
      description: "Web Design",
      imgUrl: Machine,
      url: "https://tommax2.github.io/Engineering-website-/",
    },
  ];

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Featured Projects</h2>
              <p>Explore a selection of my recent work, showcasing my expertise in building robust, scalable, and visually stunning web applications. Each project represents a unique challenge solved with modern technology.</p>
            </motion.div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Web Apps</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Future Projects</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey ="first">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                <Row>
  {projects.map((project, index) => {
    return (
      <ProjectCards key={index} {...project} />
    );
  })}
</Row>
                </motion.div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                  >
                    <Row>
                      {designProjects.map((project, index) => {
                        return (
                          <ProjectCards key={index} {...project} />
                        );
                      })}
                    </Row>
                  </motion.div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>I am always open to new opportunities and collaborations. If you have a project in mind, feel free to reach out!</p>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
