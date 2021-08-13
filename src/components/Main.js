import React, { useState } from "react";
import "./Main.css";
import ReactPageScroller from "react-page-scroller";
import { Presentation } from "./Presentation";
import { Portfolio } from "./Portfolio";
import { Stack } from "./Stack";
import { About } from "./About";
import { Contact } from "./Contact";

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
      <Presentation handlePageChange={handlePageChange} />
      <Stack />
      <Portfolio
        handleScrollUp={handleScrollUp}
        handleScrollDown={handleScrollDown}
      />
      <About />
      <Contact />
    </ReactPageScroller>
  );
};
