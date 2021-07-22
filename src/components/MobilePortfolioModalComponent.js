import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MobilePortfolioModal = ({
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
    <Modal isOpen={isModalOpen} toggle={toggle} size="xl" centered>
      <ModalBody style={{ padding: 0, width: "800px" }}>
        <video autoPlay muted loop className="project-video">
          <source src={modalVideoWebM} type="video/webm" />
          <source src={modalVideoMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div
          style={{
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          <h2 className="text-primary ms-3">{modalTitle}</h2>
          <h6 className="text-secondary ms-3">{modalStack}</h6>
          <p className="ms-3">{modalDescription}</p>
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
