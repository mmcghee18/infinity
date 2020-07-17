import React, { useState, useEffect } from "react";
import {
  FullPageContainer,
  SetImage,
  CurlyBrace,
  SetContainer,
  Line,
  ExplainerText,
} from "../styles/styles.js";
import useKeyPress from "../hooks/useKeyPress.js";
import SameSizeSet from "./Counting/SameSizeSet.jsx";
import DifferentSizeSet from "./Counting/DifferentSizeSet.jsx";
import _ from "lodash";

const textSteps = [
  <p>
    To start, let's talk about <strong>counting</strong> ✋🏽
  </p>,
  <p>
    When we say we have 5 bobas, it means we have one for every number from 1 to
    5.
  </p>,
  <p>
    These are sets. They're just collections of distinct objects, they can
    contain anything (numbers, boba drinks, Jacob Collier albums, other sets)!
  </p>,
  <>
    <p>
      We say 2 sets are the same size if you can draw a line between every
      element without leaving any elements uncovered.
    </p>
    <p>
      <strong>These sets are the same size!</strong>
    </p>
  </>,
  <p>But these ones aren't. Someone's missing a buddy!</p>,
];

const Counting = ({ visible, startStep, currentStep, setCurrentStep }) => {
  const myStep = currentStep - startStep;
  console.log({ myStep });

  return (
    <FullPageContainer visible={visible}>
      <ExplainerText>
        {textSteps.map((text, i) => myStep === i && text)}
      </ExplainerText>
      {myStep <= 3 && <SameSizeSet myStep={myStep} />}
      {myStep > 3 && <DifferentSizeSet myStep={myStep} />}
    </FullPageContainer>
  );
};

export default Counting;
