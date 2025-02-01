import styled, { keyframes } from "styled-components";

import type { Pet } from "~/services/PetsStore";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.article<{ $delayMs: number }>`
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 300ms linear forwards;
  animation-delay: ${(props) => `${props.$delayMs}ms`};
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
`;

const Title = styled.h2`
  font-weight: 600;
`;

const Description = styled.p`
  color: rgb(var(--foreground) / 0.6);
  font-size: 0.875rem;
`;

type Props = {
  index: number;
  pet: Pet;
};

export function PetCard({ index, pet }: Props) {
  return (
    <Container $delayMs={index * 50}>
      <Image src={pet.url} alt={pet.description} />
      <Title>{pet.title}</Title>
      <Description>{pet.description}</Description>
    </Container>
  );
}

export const PetList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
`;
