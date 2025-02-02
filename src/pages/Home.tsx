import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import { usePets } from "~/services/PetsStore";

import { PetCard, PetList } from "~/components/PetCard";
import { SearchSortCombo } from "~/components/SearchSortCombo";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const { data, isLoading, error } = usePets();
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const toggleSelection = useCallback((id: number) => {
    setSelectedImages((prev) => {
      if (prev.includes(id)) return prev.filter((imgId) => imgId !== id);
      return [...prev, id];
    });
  }, []);

  const filteredPets = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery === "") return data;
    return data.filter(
      (pet) =>
        pet.title.toLowerCase().includes(trimmedQuery) ||
        pet.description.toLowerCase().includes(trimmedQuery),
    );
  }, [data, searchQuery]);

  const sortedPets = useMemo(() => {
    return [...filteredPets].sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title),
    );
  }, [filteredPets, sortOrder]);

  if (isLoading) return undefined;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  return (
    <>
      <SearchSortCombo
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSortOrder={setSortOrder}
      />
      <PetList>
        {sortedPets.map((pet, idx) => (
          <PetCard
            key={pet.id}
            index={idx}
            pet={pet}
            isSelected={selectedImages.includes(pet.id)}
            toggleSelection={toggleSelection}
          />
        ))}
      </PetList>
    </>
  );
}

const ErrorMessage = styled.p`
  color: red;
  font-weight: 600;
  text-align: center;
`;
