import * as React from "react";
import styled, { css } from "styled-components/macro";
import HjerteIkon from "../ikoner/HjerteIkon";
import { useProgressContext } from "./ProgressContext";
import { navFrontend } from "../../../styles/navFarger";

const Style = styled.div`
  position: absolute;
  font-size: 3vmin;
  top: 1em;
  left: 1em;
  display: flex;
  opacity: 0.6;
`;

const StyledHjerteIkon = styled(HjerteIkon)<{ filled: boolean }>`
  height: 1rem;
  margin-right: 0.25em;
  fill: #2226;
  stroke: #777;
  stroke-dasharray: 2;
  transition: 1s;
  ${(props) =>
    props.filled &&
    css`
      stroke: none;
      fill: ${navFrontend.navRod};
    `}
`;

function Progress() {
  const [progress] = useProgressContext();

  const completed = Object.entries(progress).filter((it) => it[1]);

  return (
    <Style>
      <StyledHjerteIkon filled={completed.length > 0} />
      <StyledHjerteIkon filled={completed.length > 1} />
      <StyledHjerteIkon filled={completed.length > 2} />
    </Style>
  );
}

export default Progress;
