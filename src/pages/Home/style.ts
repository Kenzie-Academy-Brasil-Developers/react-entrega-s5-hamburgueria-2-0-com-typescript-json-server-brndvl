import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  background-color: var(--backgroundcolor);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
`;

export const ProdContainer = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;
