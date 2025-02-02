import styled from "styled-components";

export const SVGImage = styled.img.attrs<{ $size?: string }>((props) => ({
  $size: props.$size || "1.25rem",
}))`
  pointer-events: none;
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
`;
