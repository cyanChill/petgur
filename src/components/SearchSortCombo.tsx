import styled from "styled-components";

import { Select } from "./Select";

const Container = styled.div`
  display: flex;
  gap: 0.25rem;

  background-color: rgb(var(--surface));
  outline: 2px solid rgb(var(--onSurface));
  border-radius: 0.5rem;

  &:has(input:focus) {
    outline-color: rgb(var(--accent));
  }
`;

const Input = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  padding: 0.5rem 1rem;

  background: transparent;
  font-size: 1.25rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export function SearchSortCombo(props: {
  searchQuery: string;
  setSearchQuery: (newQuery: string) => void;
  setSortOrder: (order: "asc" | "desc") => void;
}) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search"
        value={props.searchQuery}
        onChange={(e) => props.setSearchQuery(e.target.value)}
      />
      <Select
        onChange={(e) =>
          props.setSortOrder(e.target.value === "asc" ? "asc" : "desc")
        }
        $borderless
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </Select>
    </Container>
  );
}
