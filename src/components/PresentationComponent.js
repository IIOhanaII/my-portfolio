import React from "react";
import { Button } from "reactstrap";
import presentationVideoWebM from "../assets/mixkit-daytime-city-traffic-aerial-view-56.webm";
import presentationVideoMp4 from "../assets/mixkit-daytime-city-traffic-aerial-view-56.mp4";
import { PORTFOLIO_PAGE_POSITION } from "../constants/index";

export const PresentationComponent = ({ handlePageChange }) => {
  return (
    <React.Fragment>
      <video autoPlay muted loop id="myPresentationVideo">
        <source src={presentationVideoWebM} type="video/webm" />
        <source src={presentationVideoMp4} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div className="teaser">
        <h4>Bonjour !</h4>
        <h4>Je suis Arthur Barbey, développeur front end React</h4>
        <Button
          outline
          color="warning"
          size="lg"
          onClick={() => handlePageChange(PORTFOLIO_PAGE_POSITION)}
        >
          Mes travaux
        </Button>
      </div>
    </React.Fragment>
  );
};
