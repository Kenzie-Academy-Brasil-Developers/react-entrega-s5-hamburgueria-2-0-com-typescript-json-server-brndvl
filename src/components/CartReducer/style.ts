import styled from "styled-components";

const CartSummary = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  align-items: center;
  background-color: #fff;
  border-radius: 0.6rem;
  font-family: var(--font1);
  padding: 8px 12px;
  @media (min-width: 769px) {
    width: 350px;
  }
`;

export default CartSummary;
