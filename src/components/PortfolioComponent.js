import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioModal } from "./PortfolioModalComponent";
import stockTrackerDemoWebM from "../assets/stock-tracker-demo.webm";
import myTimersDemoWebM from "../assets/my-timers-demo.webm";
import myPortfolioDemoWebM from "../assets/my-portfolio-demo.webm";
import stockTrackerDemoMp4 from "../assets/stock-tracker-demo.mp4";
import myTimersDemoMp4 from "../assets/my-timers-demo.mp4";
import myPortfolioDemoMp4 from "../assets/my-portfolio-demo.mp4";
var he = require("he");

export const PortfolioComponent = ({ handleScrollUp, handleScrollDown }) => {
  const [modal, setModal] = useState(false);
  const [modalClasses, setModalClasses] = useState("");
  const [modalAppVideoWebM, setModalAppVideoWebM] = useState(null);
  const [modalAppVideoMp4, setModalAppVideoMp4] = useState(null);
  const [modalAppTitle, setModalAppTitle] = useState("");
  const [modalAppStack, setModalAppStack] = useState("");
  const [modalAppDescription, setModalAppDescription] = useState("");
  const [modalAppDescriptionClasses, setModalAppDescriptionClasses] =
    useState("");
  const [modalAppSourceCodeLink, setModalAppSourceCodeLink] = useState("");
  const [modalAppLiveLink, setModalAppLiveLink] = useState("");

  const toggleModal = (
    classes,
    appVideoWebM,
    appVideoMp4,
    appTitle,
    appStack,
    appDescription,
    appDescriptionClasses,
    appSourceCodeLink,
    appLiveLink
  ) => {
    setModal(!modal);
    if (!modal) {
      setModalClasses(classes);
      setModalAppVideoWebM(appVideoWebM);
      setModalAppVideoMp4(appVideoMp4);
      setModalAppTitle(appTitle);
      setModalAppStack(appStack);
      setModalAppDescription(appDescription);
      setModalAppDescriptionClasses(appDescriptionClasses);
      setModalAppSourceCodeLink(appSourceCodeLink);
      setModalAppLiveLink(appLiveLink);
    }
    handleScrollUp();
    handleScrollDown();
  };

  return (
    <div className="white-edges d-flex flex-column justify-content-center portfolio">
      <h3 className="text-light text-center mb-5">Mes Projets</h3>
      <Container className="themed-container" fluid={true}>
        <Row className="justify-content-center flex-column flex-sm-row align-items-center">
          <Col sm="1" className="portfolio-container mb-5 mb-sm-0 p-0">
            {/* Render this on Desktop */}
            {window.screen.width > 1024 && (
              <React.Fragment>
                <FontAwesomeIcon
                  icon={["fas", "chart-line"]}
                  size="3x"
                  color="#219ebc"
                  className="icon-position portfolio-icons-resizing"
                />{" "}
                <div className="overlay" style={{ backgroundColor: "#219ebc" }}>
                  <Button
                    size="md"
                    style={{ backgroundColor: "#219ebc" }}
                    className="portfolio-button"
                    onClick={() =>
                      toggleModal(
                        "p-0 d-flex flex-column flex-xl-row stock-modal-height",
                        stockTrackerDemoWebM,
                        stockTrackerDemoMp4,
                        "Stock Tracker",
                        he.decode(
                          "React &bull; web API &bull; Autocomplétion &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Application qui restitue, dans un intervalle de temps défini, le cours de l'action américaine souhaité par l'utilisateur",
                        "d-flex flex-column justify-content-evenly p-3 description-width p-xl-5",
                        "https://github.com/IIOhanaII/stock-tracker",
                        "https://iiohanaii.github.io/stock-tracker/"
                      )
                    }
                  >
                    <FontAwesomeIcon
                      icon={["fas", "plus"]}
                      size="3x"
                      color="#fff"
                      className="icon-position portfolio-icons-resizing"
                    />
                  </Button>
                  <PortfolioModal
                    isModalOpen={modal}
                    toggle={toggleModal}
                    modalClasses={modalClasses}
                    modalVideoWebM={modalAppVideoWebM}
                    modalVideoMp4={modalAppVideoMp4}
                    modalTitle={modalAppTitle}
                    modalStack={modalAppStack}
                    modalDescription={modalAppDescription}
                    modalDescriptionClasses={modalAppDescriptionClasses}
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
                      "p-0 d-flex flex-column flex-xl-row stock-modal-height",
                      stockTrackerDemoWebM,
                      stockTrackerDemoMp4,
                      "Stock Tracker",
                      he.decode(
                        "React &bull; web API &bull; Autocomplétion &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                      ),
                      "Application qui restitue, dans un intervalle de temps défini, le cours de l'action américaine souhaité par l'utilisateur",
                      "d-flex flex-column justify-content-evenly p-3 description-width p-xl-5",
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
                    className="icon-position portfolio-icons-resizing"
                  />
                </Button>
                <PortfolioModal
                  isModalOpen={modal}
                  toggle={toggleModal}
                  modalClasses={modalClasses}
                  modalVideoWebM={modalAppVideoWebM}
                  modalVideoMp4={modalAppVideoMp4}
                  modalTitle={modalAppTitle}
                  modalStack={modalAppStack}
                  modalDescription={modalAppDescription}
                  modalDescriptionClasses={modalAppDescriptionClasses}
                  modalSourceCodeLink={modalAppSourceCodeLink}
                  modalLiveLink={modalAppLiveLink}
                />
              </React.Fragment>
            )}
          </Col>
          <Col
            sm={{ size: "1", offset: 1 }}
            className="portfolio-container mb-5 mb-sm-0"
          >
            {window.screen.width > 1024 && (
              <React.Fragment>
                <FontAwesomeIcon
                  icon={["fas", "hourglass-half"]}
                  size="3x"
                  color="#219ebc"
                  className="icon-position portfolio-icons-resizing"
                />
                <div className="overlay">
                  <Button
                    size="md"
                    style={{ backgroundColor: "#219ebc" }}
                    className="portfolio-button"
                    onClick={() =>
                      toggleModal(
                        "p-0 d-flex flex-column flex-xl-row timers-modal-height",
                        myTimersDemoWebM,
                        myTimersDemoMp4,
                        "My Timers",
                        he.decode(
                          "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Application qui permet de gérer plusieurs minuteries",
                        "d-flex flex-column justify-content-evenly p-3 description-width p-xl-5",
                        "https://github.com/IIOhanaII/my-timers",
                        "https://iiohanaii.github.io/my-timers/"
                      )
                    }
                  >
                    <FontAwesomeIcon
                      icon={["fas", "plus"]}
                      size="3x"
                      color="#fff"
                      className="icon-position portfolio-icons-resizing"
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
                      "p-0 d-flex flex-column flex-xl-row timers-modal-height",
                      myTimersDemoWebM,
                      myTimersDemoMp4,
                      "My Timers",
                      he.decode(
                        "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                      ),
                      "Application qui permet de gérer plusieurs minuteries",
                      "d-flex flex-column justify-content-evenly p-3 description-width p-xl-5",
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
                    className="icon-position portfolio-icons-resizing"
                  />
                </Button>
              </React.Fragment>
            )}
          </Col>

          <Col
            sm={{ size: "1", offset: 1 }}
            className="portfolio-container mb-5 mb-sm-0"
          >
            {window.screen.width > 1024 && (
              <React.Fragment>
                <FontAwesomeIcon
                  icon={["fas", "briefcase"]}
                  size="3x"
                  color="#219ebc"
                  className="icon-position portfolio-icons-resizing"
                />
                <div className="overlay">
                  <Button
                    size="md"
                    style={{ backgroundColor: "#219ebc" }}
                    className="portfolio-button"
                    onClick={() =>
                      toggleModal(
                        "p-0 d-flex flex-column portfolio-modal-flex portfolio-modal-height",
                        myPortfolioDemoWebM,
                        myPortfolioDemoMp4,
                        "My Portfolio",
                        he.decode(
                          "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Formik &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Il s'agit du site sur lequel vous vous trouvez actuellement, ce site sert notamment à vous présenter mes réalisations",
                        "d-flex flex-column justify-content-evenly p-3 portfolio-description-width",
                        "https://github.com/IIOhanaII/my-portfolio",
                        ""
                      )
                    }
                  >
                    <FontAwesomeIcon
                      icon={["fas", "plus"]}
                      size="3x"
                      color="#fff"
                      className="icon-position portfolio-icons-resizing"
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
                      "p-0 d-flex flex-column portfolio-modal-flex portfolio-modal-height",
                      myPortfolioDemoWebM,
                      myPortfolioDemoMp4,
                      "My Portfolio",
                      he.decode(
                        "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Formik &bull; Git &bull; Github &bull; Github Pages"
                      ),
                      "Il s'agit du site sur lequel vous vous trouvez actuellement, ce site sert notamment à vous présenter mes réalisations",
                      "d-flex flex-column justify-content-evenly p-3 portfolio-description-width",
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
                    className="icon-position portfolio-icons-resizing"
                  />
                </Button>
              </React.Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
