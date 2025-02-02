import styled from "styled-components";

export const Checkbox = styled.input.attrs<{ $size?: string }>((props) => ({
  type: "checkbox",
  $size: props.$size || "1.25rem",
}))`
  height: ${(props) => `${props.$size}`};
  width: ${(props) => `${props.$size}`};

  accent-color: rgb(var(--accent));

  &:hover {
    cursor: pointer;
  }
`;
