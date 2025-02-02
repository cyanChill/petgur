import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  max-width: 768px;
`;

export function About() {
  return (
    <Container>
      <Text>
        Petgur is a simple yet intuitive website that allows you to browse our
        little friends. In addition, you can download their images to use as a
        background or to bring a smile to your face.
      </Text>
    </Container>
  );
}
