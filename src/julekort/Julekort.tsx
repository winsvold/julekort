import * as React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Bondegård from "./ikoner/Bondegård";
import Fjell from "./ikoner/Fjell";
import Sky from "./ikoner/Sky";
import LitenStjerne from "./ikoner/LitenStjerne";
import Måne from "./ikoner/Måne";
import Juletre from "./Juletre";
import { animasjoner, delay } from "./animasjoner";
import Snø from "./Snø";

const Style = styled.div`
  position: relative;
  transition: height 0.2s;
  height: ${window.innerHeight}px;
  overflow: hidden;
  background: linear-gradient(#103, #108);
  color: palegoldenrod;
`;

const getStyle = (brightness: number, bottom = 0) => css`
  position: absolute;
  filter: brightness(${brightness}%);
  bottom: ${bottom}%;
`;

const StyledBondegård = styled(Bondegård)`
  ${getStyle(45)};
  width: 80%;
  left: -5%;
  animation: ${animasjoner.vippOpp} 1s backwards;
  animation-delay: ${0.5 + delay}s;
  transform-origin: bottom;
`;

const StyledFjell = styled(Fjell)`
  ${getStyle(15)};
  animation: ${animasjoner.vippOpp} 1s backwards;
  animation-delay: ${delay}s;
  transform-origin: bottom;
`;

const StyledSky = styled(Sky)`
  ${getStyle(50, 35)};
  animation: ${animasjoner.skyAnimasjon} 30s infinite alternate, ${animasjoner.popIn} 1s backwards ${delay + 1}s;
  width: 30%;
  left: 5%;
`;

const StyledLitenStjerne = styled(LitenStjerne)<{ top: number; right: number; size: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  height: ${(props) => props.size}%;
  right: ${(props) => props.right}%;
  stroke: none;
  fill: gold;
  animation: ${animasjoner.dropDown} 1s backwards, ${animasjoner.blink} 4s infinite;
  animation-delay: ${(props) => 1 / props.size + 2.2 + delay}s;
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

const Tekst = styled.div`
  animation: ${animasjoner.fadeIn} 5s;
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
      <Snø />
      <StyledBondegård />
      <Juletre />
      <Tekst>
        <span>God</span>
        <span>jul</span>
      </Tekst>
    </Style>
  );
}

export default Julekort;
