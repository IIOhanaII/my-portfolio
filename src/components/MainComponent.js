import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import { PresentationComponent } from "../components/PresentationComponent";
import { PortfolioComponent } from "../components/PortfolioComponent";
import { StackComponent } from "../components/StackComponent";
import { AboutComponent } from "../components/AboutComponent";
import { ContactComponent } from "../components/ContactComponent";

export class Main extends Component {
  render() {
    return (
      <ReactPageScroller>
        <PresentationComponent />
        <StackComponent />
        <PortfolioComponent />
        <AboutComponent />
        <ContactComponent />
      </ReactPageScroller>
    );
  }
}
