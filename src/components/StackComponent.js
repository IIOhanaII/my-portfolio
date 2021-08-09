import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContext } from "react-icons";
import { SiTypescript } from "react-icons/si";

export const StackComponent = () => {
  return (
    <div className="white-edges d-flex flex-column justify-content-center stack">
      <h1 className="text-light text-center mb-5">Ma Stack</h1>
      <Container className="stacks-vertical-alignment">
        <Row>
          <Col md={{ size: "2", offset: 2 }}>
            <FontAwesomeIcon
              icon={["fab", "html5"]}
              size="6x"
              color="#DD4B25"
              className="stack-icons-resizing"
            />
          </Col>
          <Col md="2">
            <FontAwesomeIcon
              icon={["fab", "css3"]}
              size="6x"
              color="#2194F0"
              className="stack-icons-resizing"
            />
          </Col>
          <Col md="2" className="me-3 me-lg-0">
            <FontAwesomeIcon
              icon={["fab", "sass"]}
              size="6x"
              color="#C96195"
              className="stack-icons-resizing"
            />
          </Col>
          <Col md="3">
            <FontAwesomeIcon
              icon={["fab", "bootstrap"]}
              size="6x"
              color="#8B11F4"
              className="stack-icons-resizing"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: "2", offset: 3 }} className="ps-md-0">
            <FontAwesomeIcon
              icon={["fab", "js"]}
              size="6x"
              color="#EFD81D"
              className="stack-icons-resizing"
            />
          </Col>
          <Col md="2" className="align-self-end">
            <IconContext.Provider
              value={{
                color: "#2F74C0",
                size: "84px",
                style: { verticalAlign: "-0.125em" },
                className: "stack-icons-resizing-ts",
              }}
            >
              <SiTypescript />
            </IconContext.Provider>
          </Col>
          <Col md="4" className="react-icon-alignment">
            <FontAwesomeIcon
              icon={["fab", "react"]}
              size="6x"
              color="#5ED3F3"
              className="stack-icons-resizing"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
