import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../assets/CV-Arthur-Barbey.pdf";

export const AboutComponent = () => {
  return (
    <div
      className="white-edges d-flex flex-column justify-content-center text-light text-center"
      style={{ backgroundColor: "#023047" }}
    >
      <h3 className="mb-5" style={{ fontFamily: "Roboto" }}>
        À propos de moi
      </h3>
      <Container>
        <Row>
          <Col md={{ size: "10", offset: 1 }}>
            <p className="about-description-font-size">
              Suite à 4 années en tant que Business Analyst spécialisé en
              systèmes d’informations, j’élargis le champ de mes compétences
              avec le développement front-end.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: "10", offset: 1 }}>
            <p className="about-description-font-size">
              Ce sont ces expériences en gestion d’applications financières
              internationales qui auront fait grandir en moi l’envie de bâtir
              des applications web.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: "10", offset: 1 }}>
            <p className="about-description-font-size">
              Je souhaite construire en équipe des applications ayant un impact
              positif et direct sur l’expérience de ses utilisateurs.
            </p>
          </Col>
        </Row>
      </Container>
      <a
        href={CV}
        download="CV-Arthur-Barbey.pdf"
        target="_blank"
        rel="noreferrer"
        className="d-inline-block mt-5"
      >
        <Button style={{ backgroundColor: "#fb8500" }}>
          <FontAwesomeIcon
            icon={["fas", "download"]}
            size="1x"
            color="#fff"
            className="me-2"
          />
          Mon CV
        </Button>
      </a>
    </div>
  );
};
