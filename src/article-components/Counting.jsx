import React, { useState, useEffect } from "react";
import {
  FullPageContainer,
  ExplainerText,
  WhiteText,
} from "../styles/styles.js";
import useKeyPress from "../hooks/useKeyPress.js";
import SameSizeSet from "./Counting/SameSizeSet.jsx";
import DifferentSizeSet from "./Counting/DifferentSizeSet.jsx";
import _ from "lodash";

const textSteps = [
  <p>
    <WhiteText>
      To start, let's talk about <strong>counting</strong> ✋🏽
    </WhiteText>
  </p>,
  <p>
    <WhiteText>
      When we say we have 5 bobas, it means we have one for every number from 1
      to 5.
    </WhiteText>
  </p>,
  <p>
    <WhiteText>
      These are sets. They're just collections of distinct objects, they can
      contain anything (numbers, boba drinks, Jacob Collier albums, other sets)!
    </WhiteText>
  </p>,
  <>
    <p>
      <WhiteText>
        We say 2 sets are the same size if you can draw a line between every
        element without leaving any elements uncovered.
      </WhiteText>
    </p>
    <p>
      <WhiteText>
        <strong>These sets are the same size!</strong>
      </WhiteText>
    </p>
  </>,
  <WhiteText>But these ones aren't. Someone's missing a buddy!</WhiteText>,
];

const Counting = () => {
  return <></>;
};

export default Counting;
