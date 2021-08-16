import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import { ProjectButton } from "./ProjectButton";
import { ProjectModal } from "./ProjectModal";
import {
  STOCK_TRACKER_PROJECT_DETAILS as stockTrackerProject,
  MY_TIMERS_PROJECT_DETAILS as myTimersProject,
  MY_PORTFOLIO_PROJECT_DETAILS as myPortfolioProject,
} from "../constants/index";
import stockTrackerDemoWebM from "../assets/stock-tracker-demo.webm";
import myTimersDemoWebM from "../assets/my-timers-demo.webm";
import myPortfolioDemoWebM from "../assets/my-portfolio-demo.webm";
import stockTrackerDemoMp4 from "../assets/stock-tracker-demo.mp4";
import myTimersDemoMp4 from "../assets/my-timers-demo.mp4";
import myPortfolioDemoMp4 from "../assets/my-portfolio-demo.mp4";
var he = require("he");

export const Portfolio = ({ handleScrollUp, handleScrollDown }) => {
  const [projectModal, setProjectModal] = useState(false);
  const [projectModalVideoWebM, setProjectModalVideoWebM] = useState(null);
  const [projectModalVideoMp4, setProjectModalVideoMp4] = useState(null);
  const [projectModalDetails, setProjectModalDetails] = useState({
    title: "",
    stacks: "",
    description: "",
    sourceCodeLink: "",
    liveLink: "",
  });

  const toggleModal = (
    projectModalVideoWebM,
    projectModalVideoMp4,
    projectModalDetails
  ) => {
    setProjectModal(!projectModal);
    if (!projectModal) {
      setProjectModalVideoWebM(projectModalVideoWebM);
      setProjectModalVideoMp4(projectModalVideoMp4);
      setProjectModalDetails((prevState) => ({
        ...prevState,
        title: projectModalDetails.title,
        stacks: he.decode(projectModalDetails.stacks),
        description: projectModalDetails.description,
        sourceCodeLink: projectModalDetails.sourceCodeLink,
        liveLink: projectModalDetails.liveLink,
      }));
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
              <ProjectButton
                projectIconName={"chart-line"}
                toggleModal={toggleModal}
                projectVideoWebM={stockTrackerDemoWebM}
                projectVideoMp4={stockTrackerDemoMp4}
                projectDetails={stockTrackerProject}
              />
              <ProjectModal
                isModalOpen={projectModal}
                toggle={toggleModal}
                modalVideoWebM={projectModalVideoWebM}
                modalVideoMp4={projectModalVideoMp4}
                modalDetails={projectModalDetails}
              />
            </Col>
            <Col
              sm={{ size: "1", offset: 1 }}
              className="project-container mb-5 mb-sm-0"
            >
              <ProjectButton
                projectIconName={"hourglass-half"}
                toggleModal={toggleModal}
                projectVideoWebM={myTimersDemoWebM}
                projectVideoMp4={myTimersDemoMp4}
                projectDetails={myTimersProject}
              />
            </Col>
            <Col
              sm={{ size: "1", offset: 1 }}
              className="project-container mb-5 mb-sm-0"
            >
              <ProjectButton
                projectIconName={"briefcase"}
                toggleModal={toggleModal}
                projectVideoWebM={myPortfolioDemoWebM}
                projectVideoMp4={myPortfolioDemoMp4}
                projectDetails={myPortfolioProject}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
