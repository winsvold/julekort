import React from "react";
import "./reset.css";
import Julekort from "./julekort/Julekort";
import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  html {
    background-color: black;
    height: -webkit-fill-available;
  }
  
  body {
      min-height: 100vh;
      min-height: -webkit-fill-available;
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
