import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import { PresentationComponent } from "../components/PresentationComponent";
import { PortfolioComponent } from "../components/PortfolioComponent";
import { StackComponent } from "../components/StackComponent";
import { AboutComponent } from "../components/AboutComponent";
import { ContactComponent } from "../components/ContactComponent";

export const Main = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [blockScrollUp, setBlockScrollUp] = useState(false);
  const [blockScrollDown, setBlockScrollDown] = useState(false);

  const handlePageChange = (number) => setCurrentPage(number);

  const handleScrollUp = () => setBlockScrollUp(!blockScrollUp);
  const handleScrollDown = () => setBlockScrollDown(!blockScrollDown);

  return (
    <ReactPageScroller
      pageOnChange={handlePageChange}
      customPageNumber={currentPage}
      handleScrollUp={handleScrollUp}
      handleScrollDown={handleScrollDown}
      blockScrollUp={blockScrollUp}
      blockScrollDown={blockScrollDown}
    >
      <PresentationComponent handlePageChange={handlePageChange} />
      <StackComponent />
      <PortfolioComponent
        handleScrollUp={handleScrollUp}
        handleScrollDown={handleScrollDown}
      />
      <AboutComponent />
      <ContactComponent />
    </ReactPageScroller>
  );
};
