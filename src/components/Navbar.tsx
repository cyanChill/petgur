import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "/logo.svg";

import { SVGImage } from "./SVGImage";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(var(--accent));

  // Neat trick from Kevin Powell to have a background spreads out of
  // it's container.
  box-shadow: 0 0 0 100vmax rgb(var(--accent));
  clip-path: inset(0 -100vmax);
`;

const MyLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Navbar() {
  return (
    <Nav>
      <MyLink to="/" aria-label="See all pets.">
        <SVGImage src={Logo} $size="1.5rem" />
      </MyLink>
      <MyLink to="/about">About</MyLink>
    </Nav>
  );
}
