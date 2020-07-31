import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, sans-serif;
    background-color: #b7e1ed;
    color: #333333;
  }
`;

export const FullPageContainer = styled.div`
  height: 92vh;
  flex-direction: column;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 8vh;
`;

export const ScrollamaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`;

export const ContentWrapper = styled.div`
  position: sticky;
  top: 100px;
`;

export const StepWrapper = styled.div`
  margin: 25vh 0;
  width: 250px;
`;

export const KeyboardKey = styled.span`
  display: inline-block;
  margin-left: 0.25em;
  width: 1em;
  height: 1.1em;
  border: 1px solid #4a3d3e;
  border-radius: 5px;
  border-top: 0.5px solid #b2a1a3;
  border-left: 1px solid #826b6d;
  border-right: 1px solid #826b6d;
  border-bottom: 3px solid #4a3d3e;
  vertical-align: middle;
  text-align: center;
  transform: translateY(-12.5%);

  &:last-child {
    background-color: cornflowerblue;
  }
`;

export const SetImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CurlyBrace = styled.div`
  font-size: 120px;
  margin-left: ${(props) => (!props.open ? "20px" : null)};
  margin-right: ${(props) => (props.open ? "20px" : null)};
`;

export const SetContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  background: black;
  height: 100px;
  width: 5px;
`;

export const ExplainerText = styled.div`
  margin-bottom: 50px;
  height: 4em;
`;

export const TouchContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: all;
  display: flex;
`;

export const LeftTouch = styled.div`
  width: 35%;
  height: 100%;
`;

export const RightTouch = styled.div`
  width: 65%;
  height: 100%;
`;

export const WhiteText = styled.span`
  background: white;
`;
