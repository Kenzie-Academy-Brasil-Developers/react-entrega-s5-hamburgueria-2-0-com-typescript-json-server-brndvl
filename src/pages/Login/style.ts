import styled from "styled-components";

export const Container = styled.div`
  figure {
    display: none;

    img {
      margin-top: 7rem;
      width: 100%;
    }
  }
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  @media (min-width: 481px) {
    flex-flow: column wrap;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    figure {
      max-width: 50%;
      max-height: 50%;
    }
    img {
      max-width: 130%;
    }
  }
  @media (min-width: 769px) {
    figure {
      display: block;
      width: 50%;
      height: 50%;
    }
    div.formsContainer {
      width: 40%;
      text-align: center;
    }
    flex-flow: row wrap;
    column-count: 2;
  }
  h6 {
    text-align: center;
  }

  button {
    width: 200px;
    height: 50px;
    margin-top: 1rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #219653;
  }
`;
