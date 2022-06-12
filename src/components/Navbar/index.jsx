import React, { useContext } from "react";
import FavContext from "../../contexts/FavContext";
import { NavbarContainer } from "./styled";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavContext);

  return (
    <NavbarContainer>
      <div>
        <h1>Pokedex-ReactJS</h1>
      </div>
      <div>
        <span>Eu tenho {favoritePokemons.length} pokemon(s) Favorito(s)</span>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;