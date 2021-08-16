import React from "react";
import "./Portfolio.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectButton = ({
  projectIconName,
  toggleModal,
  projectVideoWebM,
  projectVideoMp4,
  projectDetails,
}) => {
  return (
    <React.Fragment>
      {/* On Desktop, render this project button */}
      {window.screen.width > 1024 && (
        <React.Fragment>
          <FontAwesomeIcon
            icon={["fas", projectIconName]}
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
                toggleModal(projectVideoWebM, projectVideoMp4, projectDetails)
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
      {/* On Mobile devices, render this project button */}
      {window.screen.width <= 1024 && (
        <React.Fragment>
          <Button
            color="link"
            style={{ width: "100%", height: "100%" }}
            className="p-0"
            onClick={() =>
              toggleModal(projectVideoWebM, projectVideoMp4, projectDetails)
            }
          >
            {" "}
            <FontAwesomeIcon
              icon={["fas", projectIconName]}
              size="3x"
              color="#219ebc"
              className="project-container__elements project-container__elements--icon"
            />
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
