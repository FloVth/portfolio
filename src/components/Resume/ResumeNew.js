import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Dossier de veille technologique.pdf";
import competence from "../../Assets/Tableau compétence Florian VAUTHIER.pdf";
import preuve from "../../Assets/dossier de preuve.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
         <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "15px" }}
          >
            <AiOutlineDownload />
            &nbsp;Veille technologique
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={competence}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "15px" }}
          >
            <AiOutlineDownload />
            &nbsp;Tableau de compétences
          </Button>
        </Row> 
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={preuve}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "15px"}}
          >
            <AiOutlineDownload />
            &nbsp;Dossier de preuve
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
