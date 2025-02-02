import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import { usePets } from "~/services/PetsStore";

import { DownloadManager } from "~/components/DownloadManager";
import { PetCard, PetList } from "~/components/PetCard";
import { SearchSortCombo } from "~/components/SearchSortCombo";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const { data, isLoading, error } = usePets();
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const onSelectAll = useCallback(() => {
    setSelectedImages(data.map(({ id }) => id));
  }, [data]);

  const onClearSelection = useCallback(() => {
    setSelectedImages([]);
  }, []);

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
      <ActionContainer>
        <SearchSortCombo
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSortOrder={setSortOrder}
        />
        <DownloadManager
          selected={selectedImages}
          onSelectAll={onSelectAll}
          onClearSelection={onClearSelection}
        />
      </ActionContainer>
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

const ActionContainer = styled.div`
  z-index: 100;
  position: sticky;
  top: 2rem;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 2rem;
`;

const ErrorMessage = styled.p`
  margin: 2rem;

  color: red;
  font-weight: 600;
  text-align: center;
`;
