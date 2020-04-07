import { css } from "styled-components";

export const breakpoint = {
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xlg: "1440px",
};

export const media = {
  sm: (...args) =>
    css`
      @media screen and (max-width: ${breakpoint.md}) {
        ${css(...args)}
      }
    `,
  md: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.md}) {
        ${css(...args)}
      }
    `,
  lg: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.lg}) {
        ${css(...args)}
      }
    `,
  xlg: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.xlg}) {
        ${css(...args)}
      }
    `,
};
