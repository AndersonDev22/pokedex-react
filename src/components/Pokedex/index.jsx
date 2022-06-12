import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import { Container } from "./styled";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1)
      }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  }
  return (
    <div>
      <div>
         <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <Container>
        
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        
        </Container>
      )}
    </div>
  );
};

export default Pokedex;