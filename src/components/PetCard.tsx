import styled, { keyframes } from "styled-components";

import type { Pet } from "~/services/PetsStore";

import { Checkbox } from "./Checkbox";

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
  padding: 0.5rem;
  padding-block-start: 0;

  opacity: 0;
  animation: ${fadeIn} 300ms linear forwards;
  animation-delay: ${(props) => `${props.$delayMs}ms`};

  &:hover {
    cursor: pointer;
  }

  &:hover img {
    transform: scale(1.15);
  }

  &:has(input:checked) {
    background-color: rgb(var(--surface));
    border-radius: 1rem;
    outline: 2px solid rgb(var(--accent));
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-inline: -0.5rem;
  overflow: hidden;
  border-radius: 1rem;
  aspect-ratio: 1 / 1;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  transition: transform 300ms ease-in-out;
`;

const Selectionbox = styled(Checkbox)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const Date = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-inline: 0.5rem;

  background-color: rgb(var(--accent));
  color: rgb(var(--surface));

  @media (min-width: 400px) {
    width: auto;
    border-start-start-radius: 0.25rem;
  }
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
  isSelected: boolean;
  pet: Pet;
  toggleSelection: (id: number) => void;
};

export function PetCard({ index, pet, isSelected, toggleSelection }: Props) {
  return (
    <Container $delayMs={index * 50} onClick={() => toggleSelection(pet.id)}>
      <ImageContainer>
        <Image src={pet.url} alt={pet.description} />
        <Date>{pet.created}</Date>
      </ImageContainer>
      <Selectionbox
        checked={isSelected}
        // To stop click propagation to container.
        onClick={(e) => e.stopPropagation()}
        onChange={() => toggleSelection(pet.id)}
      />
      <Title>{pet.title}</Title>
      <Description>{pet.description}</Description>
    </Container>
  );
}

// Note: There seems to be performance issues when rendering 4 columns.
export const PetList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;
