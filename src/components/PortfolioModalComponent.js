import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PortfolioModal = ({
  isModalOpen,
  toggle,
  modalClasses,
  modalVideoWebM,
  modalVideoMp4,
  modalTitle,
  modalStack,
  modalDescription,
  modalDescriptionClasses,
  modalSourceCodeLink,
  modalLiveLink,
}) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggle} centered scrollable>
      <ModalBody className={modalClasses}>
        <video
          autoPlay
          muted
          loop
          className={
            modalTitle === "My Portfolio"
              ? "portfolio-project-video"
              : "project-video"
          }
        >
          <source src={modalVideoWebM} type="video/webm" />
          <source src={modalVideoMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className={modalDescriptionClasses}>
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
