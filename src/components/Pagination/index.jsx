import React from "react";
import { Container } from "./styled";

const Pagination = (props) => {
    const { page, totalPages, onLeftClick, onRightClick } = props
    return (
        <Container>
            <button onClick={onLeftClick}>&laquo;</button>
            <h1>{page} de {totalPages}</h1>
            <button onClick={onRightClick}>&raquo;</button>
        </Container>
    )
}

export default Pagination;