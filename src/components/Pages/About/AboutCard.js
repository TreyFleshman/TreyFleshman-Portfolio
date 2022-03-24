import React from "react";
import Card from "react-bootstrap/Card";
import { IoAirplaneSharp, IoGameController } from "react-icons/io5";
import { SiPcgamingwiki } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Trey Fleshman </span>
            from Indiana, USA.
            <br />I completed my Bachelor of Science at the<span className="purple"> Purdue School of Engineering and Technology</span> at IUPUI.
             I majored in <span className="purple">Computer Information and Technology</span>,
            concentrating with MERN stack technologies and Google Cloud Platform.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoGameController /> Playing Games
            </li>
            <li className="about-activity">
              <IoAirplaneSharp /> Traveling
            </li>
            <li className="about-activity">
              <SiPcgamingwiki /> Building Computers
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;