import styled from "styled-components";

export const Button = styled.button.attrs<{ $colorVar?: `--${string}` }>(
  (props) => ({ $colorVar: props.$colorVar || "--onSurface" }),
)`
  position: relative;
  display: flex;
  padding: 0.75rem;

  background-color: ${(props) => `rgb(var(${props.$colorVar}))`};
  border: none;
  border-radius: 0.5rem;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-color: rgb(var(--canvas));
    border-radius: 0.5rem;
  }

  &:disabled {
    background-color: ${(props) => `rgb(var(${props.$colorVar}) / 0.5)`};
  }

  &:disabled > * {
    opacity: 0.5;
  }

  &:enabled:hover {
    cursor: pointer;
    background-color: ${(props) => `rgb(var(${props.$colorVar}) / 0.75)`};
  }

  &:enabled:hover > * {
    opacity: 0.75;
  }

  &:focus {
    outline: 2px solid black;
  }
`;

export const AccentButton = styled(Button).attrs(() => ({
  $colorVar: "--accent",
}))``;
