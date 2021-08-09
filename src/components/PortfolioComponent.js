import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DesktopPortfolioModal } from "./DesktopPortfolioModalComponent";
import { MobilePortfolioModal } from "./MobilePortfolioModalComponent";
import stockTrackerDemoWebM from "../assets/stock-tracker-demo.webm";
import myTimersDemoWebM from "../assets/my-timers-demo.webm";
import stockTrackerDemoMp4 from "../assets/stock-tracker-demo.mp4";
import myTimersDemoMp4 from "../assets/my-timers-demo.mp4";
var he = require("he");

export class PortfolioComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalAppVideo: null,
      modalAppTitle: "",
      modalAppStack: "",
      modalAppDescription: "",
      modalAppSourceCodeLink: "",
      modalAppLiveLink: "",
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(
    appVideoWebM,
    appVideoMp4,
    appTitle,
    appStack,
    appDescription,
    appSourceCodeLink,
    appLiveLink
  ) {
    this.setState({
      modal: !this.state.modal,
      modalAppVideoWebM: appVideoWebM,
      modalAppVideoMp4: appVideoMp4,
      modalAppTitle: appTitle,
      modalAppStack: appStack,
      modalAppDescription: appDescription,
      modalAppSourceCodeLink: appSourceCodeLink,
      modalAppLiveLink: appLiveLink,
    });
  }

  render() {
    return (
      <div className="white-edges d-flex flex-column justify-content-center portfolio">
        <h1
          className="text-light text-center mb-5"
          style={{ fontFamily: "Roboto" }}
        >
          Mes Projets
        </h1>
        <Container className="themed-container" fluid={true}>
          <Row className="justify-content-center flex-column flex-sm-row">
            <Col
              xs={{ size: "4", offset: 4 }}
              sm={{ size: "2", offset: 0 }}
              className="portfolio-container mb-5 mb-sm-0"
            >
              {/* Render this on Desktop */}
              {window.screen.width > 1024 && (
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={["fas", "chart-line"]}
                    size="6x"
                    color="#fd7e14"
                    className="icon-position portfolio-icons-resizing"
                  />{" "}
                  <div
                    className="overlay"
                    style={{ backgroundColor: "#fd7e14" }}
                  >
                    <Button
                      color="primary"
                      size="md"
                      style={{ fontSize: "1rem" }}
                      className="portfolio-button"
                      onClick={(e) =>
                        this.toggleModal(
                          stockTrackerDemoWebM,
                          stockTrackerDemoMp4,
                          "Stock Tracker",
                          he.decode(
                            "React &bull; web API &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                          ),
                          "Application qui restitue, dans un intervalle de temps défini, le cours de l'action américaine souhaité par l'utilisateur",
                          "https://github.com/IIOhanaII/stock-tracker",
                          "https://iiohanaii.github.io/stock-tracker/"
                        )
                      }
                    >
                      En savoir plus
                    </Button>
                    <DesktopPortfolioModal
                      isModalOpen={this.state.modal}
                      toggle={this.toggleModal}
                      modalVideoWebM={this.state.modalAppVideoWebM}
                      modalVideoMp4={this.state.modalAppVideoMp4}
                      modalTitle={this.state.modalAppTitle}
                      modalStack={this.state.modalAppStack}
                      modalDescription={this.state.modalAppDescription}
                      modalSourceCodeLink={this.state.modalAppSourceCodeLink}
                      modalLiveLink={this.state.modalAppLiveLink}
                    />
                  </div>
                </React.Fragment>
              )}
              {/* Render this on Mobile */}
              {window.screen.width <= 1024 && (
                <React.Fragment>
                  <Button
                    color="link"
                    style={{ width: "100%", height: "100%", padding: 0 }}
                    onClick={(e) =>
                      this.toggleModal(
                        stockTrackerDemoWebM,
                        stockTrackerDemoMp4,
                        "Stock Tracker",
                        he.decode(
                          "React &bull; web API &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
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
                      size="6x"
                      color="#fd7e14"
                      className="icon-position portfolio-icons-resizing"
                    />
                  </Button>
                  <MobilePortfolioModal
                    isModalOpen={this.state.modal}
                    toggle={this.toggleModal}
                    modalVideoWebM={this.state.modalAppVideoWebM}
                    modalVideoMp4={this.state.modalAppVideoMp4}
                    modalTitle={this.state.modalAppTitle}
                    modalStack={this.state.modalAppStack}
                    modalDescription={this.state.modalAppDescription}
                    modalSourceCodeLink={this.state.modalAppSourceCodeLink}
                    modalLiveLink={this.state.modalAppLiveLink}
                  />
                </React.Fragment>
              )}
            </Col>
            <Col
              xs={{ size: "4", offset: 4 }}
              sm={{ size: "2", offset: 1 }}
              className="portfolio-container mb-5 mb-sm-0"
            >
              {window.screen.width > 1024 && (
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={["fas", "hourglass-half"]}
                    size="6x"
                    color="#ffc107"
                    className="icon-position portfolio-icons-resizing"
                  />
                  <div className="overlay bg-warning">
                    <Button
                      color="primary"
                      size="md"
                      style={{ fontSize: "1rem" }}
                      className="portfolio-button"
                      onClick={(e) =>
                        this.toggleModal(
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
                      En savoir plus
                    </Button>
                  </div>
                </React.Fragment>
              )}
              {window.screen.width <= 1024 && (
                <React.Fragment>
                  <Button
                    color="link"
                    style={{ width: "100%", height: "100%", padding: 0 }}
                    onClick={(e) =>
                      this.toggleModal(
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
                      size="6x"
                      color="#ffc107"
                      className="icon-position portfolio-icons-resizing"
                    />
                  </Button>
                </React.Fragment>
              )}
            </Col>
            <Col
              xs={{ size: "4", offset: 4 }}
              sm={{ size: "2", offset: 1 }}
              className="portfolio-container mb-5 mb-sm-0"
            >
              {window.screen.width > 1024 && (
                <React.Fragment>
                  <FontAwesomeIcon
                    icon={["fas", "briefcase"]}
                    size="6x"
                    color="#dc3545"
                    className="icon-position portfolio-icons-resizing"
                  />
                  <div className="overlay bg-danger">
                    <Button
                      color="primary"
                      size="md"
                      style={{ fontSize: "1rem" }}
                      className="portfolio-button"
                      onClick={(e) =>
                        this.toggleModal(
                          myTimersDemoWebM,
                          myTimersDemoMp4,
                          "My Portfolio",
                          he.decode(
                            "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                          ),
                          "Eh oui, vous l'aurez reconnu, il s'agit du site sur lequel vous vous trouvez actuellement et qui sert notamment à vous présenter mes réalisations",
                          "https://github.com/IIOhanaII/my-portfolio",
                          "https://iiohanaii.github.io/my-timers/"
                        )
                      }
                    >
                      En savoir plus
                    </Button>
                  </div>
                </React.Fragment>
              )}
              {window.screen.width <= 1024 && (
                <React.Fragment>
                  <Button
                    color="link"
                    style={{ width: "100%", height: "100%", padding: 0 }}
                    onClick={(e) =>
                      this.toggleModal(
                        myTimersDemoWebM,
                        myTimersDemoMp4,
                        "My Portfolio",
                        he.decode(
                          "React &bull; Reactstrap &bull; Bootstrap &bull; CSS &bull; Git &bull; Github &bull; Github Pages"
                        ),
                        "Eh oui, vous l'aurez reconnu, il s'agit du site sur lequel vous vous trouvez actuellement et qui sert notamment à vous présenter mes réalisations",
                        "https://github.com/IIOhanaII/my-portfolio",
                        "https://iiohanaii.github.io/my-timers/"
                      )
                    }
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "briefcase"]}
                      size="6x"
                      color="#dc3545"
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
  }
}
