import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioModal } from "./PortfolioModal";
import stockTrackerDemoWebM from "../assets/stock-tracker-demo.webm";
import myTimersDemoWebM from "../assets/my-timers-demo.webm";
import myPortfolioDemoWebM from "../assets/my-portfolio-demo.webm";
import stockTrackerDemoMp4 from "../assets/stock-tracker-demo.mp4";
import myTimersDemoMp4 from "../assets/my-timers-demo.mp4";
import myPortfolioDemoMp4 from "../assets/my-portfolio-demo.mp4";
var he = require("he");

export const Portfolio = ({ handleScrollUp, handleScrollDown }) => {
  const [modal, setModal] = useState(false);
  const [modalAppVideoWebM, setModalAppVideoWebM] = useState(null);
  const [modalAppVideoMp4, setModalAppVideoMp4] = useState(null);
  const [modalAppTitle, setModalAppTitle] = useState("");
  const [modalAppStack, setModalAppStack] = useState("");
  const [modalAppDescription, setModalAppDescription] = useState("");
  const [modalAppSourceCodeLink, setModalAppSourceCodeLink] = useState("");
  const [modalAppLiveLink, setModalAppLiveLink] = useState("");

  const toggleModal = (
    appVideoWebM,
    appVideoMp4,
    appTitle,
    appStack,
    appDescription,
    appSourceCodeLink,
    appLiveLink
  ) => {
    setModal(!modal);
    if (!modal) {
      setModalAppVideoWebM(appVideoWebM);
      setModalAppVideoMp4(appVideoMp4);
      setModalAppTitle(appTitle);
      setModalAppStack(appStack);
      setModalAppDescription(appDescription);
      setModalAppSourceCodeLink(appSourceCodeLink);
      setModalAppLiveLink(appLiveLink);
    }
    handleScrollUp();
    handleScrollDown();
  };

  return (
    <div className="component">
      <div className="smaller-component smaller-component--portfolio d-flex flex-column justify-content-center">
        <h3 className="text-light text-center mb-5">Mes Projets</h3>
        <Container className="themed-container" fluid={true}>
          <Row className="justify-content-center flex-column flex-sm-row align-items-center">
            <Col sm="1" className="project-container mb-5 mb-sm-0 p-0">
              {/* Render this on Desktop */}
              {window.screen.width > 1024 && (
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={["fas", "chart-line"]}
                    size="3x"
                    color="#219ebc"
                    className="project-container__elements project-container__elements--icon"
                  />{" "}
                  <div
                    className="project-container__elements project-container__elements--overlay"
                    style={{ backgroundColor: "#219ebc" }}
                  >
                    <Button
                      size="md"
                      style={{ backgroundColor: "#219ebc" }}
                      className="project-container__elements project-container__elements--button"
                      onClick={() =>
                        toggleModal(
                          stockTrackerDemoWebM,
                          stockTrackerDemoMp4,
                          "Stock Tracker",
                          he.decode(
                            "React &bull; web API &bull; Autocomplétion &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                          ),
                          "Application qui restitue, dans un intervalle de temps défini, le cours de l'action américaine souhaité par l'utilisateur",
                          "https://github.com/IIOhanaII/stock-tracker",
                          "https://iiohanaii.github.io/stock-tracker/"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={["fas", "plus"]}
                        size="3x"
                        color="#fff"
                        className="project-container__elements project-container__elements--icon"
                      />
                    </Button>
                    <PortfolioModal
                      isModalOpen={modal}
                      toggle={toggleModal}
                      modalVideoWebM={modalAppVideoWebM}
                      modalVideoMp4={modalAppVideoMp4}
                      modalTitle={modalAppTitle}
                      modalStack={modalAppStack}
                      modalDescription={modalAppDescription}
                      modalSourceCodeLink={modalAppSourceCodeLink}
                      modalLiveLink={modalAppLiveLink}
                    />
                  </div>
                </React.Fragment>
              )}
              {/* Render this on Mobile */}
              {window.screen.width <= 1024 && (
                <React.Fragment>
                  <Button
                    color="link"
                    style={{ width: "100%", height: "100%" }}
                    className="p-0"
                    onClick={() =>
                      toggleModal(
                        stockTrackerDemoWebM,
                        stockTrackerDemoMp4,
                        "Stock Tracker",
                        he.decode(
                          "React &bull; web API &bull; Autocomplétion &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Application qui restitue, dans un intervalle de temps défini, le cours de l'action américaine souhaité par l'utilisateur",
                        "https://github.com/IIOhanaII/stock-tracker",
                        "https://iiohanaii.github.io/stock-tracker/"
                      )
                    }
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "chart-line"]}
                      size="3x"
                      color="#219ebc"
                      className="project-container__elements project-container__elements--icon"
                    />
                  </Button>
                  <PortfolioModal
                    isModalOpen={modal}
                    toggle={toggleModal}
                    modalVideoWebM={modalAppVideoWebM}
                    modalVideoMp4={modalAppVideoMp4}
                    modalTitle={modalAppTitle}
                    modalStack={modalAppStack}
                    modalDescription={modalAppDescription}
                    modalSourceCodeLink={modalAppSourceCodeLink}
                    modalLiveLink={modalAppLiveLink}
                  />
                </React.Fragment>
              )}
            </Col>
            <Col
              sm={{ size: "1", offset: 1 }}
              className="project-container mb-5 mb-sm-0"
            >
              {window.screen.width > 1024 && (
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={["fas", "hourglass-half"]}
                    size="3x"
                    color="#219ebc"
                    className="project-container__elements project-container__elements--icon"
                  />
                  <div className="project-container__elements project-container__elements--overlay">
                    <Button
                      size="md"
                      style={{ backgroundColor: "#219ebc" }}
                      className="project-container__elements project-container__elements--button"
                      onClick={() =>
                        toggleModal(
                          myTimersDemoWebM,
                          myTimersDemoMp4,
                          "My Timers",
                          he.decode(
                            "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                          ),
                          "Application qui permet de gérer plusieurs minuteries",
                          "https://github.com/IIOhanaII/my-timers",
                          "https://iiohanaii.github.io/my-timers/"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={["fas", "plus"]}
                        size="3x"
                        color="#fff"
                        className="project-container__elements project-container__elements--icon"
                      />
                    </Button>
                  </div>
                </React.Fragment>
              )}
              {window.screen.width <= 1024 && (
                <React.Fragment>
                  <Button
                    color="link"
                    style={{ width: "100%", height: "100%" }}
                    className="p-0"
                    onClick={() =>
                      toggleModal(
                        myTimersDemoWebM,
                        myTimersDemoMp4,
                        "My Timers",
                        he.decode(
                          "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Application qui permet de gérer plusieurs minuteries",
                        "https://github.com/IIOhanaII/my-timers",
                        "https://iiohanaii.github.io/my-timers/"
                      )
                    }
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "hourglass-half"]}
                      size="3x"
                      color="#219ebc"
                      className="project-container__elements project-container__elements--icon"
                    />
                  </Button>
                </React.Fragment>
              )}
            </Col>

            <Col
              sm={{ size: "1", offset: 1 }}
              className="project-container mb-5 mb-sm-0"
            >
              {window.screen.width > 1024 && (
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={["fas", "briefcase"]}
                    size="3x"
                    color="#219ebc"
                    className="project-container__elements project-container__elements--icon"
                  />
                  <div className="project-container__elements project-container__elements--overlay">
                    <Button
                      size="md"
                      style={{ backgroundColor: "#219ebc" }}
                      className="project-container__elements project-container__elements--button"
                      onClick={() =>
                        toggleModal(
                          myPortfolioDemoWebM,
                          myPortfolioDemoMp4,
                          "My Portfolio",
                          he.decode(
                            "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Formik &bull; Git &bull; Github &bull; Github Pages"
                          ),
                          "Il s'agit du site sur lequel vous vous trouvez actuellement, ce site sert notamment à vous présenter mes réalisations",
                          "https://github.com/IIOhanaII/my-portfolio",
                          ""
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={["fas", "plus"]}
                        size="3x"
                        color="#fff"
                        className="project-container__elements project-container__elements--icon"
                      />
                    </Button>
                  </div>
                </React.Fragment>
              )}
              {window.screen.width <= 1024 && (
                <React.Fragment>
                  <Button
                    color="link"
                    style={{ width: "100%", height: "100%" }}
                    className="p-0"
                    onClick={() =>
                      toggleModal(
                        myPortfolioDemoWebM,
                        myPortfolioDemoMp4,
                        "My Portfolio",
                        he.decode(
                          "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Formik &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Il s'agit du site sur lequel vous vous trouvez actuellement, ce site sert notamment à vous présenter mes réalisations",
                        "https://github.com/IIOhanaII/my-portfolio",
                        ""
                      )
                    }
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "briefcase"]}
                      size="3x"
                      color="#219ebc"
                      className="project-container__elements project-container__elements--icon"
                    />
                  </Button>
                </React.Fragment>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
