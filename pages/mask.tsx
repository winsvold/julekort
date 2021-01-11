import * as React from "react";
import { MutableRefObject, SVGProps, useReducer, useRef, useState } from "react";
import styled from "styled-components/macro";
import { useMount } from "react-use";

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
      return [...state, { cx: action.x, cy: action.y, r: 150 }];
    default:
      return state;
  }
}

function getRelativePostion(e: React.MouseEvent) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
}

export const SVGMask = (props: { parentRef?: MutableRefObject<HTMLElement> }) => {
  const [circles, dispatch] = useReducer(reducer, []);
  const [rect, setRect] = useState<ClientRect | undefined>();

  useMount(() => {
    const rect = props.parentRef?.current?.getBoundingClientRect();
    setRect(rect);
  });

  if (!rect) {
    return null;
  }

  const handleNewCircle = (e: React.MouseEvent) => {
    const pos = getRelativePostion(e);
    dispatch({
      type: "newCircle",
      ...pos,
    });
  };

  return (
    <StyledSvg viewBox={`0 0 ${rect.width} ${rect.height}`} onClick={handleNewCircle}>
      <defs>
        <filter id="blur" x="-40%" y="-40%" height="180%" width="180%">
          <feGaussianBlur stdDeviation="15" />
        </filter>
      </defs>
      <mask id="mymask">
        <rect x={0} y={0} height={rect.height} width={rect.width} fill="#eee" />
        {circles.map((circle, i) => (
          <Circle {...circle} fill="black" key={i} />
        ))}
      </mask>
      <rect x={0} y={0} height={rect.height} width={rect.width} mask="url(#mymask)" fill="black" />
    </StyledSvg>
  );
};

const Style = styled.div`
  position: relative;
  background: linear-gradient(#110088, black);
  height: 80vh;
  width: 50vw;
  margin: 10%;
  margin-top: 60vh;
`;

function Mask() {
  const ref = useRef(null);
  return (
    <Style ref={ref}>
      <SVGMask parentRef={ref} />
    </Style>
  );
}

export default Mask;
