import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bienvenue sur mon portfolio, je suis <span className="purple">Florian VAUTHIER </span>
            et je viens de  <span className="purple"> Vesoul, France.</span>
            <br />
            Je suis actuellement en altérnance, au lycée Pasteur Mont Roland à Dole, et je suis employé chez Eurydice Informatique à Echenoz-la-Méline.
            <br />
            <br />
            A part coder, voici quelques autres activités que j'aime faire!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer au jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire du sport 
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Sortir avec mes amis
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
