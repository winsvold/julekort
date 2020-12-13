import React from "react";
import "./reset.css";
import Julekort from "./julekort/Julekort";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  html {
    background-color: black;
    color: white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyling />
      <Julekort />
    </>
  );
}

export default App;
