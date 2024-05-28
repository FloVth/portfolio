import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5,
  SiNextdotjs,
  SiCss3,
  SiPostgresql,
  SiSass,
  SiLaravel,
  SiPhp,
  SiSymfony,
  SiBootstrap
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
      </Col>
    </Row>
  );
}

export default Techstack;
