import React from "react";
import "./PortfolioModal.css";
import { Button, Modal, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let classNames = require("classnames");

export const PortfolioModal = ({
  isModalOpen,
  toggle,
  modalVideoWebM,
  modalVideoMp4,
  modalTitle,
  modalStack,
  modalDescription,
  modalSourceCodeLink,
  modalLiveLink,
}) => {
  // Adapt some of the modal classes in function of the project which has been clicked within the portfolio
  let modalClass = classNames("p-0 d-flex flex-column", {
    "flex-xl-row modal-height--stock": modalTitle === "Stock Tracker",
    "flex-xl-row modal-height--timers": modalTitle === "My Timers",
    "modal-flex--portfolio modal-height--portfolio":
      modalTitle === "My Portfolio",
  });
  let modalDescriptionClass = classNames(
    "d-flex flex-column justify-content-evenly p-3",
    {
      "description-width p-xl-5": modalTitle !== "My Portfolio",
      "description-width--portfolio": modalTitle === "My Portfolio",
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
            modalTitle === "My Portfolio"
              ? "project-video--portfolio"
              : "project-video"
          }
        >
          <source src={modalVideoWebM} type="video/webm" />
          <source src={modalVideoMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className={modalDescriptionClass}>
          <h2 className="text-primary">{modalTitle}</h2>
          <h6 className="text-secondary">{modalStack}</h6>
          <p>{modalDescription}</p>
          <div className="d-flex justify-content-evenly">
            <a href={modalSourceCodeLink} target="_blank" rel="noreferrer">
              <Button color="primary" size="md" className="d-inline">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  color="#fff"
                  size="1x"
                />
                {"  "} Code source
              </Button>
            </a>
            {modalTitle !== "My Portfolio" && (
              <a href={modalLiveLink} target="_blank" rel="noreferrer">
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
