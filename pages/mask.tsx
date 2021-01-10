import * as React from "react";
import { SVGProps, useReducer } from "react";
import styled from "styled-components/macro";

const StyledSvg = styled.svg`
  border: dashed gray 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Circle = (props: SVGProps<SVGCircleElement>) => <circle {...props} filter="url(#blur)" />;

interface CircleI {
  cx: number;
  cy: number;
  r: number;
}

function reducer(state: CircleI[], action: { type: "newCircle"; x: number; y: number }): CircleI[] {
  switch (action.type) {
    case "newCircle":
      return [...state, { cx: action.x, cy: action.y, r: 20 }];
    default:
      return state;
  }
}

export const SVGMask = () => {
  const [circles, dispatch] = useReducer(reducer, []);

  const handleNewCircle = (e: React.MouseEvent) => {
    const x = (e.nativeEvent.x * 100) / window.innerWidth;
    const y = (e.nativeEvent.y * 100) / window.innerHeight;
    dispatch({
      type: "newCircle",
      x,
      y,
    });
  };

  return (
    <StyledSvg viewBox="0 0 100 100" onClick={handleNewCircle}>
      <defs>
        <filter id="blur" x="-40%" y="-40%" height="180%" width="180%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      <mask id="mymask">
        <rect x={0} y={0} height={100} width={100} fill="#eee" />
        {circles.map((circle, i) => (
          <Circle {...circle} fill="black" key={i} />
        ))}
      </mask>
      <rect x="0" y="0" height={100} width={100} mask="url(#mymask)" fill="black" />
    </StyledSvg>
  );
};

const Style = styled.div`
  background: linear-gradient(#110088, black);
  min-height: 100vh;
`;

function Mask() {
  return (
    <Style>
      <SVGMask />
    </Style>
  );
}

export default Mask;
