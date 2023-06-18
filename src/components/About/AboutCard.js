import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pushkar Raj </span>
            from <span className="purple"> Patna, India.</span>
            <br /> I am a final year student pursuing B.Tech degree in Computer Science as a subject at BIT Mesra.

            <br />
            Additionally, I am currently intern as a software developer at NIT PATNA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I thrive in the realm of software development, where creativity meets problem-solving."{" "}
          </p>
          <footer className="blockquote-footer">Pushkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
