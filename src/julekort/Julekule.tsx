import * as React from "react";
import styled, { keyframes } from "styled-components/macro";
import { delay } from "./animasjoner";

const size = "3em";

interface Props {
  top: number;
  left: number;
  farge: string;
  rotation: number;
  delay: number;
}

const popUp = keyframes`
  from {
    transform: scale(0);
  }
  70% {
  transform: scale(1.2);
  }
`;

const AnimationWrapper = styled.div<Props>`
  animation: ${popUp} 0.5s backwards 1s;
  animation-delay: ${(props) => delay + 2 + props.delay}s;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background-color: ${(props) => props.farge};
  font-family: "Lobster", cursive;
  background-image: radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  border-radius: 50%;
  height: ${size};
  width: ${size};
`;

const JulekuleStyle = styled.div<Props>`
  transform: rotate(${(props) => props.rotation}deg);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  /*
  &::after {
    box-shadow: inset 0.3em 0.3em 1em rgba(255, 255, 255, 0.5);
    background-image: radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
  }
  */
`;

const Base = styled.span`
  position: absolute;
  content: "";
  display: block;
  width: 1em;
  height: 0.3em;
  top: -0.2em;
  background-color: white;
  left: 50%;
  margin-left: -0.5em;
  border-radius: 0.1em 0.1em 0 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
`;

const width = ".13em";

const Snor = styled.span`
  box-sizing: border-box;
  position: absolute;
  border-left: white solid ${width};
  height: 0.4em;
  top: -0.6em;
  left: calc(${size} / 2);
  transform: translateX(-50%);
  &::after {
    content: "";
    position: absolute;
    top: -0.6em;
    border: ${width} solid white;
    left: -${width};
    width: 0.6em;
    height: 0.5em;
    border-top-left-radius: 10em;
    border-top-right-radius: 10em;
    border-bottom: 0;
  }
`;

const Julekule = (props: Props) => {
  return (
    <AnimationWrapper {...props}>
      <JulekuleStyle {...props}>
        <Snor />
        <Base />
        nav
      </JulekuleStyle>
    </AnimationWrapper>
  );
};
export default Julekule;
