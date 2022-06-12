import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:20px;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
`;