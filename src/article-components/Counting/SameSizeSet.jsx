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
import useChartDimensions from "../../hooks/useChartDimensions.js";
import _ from "lodash";

const SameSizeSet = () => {
  const items = [bobaBrown, bobaGreen, bobaOrange, bobaPurple, bobaWhite];

  const chartSettings = {};
  const [ref, dms] = useChartDimensions(chartSettings);

  const firstX = (dms.width - 120) / 5;

  return (
    <div style={{ width: "100%" }}>
      {/* Set of boba */}
      <SetContainer>
        <CurlyBrace>{"{"}</CurlyBrace>
        {items.map((imageSrc, i) => (
          <div key={i} style={{ width: "18%" }}>
            <SetImage key={i} src={imageSrc} alt={`boba-${i}`} />
          </div>
        ))}
        <CurlyBrace>{"}"}</CurlyBrace>
      </SetContainer>

      {/* Counting lines */}
      <div ref={ref} style={{ height: "200px", width: "100%" }}>
        <svg height={dms.height} width={dms.width}>
          <g>
            <line x1={firstX} y1={0} x2={firstX} y2={200} stroke="black"></line>
          </g>
        </svg>
      </div>

      {/* Set of numbers */}
      <SetContainer>
        <CurlyBrace>{"{"}</CurlyBrace>
        {_.range(1, 6).map((i) => (
          <div
            key={i}
            style={{ width: "18%", fontSize: "60px", textAlign: "center" }}
          >
            {i}
          </div>
        ))}
        <CurlyBrace>{"}"}</CurlyBrace>
      </SetContainer>
    </div>
  );
};

export default SameSizeSet;
