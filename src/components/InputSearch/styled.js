import styled from "styled-components";

export const TextSearchContainer = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;

  input{
    font-size:18px;
    width:25rem;
    border-radius:5px;
    padding:5px;
    outline:none;
    margin-right:10px;
    border:2px solid #071F46;

    &:focus{
      border:2px solid red;
    }
  }

  button{
    width:8rem;
    border-radius:5px;
    background:yellow;
    border:2px solid #071F46;
    font-weight:600;
    cursor: pointer;

    &:hover{
     filter:brightness(70%)
  }
}
`;