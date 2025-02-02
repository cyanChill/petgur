import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  background-color: rgb(var(--canvas));
  border-radius: 0.5rem;

  &:focus-within {
    outline: 2px solid black;
  }
`;

const ButtonEl = styled("button")<{ $colorVar: `--${string}` }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;

  background-color: ${(props) => `rgb(var(${props.$colorVar}))`};
  border: none;

  &:disabled {
    opacity: 0.5;
  }

  &:enabled:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  &:focus {
    outline: none;
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $colorVar: `--${string}`;
}

export function Button(props: Props) {
  return (
    <Container>
      <ButtonEl {...props} />
    </Container>
  );
}
