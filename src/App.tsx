import React from "react";
import "./reset.css";
import Julekort from "./julekort/Julekort";
import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
html {
background-color: black;
}

body {
  background: linear-gradient(#103, #108);
  color: palegoldenrod;
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
