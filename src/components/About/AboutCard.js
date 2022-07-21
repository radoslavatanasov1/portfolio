import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Radoslav Atanasov </span>
            from <span className="purple"> Duisburg, Germany.</span>
            <br />I am a Student in Duisburg-Essen University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess/ mind games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Pen-Testing
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
