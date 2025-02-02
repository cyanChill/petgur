import styled from "styled-components";

import ChevronDown from "~/assets/chevron-down-outline.svg";

import { SVGImage } from "./SVGImage";

const SelectContainer = styled.div<{ $borderless?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  outline: ${(props) =>
    props.$borderless ? "none" : "2px solid rgb(var(--onSurface))"};
  border-radius: 0.5rem;

  &:has(select:focus) {
    outline: 2px solid rgb(var(--accent));
  }
`;

const SelectInput = styled.select`
  padding: 0.5rem 0.75rem;
  padding-inline-end: 1.75rem;

  appearance: none;
  background: transparent;
  font-size: 1rem;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const SelectCheveron = styled(SVGImage).attrs(() => ({ $size: "1rem" }))`
  position: absolute;
  right: 0.375rem;
  top: 50%;

  transform: translateY(-50%);
`;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  $borderless?: boolean;
}

export function Select({ $borderless, ...rest }: Props) {
  return (
    <SelectContainer $borderless={$borderless}>
      <SelectInput {...rest} />
      <SelectCheveron aria-hidden src={ChevronDown} />
    </SelectContainer>
  );
}
