import React from "react";
import { TouchContainer, LeftTouch, RightTouch } from "./styles/styles.js";

const Touch = ({ totalSteps, currentStep, setCurrentStep }) => {
  return (
    <TouchContainer>
      <LeftTouch
        onClick={() => {
          if (currentStep - 1 >= 0) setCurrentStep(currentStep - 1);
        }}
      />
      <RightTouch
        onClick={() => {
          if (currentStep + 1 < totalSteps) setCurrentStep(currentStep + 1);
        }}
      />
    </TouchContainer>
  );
};

export default Touch;
