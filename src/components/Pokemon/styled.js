import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width:20rem;
  height:25rem;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background:white;

  img{
    width:15rem;
  }

  h3{
    font-size:36px;
    color:green;
    margin-right:1rem;
  }

  h2{
    font-size:36px;
    color:green;
  }
`;

export const Title = styled.div`
  display:flex;
  justify-content:center;
  padding:0 30px;
  width:100%;
  height:0 auto;
`;

export const ButtonFav = styled.div`
display:flex;
justify-content:end;
width:100%;
padding:0 15px;

button{
  width:40px;
  height:40px;
  cursor: pointer;
}
`;