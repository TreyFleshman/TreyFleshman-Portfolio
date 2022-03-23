import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCards(props) {
    return (
        <Card className="experience-card-view">
            <Card.Body>
                <Card.Title>
                    <strong className="purple">
                        {props.company}
                    </strong>
                </Card.Title>
                <section className="experience-card-section-subtitles">
                    <Card.Subtitle className="experience-card-subtitles">
                        <strong className="purple">
                            {props.position} 
                        </strong>
                        Developer
                    </Card.Subtitle>
                    <Card.Subtitle className="experience-card-subtitles">
                        {props.dates} {props.location}
                    </Card.Subtitle>
                </section>
                <h5><strong className="purple">Description</strong></h5>
                <Card.Text>{props.description}</Card.Text>
                <h5><strong className="purple">Responsibilities</strong></h5>
                <Card.Text style={{ textAlign: "justify" }}>
                    <ul>
                        {props.responsibilities?.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ExperienceCards;