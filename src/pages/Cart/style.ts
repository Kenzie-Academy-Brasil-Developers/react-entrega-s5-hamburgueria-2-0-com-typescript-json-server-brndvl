import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--backgroundcolor);
  width: 100vw;
  min-height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 769px) {
    flex-flow: row-reverse wrap;
    justify-content: space-around;
  }
  @media (min-width: 769px) {
    div.cartDiv {
      width: 50%;
    }
  }
`;
