import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiAdobexd } from "react-icons/si";
import { DiBootstrap, DiWordpress, DiTrello } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello />
      </Col>
    </Row>
  );
}

export default Toolstack;