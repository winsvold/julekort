import * as React from "react";
import { useRef } from "react";
import styled, { css, keyframes } from "styled-components/macro";
import Tre from "../ikoner/tsx/Tre";
import { HoytSmaltTre, Tre2, Tre3, Tre4 } from "../ikoner/tsx";
import { motion } from "framer-motion";

const Style = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(#111, #232);
  overflow: hidden;
`;

const slide = keyframes`
  from {
  opacity: 0;
    transform: translateX(100vw);
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
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

const trees = [Tre, Tre2, Tre3, Tre4, HoytSmaltTre];
const randomTree = () => trees[Math.floor(Math.random() * trees.length)];

function Tree() {
  const SVG = useRef(randomTree()).current;
  const distance = useRef(Math.random()).current;

  return (
    <motion.div
      style={{
        position: "absolute",
        fontSize: `${distance}rem`,
        bottom: "-5em",
        zIndex: Math.floor(distance * 1000),
      }}
      initial={{ x: "100vw" }}
      animate={{ x: "-100vw" }}
      transition={{ duration: 3 / distance, ease: "linear", repeat: Infinity, elapsed: 5 }}
    >
      <SVG
        style={{
          fill: `hsl(150, 50%, ${35 - distance * 35}%)`,
          height: "60em",
        }}
      />
    </motion.div>
  );
}

function Skog() {
  return (
    <Style>
      {[...new Array(10)].map((_, i) => (
        <Tree key={i} />
      ))}
    </Style>
  );
}

export default Skog;
