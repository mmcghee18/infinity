import React, { useState, useEffect } from "react";
import Header from "./article-components/Header.jsx";
import Counting from "./article-components/Counting.jsx";
import Touch from "./Touch.jsx";

function App() {
  const [currentStep, setCurrentStep] = useState(4);
  console.log({ currentStep });

  return (
    <div className="App">
      <Touch
        totalSteps={6}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Header
        visible={currentStep === 0}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Counting
        visible={currentStep > 0}
        startStep={1}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
}

export default App;
