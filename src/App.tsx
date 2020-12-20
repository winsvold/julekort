import React from "react";
import "./reset.css";
import Julekort from "./julekort/Julekort";
import styled, { createGlobalStyle } from "styled-components";
import Trær from "./Trær/Trær";
import Maleri from "./ikoner/tsx/Maleri";

const GlobalStyling = createGlobalStyle`
  html {
    background-color: black;
    color: white;
  }
`;

const MaleriStyle = styled.div`
  position: relative;
  background: linear-gradient(black, #002);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    flex-grow: 1;
    max-height: 90%;
    max-width: 90%;
    stroke: #888;
    stroke-width: 0.1;
  }
`;

function App() {
  return (
    <>
      <GlobalStyling />
      <Julekort />
      <MaleriStyle>
        <Maleri />
      </MaleriStyle>
      <Trær />
    </>
  );
}

export default App;
