import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  cursor: pointer;
  border: transparent;
  border-radius: 0.2rem;
  transition: 0.3s;

  &.purchaseBtn {
    background-color: #219653;
    opacity: 0.8;
    color: white;
    transition: 0.3s ease-in;
    @media (min-width: 421px) and (max-width: 768px) {
      height: 20%;
      width: 100%;
      font-size: 1.2rem;
    }
    @media (min-width: 769px) {
      height: 20%;
      width: 100%;
      font-size: 1.1rem;
    }
  }


  &.addToCartBtn {
    background-color: #219653;
    color: white;
    opacity: 0.9;
    width: 100%;
    @media (max-width: 420px) {
      height: 100%;
      font-size: 1.2rem;
    }
    @media (min-width: 421px) and (max-width: 768px) {
      height: 50%;
      width: 100%;
      font-size: 1.2rem;
    }
    @media (min-width: 769px) {
      height: 80%;
    }
  }

 
  &.removeFromCartBtn {
    background-color: #fa3744;
    color: white;
  }


  &.switchRegisterLogin {
    width: fit-content;
    background-color: transparent;
  }


  &.submitBtn {
    background-color: var(--greenblue);
    color: white;
    margin: 15px;
  }
`;
