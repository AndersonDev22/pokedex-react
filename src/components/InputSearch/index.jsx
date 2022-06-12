import React, { useState } from "react";
import { TextSearchContainer } from "./styled";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const { onSearch } = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <TextSearchContainer>
            <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            <button onClick={onButtonClickHandler} >Buscar</button>
        </TextSearchContainer>
    )
}

export default Searchbar;