import * as React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Bondegård from "./ikoner/Bondegård";
import JuletreIkon from "./ikoner/JuletreIkon";
import Fjell from "./ikoner/Fjell";
import Sky from "./ikoner/Sky";
import Stjerne from "./ikoner/Stjerne";
import LitenStjerne from "./ikoner/LitenStjerne";
import Måne from "./ikoner/Måne";

const d = 3;

const Style = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const getStyle = (brightness: number, bottom = 0) => css`
  position: absolute;
  filter: brightness(${brightness}%);
  bottom: ${bottom}%;
`;

const vippOpp = keyframes`
  from {
    transform: rotateX(90deg);
  }
`;

const StyledBondegård = styled(Bondegård)`
  ${getStyle(35)};
  width: 80%;
  left: -5%;
  animation: ${vippOpp} 1s backwards;
  animation-delay: ${0.5 + d}s;
  transform-origin: bottom;
`;

const StyledFjell = styled(Fjell)`
  ${getStyle(25)};
  animation: ${vippOpp} 1s backwards;
  animation-delay: ${d}s;
  transform-origin: bottom;
`;

const skyAnimasjon = keyframes`
  from {
    transform: translateX(-500%);
  }
  10% {
   transform: translateX(-50%);
  }
`;

const StyledSky = styled(Sky)`
  ${getStyle(40, 35)};
  animation: ${skyAnimasjon} 20s backwards;
  animation-delay: ${d + 0.5}s;
  width: 30%;
  left: 20%;
`;

const JuletreWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 20%;
  height: 40%;
  animation: ${vippOpp} 1s backwards;
  animation-delay: ${d + 1}s;
  transform-origin: bottom;
`;

const StyledJuletre = styled(JuletreIkon)`
  height: 100%;
  transform: translateY(10%);
  filter: brightness(50%);
`;

const StyledStjerne = styled(Stjerne)`
  position: absolute;
  top: -2%;
  height: 15%;
  left: 50%;
  transform: translateX(-50%);
  stroke: none;
  fill: gold;
`;

const dropDown = keyframes`
  from {
    top: -30vh;
  }
`;

const blink = keyframes`
  from {
    fill: lightgoldenrodyellow;
    transform: scale(1.2);
  }
  20% {
    fill: gold;
    transform: scale(1);
  }
`;

const StyledLitenStjerne = styled(LitenStjerne)<{ top: number; right: number; size: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  height: ${(props) => props.size}%;
  right: ${(props) => props.right}%;
  stroke: none;
  fill: gold;
  animation: ${dropDown} 1s backwards, ${blink} 3s infinite;
  animation-delay: ${(props) => 1 / props.size + 1.5 + d}s;
`;

const måneAnimasjon = keyframes`
  from {
    transform: rotate(90deg);
    opacity: 0;
  }
`;

const StyledMåne = styled(Måne)`
  position: absolute;
  top: 15%;
  left: 20%;
  fill: lightgoldenrodyellow;
  height: 7%;
  transform: rotate(15deg);
  animation: ${måneAnimasjon} 3s backwards 1s;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
`;

const Tekst = styled.div`
  animation: ${fadeIn} 5s;
  font-family: "Lobster", cursive;
  position: absolute;
  top: 20%;
  left: 40%;
  font-size: 20vmin;
  transform: rotate(-5deg);
  color: goldenrod;
  span:last-child {
    display: block;
    transform: translate(1em, -0.2em);
  }
`;

function Julekort() {
  return (
    <Style>
      <StyledLitenStjerne right={5} top={5} size={3} />
      <StyledLitenStjerne right={15} top={7} size={2} />
      <StyledLitenStjerne right={12} top={20} size={2.5} />
      <StyledMåne />
      <StyledSky />
      <StyledFjell />
      <StyledBondegård />
      <JuletreWrapper>
        <StyledJuletre />
        <StyledStjerne />
      </JuletreWrapper>
      <Tekst>
        <span>God</span>
        <span>jul</span>
      </Tekst>
    </Style>
  );
}

export default Julekort;
