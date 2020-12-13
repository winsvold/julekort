import { keyframes } from "styled-components/macro";

export const delay = 3;

export const animasjoner = {
  vippOpp: keyframes`
    from {
      transform: rotateX(90deg);
    }
  `,
  popIn: keyframes`
  from {
    transform: translateX(-500%);
  }
`,
  skyAnimasjon: keyframes`
  to {
    transform: translateX(50%);
  }
`,
  fadeIn: keyframes`
from {
  opacity: 0;
}
`,
  dropDown: keyframes`
  from {
    top: -30vh;
  }
`,
  blink: keyframes`
  from {
    fill: lightgoldenrodyellow;
    transform: scale(1.2) ;
  }
  20% {
    fill: gold;
    transform: scale(1);
  }
`,
};
