import React from "react";
import "./ProjectModal.css";
import { Button, Modal, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let classNames = require("classnames");

export const ProjectModal = ({
  isModalOpen,
  toggle,
  modalVideoWebM,
  modalVideoMp4,
  modalDetails,
}) => {
  // Adapt some of the modal classes in function of the project which has been clicked within the portfolio
  let modalClass = classNames("p-0 d-flex flex-column", {
    "flex-xl-row project-modal--stock": modalDetails.title === "Stock Tracker",
    "flex-xl-row project-modal--timers": modalDetails.title === "My Timers",
    "project-modal--portfolio": modalDetails.title === "My Portfolio",
  });
  let modalDetailsClass = classNames(
    "d-flex flex-column justify-content-evenly p-3",
    {
      "project-description p-xl-5": modalDetails.title !== "My Portfolio",
      "project-description--portfolio": modalDetails.title === "My Portfolio",
    }
  );

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} centered scrollable>
      <ModalBody className={modalClass}>
        <video
          autoPlay
          muted
          loop
          className={
            modalDetails.title === "My Portfolio"
              ? "project-video--portfolio"
              : "project-video"
          }
        >
          <source src={modalVideoWebM} type="video/webm" />
          <source src={modalVideoMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className={modalDetailsClass}>
          <h2 className="text-primary">{modalDetails.title}</h2>
          <h6 className="text-secondary">{modalDetails.stacks}</h6>
          <p>{modalDetails.description}</p>
          <div className="d-flex justify-content-evenly">
            <a
              href={modalDetails.sourceCodeLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button color="primary" size="md" className="d-inline">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  color="#fff"
                  size="1x"
                />
                {"  "} Code source
              </Button>
            </a>
            {modalDetails.title !== "My Portfolio" && (
              <a href={modalDetails.liveLink} target="_blank" rel="noreferrer">
                <Button color="primary" size="md">
                  <FontAwesomeIcon
                    icon={["fas", "broadcast-tower"]}
                    color="#fff"
                    size="1x"
                  />
                  {"  "} Live
                </Button>
              </a>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
