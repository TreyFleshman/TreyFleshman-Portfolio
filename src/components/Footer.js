import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons" style={{ color: 'white' }}><b className="purple"><MdEmail /></b> - fleshman.trey@gmail.com</li>
            <li className="social-icons" style={{ color: 'white' }}><p><b className="purple"><FaPhoneAlt /></b> - (812)-286-0752</p></li>

            <li className="social-icons">
              <a
                href="https://github.com/TreyFleshman"
                style={{ color: "white", fontSize: '24px'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;