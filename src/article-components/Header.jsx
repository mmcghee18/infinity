import React, { useState } from "react";
import { FullPageContainer, KeyboardKey } from "../styles/styles.js";
import { useSpring, animated } from "react-spring";
import { RightArrow } from "@styled-icons/boxicons-regular";

const AnimatingInfinity = () => {
  const props = useSpring({
    config: { duration: 3000 },
    x: 0,
    from: { x: 200 },
  });

  return (
    <animated.svg
      strokeDasharray="200"
      strokeDashoffset={props.x}
      width="400px"
      height="300px"
      viewBox="0 0 50 50"
    >
      <path
        stroke="cornflowerblue"
        fill="none"
        strokeWidth="4"
        d="M23.71 5.21l17.58 17.58a12.43 12.43 0 0 0 17.57 0 12.43 12.43 0 0 0 0-17.57 12.43 12.43 0 0 0-17.57 0L23.71 22.79a12.43 12.43 0 0 1-17.57 0 12.43 12.43 0 0 1 0-17.57 12.43 12.43 0 0 1 17.57-.01z"
        transform={"translate(-7, 10)"}
      />
    </animated.svg>
  );
};

const NumberLines = () => {
  return (
    <svg height="100" width="500">
      <line x1="0" y1="5" x2="200" y2="5" stroke="black"></line>
      <line x1="0" y1="50" x2="400" y2="50" stroke="black"></line>
      <text x="0" y="20">
        0
      </text>
      <text x="195" y="20">
        1
      </text>
      <text x="0" y="70">
        0
      </text>
      <text x="395" y="70">
        2
      </text>
    </svg>
  );
};

const Header = () => {
  const [madeGuess, setMadeGuess] = useState(false);

  return (
    <FullPageContainer>
      <h1>Counting Infinity</h1>
      <h2>Why some infinities are bigger than other infinities</h2>
      <AnimatingInfinity />
      <p>
        Which group is bigger: all the numbers between 0 and 1 or all the
        numbers between 0 and 2? Give it your best guess.
      </p>
      <NumberLines />
      <button onClick={() => setMadeGuess(true)}>same size</button>
      <button onClick={() => setMadeGuess(true)}>
        numbers between 0 and 1
      </button>
      <button onClick={() => setMadeGuess(true)}>
        numbers between 0 and 2
      </button>

      {madeGuess && (
        <div style={{ marginTop: "25px" }}>
          <p>
            With a little math and some fun pictures, we can find out the
            answer. (Don't worry, no fancy background knowledge is needed - if
            you know how to count, you'll be good!)
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "20px" }}>
              Use the arrow keys to advance the story.
            </p>
            <KeyboardKey>{"<"}</KeyboardKey>
            <KeyboardKey>{">"}</KeyboardKey>
          </div>
        </div>
      )}
    </FullPageContainer>
  );
};

export default Header;
