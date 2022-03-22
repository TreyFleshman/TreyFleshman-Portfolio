import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../../Particle";
import ExperienceCards from "./ExperienceCard";

function Experience() {

    const HPSResponsibilities = [
        "Used React to build a HPS library to share features throughout the site.",
        "Built React components to display various types of information.",
        "Developed responsive UI pages using flexbox, grid layout and media queries.",
        "Implemented SASS to create efficient, easy to read and shared stylesheets.",
        "Optimized performance of the site by refactoring the code into reusable classes and functions.",
        "Designed and developed forms, buttons and card components for various uses.",
        "Implemented unit tests for the React components I created.",
        "Utilized GIT for version control and collaboration.",
        "Worked on a team with an Agile SDLC environment.",
    ];

    const GCCSResponsibilities = [
        " Designed UI components for an internal admin panel that teachers use to input grades and a separate panel for students to view grades.",
        "Created wireframes, prototypes of components and pages using Adobe XD.",
        "Utilized GIT for version control and collaboration.",
        "Assisted in the conversion from plain HTML to a React application.",
        "Implemented forms for teachers to input information about assignments and grades that was stored in MongoDB.",
        "Designed and developed a table that would display the assignments and grades for students to view.",
        "Developed a sign in page for teachers and students to use to sign in and view the internal panels.",
    ]

    return (
        <Container fluid className="experience-section">
            <Particle />
            <Container>
                <h1 className="experience-heading">My Recent <strong className="purple">Experience</strong></h1>
                <p></p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={10} className="experience-card">
                        <ExperienceCards
                            company="Heartland Payment Systems"
                            position="React "
                            dates="September 2020 - Current, "
                            location="Jeffersonville, IN"
                            description="Me and a team of developers worked to create components that are customizable and reusable to be used in any situation throughout the site."
                            responsibilities={HPSResponsibilities}
                        />
                    </Col>
                    <Col md={10} className="experience-card">
                        <ExperienceCards
                            company="Greater Clark County Schools"
                            position="Front-End "
                            dates="Febuary 2018 - July 2020, "
                            location="Jeffersonville, IN"
                            description="This project focused on creating an internal UI for teachers to input information about assignments, allowing them to post, edit or delete this information using a RESTFUL API. It also allowed students to log in and view their grades that have been posted by their teachers."
                            responsibilities={GCCSResponsibilities}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Experience;