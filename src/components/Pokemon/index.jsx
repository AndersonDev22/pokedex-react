import React, { useContext } from "react";
import FavoriteContext from "../../contexts/FavContext";
import { Card, Title } from "./styled";



const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <Card>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />


            <Title>
                <h3> {pokemon.name}</h3>
                <h2>#{pokemon.id}</h2>
            </Title>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-heart-btn" onClick={onHeartClick}>
                    {heart}
                </button>
            </div>
        </Card>
    )
}

export default Pokemon;