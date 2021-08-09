import React from "react";
import { Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../assets/CV-Arthur-Barbey.pdf";

export const AboutComponent = () => {
  return (
    <div className="white-edges d-flex flex-column justify-content-center text-light text-center about">
      <h1 className="mb-5">A propos de moi</h1>
      <Container>
        <p>
          Suite à 4 années en tant que Business Analyst spécialisé en systèmes
          d’informations, j’élargis le champ de mes compétences avec le
          développement front-end.
        </p>
        <p>
          Ce sont ces expériences en gestion d’applications financières
          internationales qui auront fait grandir en moi l’envie de bâtir des
          applications web.
        </p>
        <p>
          Je souhaite construire en équipe des applications ayant un impact
          positif et direct sur l’expérience de ses utilisateurs.
        </p>
        <a
          href={CV}
          download="CV-Arthur-Barbey.pdf"
          target="_blank"
          rel="noreferrer"
          className="d-inline-block mt-5"
        >
          <Button color="success">
            <FontAwesomeIcon
              icon={["fas", "download"]}
              size="1x"
              color="#fff"
              className="me-2"
            />
            Mon CV
          </Button>
        </a>
      </Container>
    </div>
  );
};
