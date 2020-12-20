import * as React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Tre from "../ikoner/tsx/Tre";
import { HoytSmaltTre, Tre2, Tre3, Jultre } from "../ikoner/tsx";
import SvgTre4 from "../ikoner/tsx/Tre4";

const Style = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(#111, #232);
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

const SvgStyle = styled.div<{ distance: number; delay: number }>`
  --size: ${(props) => css`calc(5vw / ${props.distance})`};
  --distance: ${(props) => props.distance};
  --brightness: ${(props) => 100 * (props.distance / 100)}%;
  animation: ${slide} ${(props) => props.distance}s linear both infinite;
  animation-delay: -${(props) => props.delay}s;
  position: absolute;
  bottom: calc(var(--size) * -15);
  svg {
    fill: hsl(150, 50%, var(--brightness));
    height: calc(var(--size) * 200);
  }
`;

function Trær() {
  return (
    <Style>
      <SvgStyle children={<Tre2 />} distance={35} delay={Math.random() * 30} />
      <SvgStyle children={<Tre />} distance={35} delay={Math.random() * 30} />
      <SvgStyle children={<Tre3 />} distance={25} delay={Math.random() * 30} />
      <SvgStyle children={<Tre />} distance={16} delay={Math.random() * 30} />
      <SvgStyle children={<SvgTre4 />} distance={15} delay={Math.random() * 30} />
      <SvgStyle children={<Tre />} distance={14} delay={Math.random() * 30} />
      <SvgStyle children={<Tre />} distance={9} delay={Math.random() * 30} />
      <SvgStyle children={<HoytSmaltTre />} distance={7} delay={Math.random() * 30} />
      <SvgStyle children={<Tre />} distance={4} delay={Math.random() * 30} />
      <SvgStyle children={<Tre />} distance={2} delay={Math.random() * 30} />
    </Style>
  );
}

export default Trær;
