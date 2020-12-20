import * as React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Tre from "../ikoner/tsx/Tre";

const Style = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(#111, #232);
  font-size: 1vw;
  overflow: hidden;
`;

const slide = keyframes`
from {
opacity: 0;
  transform: translateX(150em);
}
5% {
  opacity: 1;
}
95% {
  opacity: 1;
}
to {
  opacity: 0;
  transform: translateX(-150em);
}
`;

const StyledTre = styled(Tre)<{ distance: number; delay: number }>`
  animation: ${slide} ${(props) => props.distance}s linear both infinite;
  animation-delay: -${(props) => props.delay}s;
  fill: hsl(240, 50%, ${(props) => 100 * (props.distance / 100)}%);
  font-size: ${(props) => css`calc(5vw / ${props.distance})`};
  height: 200em;
  position: absolute;
  bottom: -30em;
  filter: blur(${(props) => props.distance / 50}rem);
`;

function Trær() {
  return (
    <Style>
      <StyledTre distance={25} delay={Math.random() * 30} />
      <StyledTre distance={16} delay={Math.random() * 30} />
      <StyledTre distance={15} delay={Math.random() * 30} />
      <StyledTre distance={14} delay={Math.random() * 30} />
      <StyledTre distance={9} delay={Math.random() * 30} />
      <StyledTre distance={7} delay={Math.random() * 30} />
      <StyledTre distance={4} delay={Math.random() * 30} />
      <StyledTre distance={2} delay={Math.random() * 30} />
    </Style>
  );
}

export default Trær;
