import React from "react";
import Header from "./article-components/Header.jsx";
import useKeyPress from "./hooks/useKeyPress.js";

function App() {
  // const leftPress = useKeyPress("ArrowLeft");
  // const rightPress = useKeyPress("ArrowRight");

  return (
    <div className="App">
      {/* <div>
        {leftPress && "😊"}
        {rightPress && "😢"}
      </div> */}
      <Header />
    </div>
  );
}

export default App;
