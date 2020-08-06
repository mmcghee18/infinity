import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderText,
  BackgroundImage,
} from "../styles/styles.js";
import gorge from "../images/gorge.jpg";
import { useSpring, animated } from "react-spring";

const Header = ({ showHeader, setShowHeader }) => {
  const [guessed, setGuessed] = useState(false);

  const [props, set, stop] = useSpring(() => ({ opacity: 1 }));
  set({ opacity: showHeader ? 1 : 0 });

  return (
    <HeaderContainer
      style={props}
      onClick={() => {
        if (guessed) setShowHeader(false);
      }}
    >
      <HeaderText>
        <h1>Counting Infinity</h1>
        <p>
          You're hiking in the mountains and you wander upon the infamous{" "}
          <strong>Craton Gorge</strong>. There, you encounter a wise old sage.
          He asks you a seemingly simple question:
        </p>
        <p>
          <strong>Which group contains more numbers:</strong> the counting
          numbers (1, 2, 3, 4, etc) or the odd counting numbers (1, 3, 5, 7,
          etc)?
        </p>
        <div>
          <p>What do you think?</p>
          <button onClick={() => setGuessed(true)}>Counting numbers</button>
          <button onClick={() => setGuessed(true)}>Odd Counting numbers</button>
          <button onClick={() => setGuessed(true)}>Same size</button>
        </div>
        {guessed && (
          <div>
            <p>
              Ok, good guess. <strong>Click anywhere</strong> to advance the
              story and find out the answer!
            </p>
          </div>
        )}
      </HeaderText>
      <BackgroundImage>
        <img src={gorge} style={{ opacity: 0.4 }} />
      </BackgroundImage>
    </HeaderContainer>
  );
};

export default Header;
