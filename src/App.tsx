import React from "react";
import "./reset.css";
import Julekort from "./julekort/Julekort";
import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  html {
    background-color: black;
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
