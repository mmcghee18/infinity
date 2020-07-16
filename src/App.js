import React, { useState, useEffect } from "react";
import Header from "./article-components/Header.jsx";
import Counting from "./article-components/Counting.jsx";
import useKeyPress from "./hooks/useKeyPress.js";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  // const numPages = 2;

  // const leftPress = useKeyPress("ArrowLeft");
  // const rightPress = useKeyPress("ArrowRight");

  // useEffect(() => {
  //   if (leftPress) {
  //     if (currentPage - 1 >= 0) setCurrentPage(currentPage - 1);
  //   }
  //   if (rightPress) {
  //     if (currentPage + 1 < numPages) setCurrentPage(currentPage + 1);
  //   }
  // }, [leftPress, rightPress]);

  return (
    <div className="App">
      {currentPage === 0 && (
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 1 && (
        <Counting currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
