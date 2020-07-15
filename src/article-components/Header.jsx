import React from "react";
import { FullPageContainer } from "../styles/styles.js";
import { useSpring, animated } from "react-spring";

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

const Header = () => {
  return (
    <FullPageContainer>
      <h1>Counting Infinity</h1>
      <h2>Why some infinities are bigger than other infinities...</h2>
      <AnimatingInfinity />
    </FullPageContainer>
  );
};

export default Header;
