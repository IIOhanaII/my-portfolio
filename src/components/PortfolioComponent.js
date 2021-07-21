import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioModal } from "../components/PortfolioModalComponent";
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
      <div className="white-edges bg-primary d-flex flex-column justify-content-center">
        <h1
          className="text-light text-center mb-5"
          style={{ fontFamily: "Roboto" }}
        >
          Mes Projets
        </h1>
        <Container>
          <Row>
            <Col md={{ size: "2", offset: 2 }} className="portfolio-container">
              <FontAwesomeIcon
                icon={["fas", "chart-line"]}
                size="6x"
                color="#fd7e14"
                className="icon-position"
              />
              <div className="overlay" style={{ backgroundColor: "#fd7e14" }}>
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
                <PortfolioModal
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
            </Col>
            <Col md={{ size: "2", offset: 1 }} className="portfolio-container">
              <FontAwesomeIcon
                icon={["fas", "hourglass-half"]}
                size="6x"
                color="#ffc107"
                className="icon-position"
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
            </Col>
            <Col md={{ size: "2", offset: 1 }} className="portfolio-container">
              <FontAwesomeIcon
                icon={["fas", "briefcase"]}
                size="6x"
                color="#dc3545"
                className="icon-position"
              />
              <div className="overlay bg-danger">
                <Button
                  color="primary"
                  size="md"
                  style={{ fontSize: "1rem" }}
                  className="portfolio-button"
                >
                  En savoir plus
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
