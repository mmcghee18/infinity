import React, { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import {
  ScrollamaWrapper,
  ContentWrapper,
  StepWrapper,
} from "../styles/styles.js";
import _ from "lodash";
import textSteps from "./textSteps.js";
import SameSizeSet from "./Counting/SameSizeSet.jsx";

const ScrollingProgression = () => {
  const [currentStep, setCurrentStep] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <div style={{ display: "flex" }}>
      <ScrollamaWrapper>
        <Scrollama onStepEnter={onStepEnter}>
          {textSteps.map((content, i) => (
            <Step data={i} key={i}>
              <StepWrapper>{content}</StepWrapper>
            </Step>
          ))}
        </Scrollama>
      </ScrollamaWrapper>

      <div>
        <ContentWrapper>
          <SameSizeSet />
        </ContentWrapper>
      </div>
    </div>
  );
};

export default ScrollingProgression;
