import React, { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import {
  Wrapper,
  ScrollamaWrapper,
  ContentWrapper,
  StepWrapper,
} from "../styles/styles.js";
import { useSpring } from "react-spring";
import _ from "lodash";
import textSteps from "./textSteps.js";

const ScrollingProgression = ({ showHeader }) => {
  const [props, set, stop] = useSpring(() => ({ opacity: 0 }));
  set({ opacity: showHeader ? 0 : 1 });

  const [currentStep, setCurrentStep] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <Wrapper showHeader={showHeader}>
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
          <p>I am sticky</p>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

export default ScrollingProgression;
