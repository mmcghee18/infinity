import React from "react";
import bobaBrown from "../../images/boba_transparent.png";
import bobaGreen from "../../images/boba_green.png";
import bobaOrange from "../../images/boba_orange.png";
import bobaPurple from "../../images/boba_purple.png";
import bobaWhite from "../../images/boba_white.png";
import djesse1 from "../../images/djesse1.jpg";
import djesse2 from "../../images/djesse2.jpg";
import djesse3 from "../../images/djesse3.jpg";
import {
  FullPageContainer,
  SetImage,
  CurlyBrace,
  SetContainer,
  Line,
  ExplainerText,
} from "../../styles/styles.js";

const DifferentSizeSet = ({ currentStep }) => {
  const items1 = [bobaBrown, bobaGreen, bobaOrange, bobaPurple, bobaWhite];
  const items2 = [djesse1, djesse2, djesse3];

  return (
    <div>
      {/* Set of boba */}
      <SetContainer style={{ marginBottom: "150px" }}>
        <CurlyBrace>{"{"}</CurlyBrace>
        {items1.map((imageSrc, i) => (
          <div key={i} style={{ width: "14vw" }} className={`set1-item${i}`}>
            <SetImage key={i} src={imageSrc} alt={`boba-${i}`} />
          </div>
        ))}
        <CurlyBrace>{"}"}</CurlyBrace>
      </SetContainer>

      {/* Set of JC albums */}
      <SetContainer>
        <CurlyBrace open={true}>{"{"}</CurlyBrace>
        {items2.map((imageSrc, i) => (
          <div
            key={i}
            style={{ width: "14vw", marginRight: i === 2 ? null : "14vw" }}
            className={`set2-item${i}`}
          >
            <SetImage key={i} src={imageSrc} alt={`boba-${i}`} />
          </div>
        ))}
        <CurlyBrace open={false}>{"}"}</CurlyBrace>
      </SetContainer>
    </div>
  );
};

export default DifferentSizeSet;
