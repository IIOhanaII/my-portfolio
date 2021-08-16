import React from "react";
import "./Stack.css";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContext } from "react-icons";
import { SiTypescript } from "react-icons/si";

export const Stack = () => {
  return (
    <div className="component">
      <div className="smaller-component smaller-component--stack d-flex flex-column justify-content-center">
        <h3 className="text-light text-center mb-5">Ma Stack</h3>
        <Container className="stacks-container">
          <Row>
            <Col md={{ size: "2", offset: 2 }} className="stack-container">
              <FontAwesomeIcon
                icon={["fab", "html5"]}
                size="6x"
                color="#fb8500"
                className="stack-icon"
              />
            </Col>
            <Col md="2" className="stack-container">
              <FontAwesomeIcon
                icon={["fab", "css3"]}
                size="6x"
                color="#fb8500"
                className="stack-icon"
              />
            </Col>
            <Col md="2" className="stack-container me-3 me-lg-0">
              <FontAwesomeIcon
                icon={["fab", "sass"]}
                size="6x"
                color="#fb8500"
                className="stack-icon"
              />
            </Col>
            <Col md="3" className="stack-container">
              <FontAwesomeIcon
                icon={["fab", "bootstrap"]}
                size="6x"
                color="#fb8500"
                className="stack-icon"
              />
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: "2", offset: 3 }}
              className="stack-container ps-md-0"
            >
              <FontAwesomeIcon
                icon={["fab", "js"]}
                size="6x"
                color="#fb8500"
                className="stack-icon"
              />
            </Col>
            <Col md="2" className="stack-container align-self-end">
              <IconContext.Provider
                value={{
                  color: "#fb8500",
                  size: "5.25rem",
                  style: { verticalAlign: "-0.125rem" },
                  className: "stack-icon--ts",
                }}
              >
                <SiTypescript />
              </IconContext.Provider>
            </Col>
            <Col md="4" className="stack-container stack-icon--react">
              <FontAwesomeIcon
                icon={["fab", "react"]}
                size="6x"
                color="#fb8500"
                className="stack-icon"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
