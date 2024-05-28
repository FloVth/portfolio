import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UNE <span className="purple"> PRESENTATION </span> BREVE DE MOI 
            </h1>
            <p className="home-about-body">
              Je suis un développeur, qui adore son métier.
              <br />
              <br />Je suis capable de développer avec différents langages comme le
              <i>
                <b className="purple"> C#, Javascript, PHP, HTML & CSS, SCSS ... </b>
              </i>
              <br />
              <br />
              Je suis aussi capable de développer avec d'autres outils, tel que <b className="purple">Node.js</b>, aisni que
              <i>
                <b className="purple">
                  {" "}
                  des librairies et des frameworks JS
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js, Next.js et Vue.js</b>
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
            <h1>Retrouvez moi sur </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FloVth"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/florian-vauthier-67105b251/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
