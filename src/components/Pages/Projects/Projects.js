import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";

import HomePage from "../../../Assets/Projects/Travel_Blog-HomePage.png";

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
              isBlog={false}
              title="Travel Blog"
              description="Travel Blog is a application created for users to upload and share their travel photos. Users are able to view and like others posts, or post their own photos."
              link="https://github.com/TreyFleshman/SEP_REACT_1_18_2022/tree/by_Trey_Fleshman/Notes/MERN-Travel_Blog-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;