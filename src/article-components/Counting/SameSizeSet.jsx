import React from "react";
import bobaBrown from "../../images/boba_transparent.png";
import bobaGreen from "../../images/boba_green.png";
import bobaOrange from "../../images/boba_orange.png";
import bobaPurple from "../../images/boba_purple.png";
import bobaWhite from "../../images/boba_white.png";
import {
  FullPageContainer,
  SetImage,
  CurlyBrace,
  SetContainer,
  Line,
  ExplainerText,
} from "../../styles/styles.js";
import _ from "lodash";

const SameSizeSet = ({ myStep }) => {
  const items = [bobaBrown, bobaGreen, bobaOrange, bobaPurple, bobaWhite];

  return (
    <div>
      {/* Set of boba */}
      <SetContainer>
        <CurlyBrace>{"{"}</CurlyBrace>
        {items.map((imageSrc, i) => (
          <div key={i} style={{ width: "14vw" }}>
            <SetImage key={i} src={imageSrc} alt={`boba-${i}`} />
          </div>
        ))}
        <CurlyBrace>{"}"}</CurlyBrace>
      </SetContainer>

      {/* Counting lines */}
      {myStep > 0 && (
        <SetContainer>
          <CurlyBrace style={{ visibility: "hidden" }}>{"{"}</CurlyBrace>
          {_.range(1, 6).map((i) => (
            <div
              key={i}
              style={{
                width: "14vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Line key={i} />
            </div>
          ))}
          <CurlyBrace style={{ visibility: "hidden" }}>{"}"}</CurlyBrace>
        </SetContainer>
      )}

      {/* Set of numbers */}
      {myStep > 0 && (
        <SetContainer>
          <CurlyBrace>{"{"}</CurlyBrace>
          {_.range(1, 6).map((i) => (
            <div
              key={i}
              style={{ width: "14vw", fontSize: "60px", textAlign: "center" }}
            >
              {i}
            </div>
          ))}
          <CurlyBrace>{"}"}</CurlyBrace>
        </SetContainer>
      )}
    </div>
  );
};

export default SameSizeSet;
