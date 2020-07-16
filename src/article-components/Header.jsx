import React, { useState, useEffect } from "react";
import { FullPageContainer, KeyboardKey } from "../styles/styles.js";
import { useSpring, animated } from "react-spring";
import useKeyPress from "../hooks/useKeyPress.js";

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

const Header = ({ currentPage, setCurrentPage }) => {
  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");

  useEffect(() => {
    if (rightPress) setCurrentPage(currentPage + 1);
  }, [leftPress, rightPress]);

  return (
    <FullPageContainer>
      <div>
        <h1>Counting Infinity</h1>
        {/* <p>
          A paradox is a statement that's either self-contradictory or goes
          against what we intuitively expect.
        </p>
        <p>
          A paradox is something that either seems true, but isn't OR seems
          crazy but is true.
        </p> */}

        {/* <p>
          Like if I told you that my barber only shaves people who don’t shave
          themselves. Seems fine. But does he shave himself? Huh. If he shaves
          himself, that's a problem, because he would be shaving someone who
          shaves themself. But if he doesn't, he's someone who the barber
          shaves, so he must shave himself. Confused? Same.
        </p> */}
        <p>
          Infinity. It's not a number, but rather the idea of something that is
          boundless, endless, larger than any number. Like the number of digits
          of pi. Or the number of breadsticks you can order at Olive Garden (not
          really).
        </p>
        <p>
          We’re going to ask the question “are some infinities bigger than other
          infinities?” Turns out, the answer, like any good{" "}
          <a href="#">paradox</a>, is <strong>mind-bendingly absurd</strong> but
          also (somehow) <strong>beautifully well-founded</strong>. (No fancy
          math knowledge required - if you know how to count, you're ready to
          go!)
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: "20px" }}>
            Let's dive in! You can use the arrow keys to advance the story.
          </p>
          <KeyboardKey>{"<"}</KeyboardKey>
          <KeyboardKey>{">"}</KeyboardKey>
        </div>
      </div>
    </FullPageContainer>
  );
};

export default Header;
