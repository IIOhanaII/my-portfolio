import React from "react";
import { Main } from "./components/Main";
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
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faChartLine,
  faHourglassHalf,
  faBriefcase,
  faBroadcastTower,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faGithub,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare
);
library.add(
  fas,
  faChartLine,
  faHourglassHalf,
  faBriefcase,
  faBroadcastTower,
  faDownload,
  faPlus
);

export const App = () => <Main />;
