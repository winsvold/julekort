import React from "react";
import styled from "styled-components";
import MaleriIkon from "../ikoner/tsx/Maleri";

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

function Maleri() {
  return (
    <MaleriStyle>
      <MaleriIkon />
    </MaleriStyle>
  );
}

export default Maleri;
