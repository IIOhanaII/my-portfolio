import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  return (
    <Modal isOpen={isModalOpen} toggle={toggle} centered>
      <ModalBody
        style={{
          padding: "0",
          height: "400px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <video autoPlay muted loop className="project-video">
          <source src={modalVideoWebM} type="video/webm" />
          <source src={modalVideoMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            padding: "3rem",
            justifyContent: "space-evenly",
          }}
        >
          <h2 className="text-primary">{modalTitle}</h2>
          <h6 className="text-secondary">{modalStack}</h6>
          <p>{modalDescription}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <a href={modalSourceCodeLink} target="_blank" rel="noreferrer">
              <Button
                color="primary"
                size="md"
                style={{ fontSize: "1rem", display: "inline" }}
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  color="#fff"
                  size="1x"
                />
                {"  "} Code source
              </Button>
            </a>
            <a href={modalLiveLink} target="_blank" rel="noreferrer">
              <Button color="primary" size="md" style={{ fontSize: "1rem" }}>
                <FontAwesomeIcon
                  icon={["fas", "broadcast-tower"]}
                  color="#fff"
                  size="1x"
                />
                {"  "} Live
              </Button>
            </a>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
