import React, { Component } from "react";
import { Main } from "./components/MainComponent";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faChartLine,
  faHourglassHalf,
  faBriefcase,
  faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHtml5, faCss3, faSass, faBootstrap, faJs, faReact, faGithub);
library.add(fas, faChartLine, faHourglassHalf, faBriefcase, faBroadcastTower);

export class App extends Component {
  render() {
    return <Main />;
  }
}
