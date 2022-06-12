import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  button{
    display:flex;
    justify-content:center;
    margin:10px;
    border-radius:50%;
    width:2rem;
    height:2rem;
    border:none;
    color:black;
    align-items:center;
    cursor: pointer;
    background:white;
    font-size:24px;

    &:hover{
      color:white;
      background:#071F46;
    }
  }

  h1{
    color:white;
    font-size:28px;
  }
`;