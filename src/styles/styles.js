import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, sans-serif;
    background-color: white;
    color: black;
  }
`;

export const FullPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
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
