import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have pushed myself to learn as much as I can
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">Connect </span>with me</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <b className="purple">
                  <MdEmail />
                </b>
                - fleshman.trey@gmail.com
              </li>
              <li className="social-icons">
                <b className="purple">
                  <FaPhoneAlt />
                </b>
                - (812)-286-0752
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="contact">
            <ul>
              <li><b className="purple">Mon-Fri:</b> 10:00am - 5:00pm <b className="purple">EST</b></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;