import React from "react";
import { Button } from "reactstrap";
import presentationVideoWebM from "../assets/mixkit-daytime-city-traffic-aerial-view-56.webm";
import presentationVideoMp4 from "../assets/mixkit-daytime-city-traffic-aerial-view-56.mp4";

export const PresentationComponent = () => {
  return (
    <React.Fragment>
      <video autoPlay muted loop id="myPresentationVideo">
        <source src={presentationVideoWebM} type="video/webm" />
        <source src={presentationVideoMp4} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div className="teaser">
        <h1>Bonjour !</h1>
        <h1>Je suis Arthur Barbey, développeur front end React</h1>
        <Button
          outline
          color="warning"
          size="lg"
          style={{ fontSize: "1.5rem" }}
        >
          Mes travaux
        </Button>
      </div>
    </React.Fragment>
  );
};
