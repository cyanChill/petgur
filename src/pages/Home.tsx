import styled from "styled-components";

import { usePets } from "~/services/PetsStore";

import { PetCard, PetList } from "~/components/PetCard";

export function Home() {
  const { data, isLoading, error } = usePets();

  if (isLoading) return undefined;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  return (
    <PetList>
      {data.map((pet, idx) => (
        <PetCard key={idx} index={idx} pet={pet} />
      ))}
    </PetList>
  );
}

const ErrorMessage = styled.p`
  color: red;
  font-weight: 600;
  text-align: center;
`;
