import React, { useState } from "react";
import Header from "./article-components/Header.jsx";
import ScrollingProgression from "./article-components/ScrollingProgression.jsx";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="App">
      <Header showHeader={showHeader} setShowHeader={setShowHeader} />
      <ScrollingProgression showHeader={showHeader} />
    </div>
  );
}

export default App;
