import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";

import HomePage from "../../../Assets/Projects/Travel_Blog-HomePage.png";
import WebStore from "../../../Assets/Projects/WebStore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomePage}
              title="Travel Blog"
              description="Travel Blog is an application created for users to upload and share their travel photos. Users are able to view and like others posts, or post their own photos."
              link="https://github.com/TreyFleshman/MERN-Travel-Blog"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebStore}
              title="E-Commerce Web Store"
              description="Web Store is an application created for personal practice displaying my skills to create an application that uses Google Authentication, MongoDB, Express, Stripe Payments and other technologies."
              link="https://github.com/TreyFleshman/WebStore"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;