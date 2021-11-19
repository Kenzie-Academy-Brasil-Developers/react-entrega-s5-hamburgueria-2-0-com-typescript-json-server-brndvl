import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  position: fixed;
  top: 0px;
  background-color: var(--kenzieblue);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: 2rem;

  Button {
    background-color: transparent;
    color: white;
    height: 100%;
    border: none;
    font-family: var(--font2);
    font-size: 1rem;
  }
  Button:hover {
    opacity: 1;
  }

  span.cartSize {
    position: absolute;
    background-color: grey;
    top: 11px;
    right: 83px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    text-align: center;
    font-size: 1rem;
  }
  span.cartAndCounter {
    margin-right: 0.5rem;
  }

  @media (min-width: 481px) {
    font-size: 1.5rem;
    Button {
      font-size: 1.1rem;
    }
    span.cartSize {
      right: 90px;
      font-size: 1rem;
    }
  }
`;
