import styled from "styled-components";

import ChevronDown from "~/assets/chevron-down-outline.svg";

const Container = styled.div`
  z-index: 100;
  position: sticky;
  top: 2rem;
  left: 0;
  display: flex;
  gap: 0.25rem;
  margin-block: 2rem;

  background-color: rgb(var(--surface));
  outline: 2px solid rgb(var(--foreground) / 0.25);
  border-radius: 0.5rem;

  &:has(input:focus-within) {
    outline-color: rgb(var(--accent));
  }
`;

const Input = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.5rem 1rem;

  background: transparent;
  font-size: 1.25rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;

  &:has(select:focus-within) {
    outline: 2px solid rgb(var(--accent));
  }
`;

const SelectInput = styled.select`
  padding: 0.5rem 0.75rem;
  padding-inline-end: 1.75rem;

  appearance: none;
  background: transparent;
  font-size: 1rem;
  border: none;

  &:focus-within {
    outline: none;
  }
`;

const SelectCheveron = styled.img`
  pointer-events: none;
  height: 1rem;
  width: 1rem;
  position: absolute;
  right: 0.375rem;
  top: 50%;
  transform: translateY(-50%);
`;

export function SearchSortCombo() {
  return (
    <Container>
      <Input type="text" placeholder="Search" />
      <SelectContainer>
        <SelectInput>
          <option>A-Z</option>
          <option>Z-A</option>
        </SelectInput>
        <SelectCheveron aria-hidden src={ChevronDown} />
      </SelectContainer>
    </Container>
  );
}
