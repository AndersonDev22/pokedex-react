import React, { useContext } from "react";
import FavoriteContext from "../../contexts/FavContext";
import { ButtonFav, Card, Title } from "./styled";



const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <Card>
            <ButtonFav>
                <button onClick={onHeartClick}>
                    {heart}
                </button>
            </ButtonFav>

            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />

            <Title>
                <h3> {pokemon.name}</h3>
                <h2>#{pokemon.id}</h2>
            </Title>

            <div>
                <div>
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>

            </div>
        </Card>
    )
}

export default Pokemon;