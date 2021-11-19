import styled, { css } from "styled-components";

interface ProductCardProps {
  isInCart: boolean;
}

export const Card = styled.div<ProductCardProps>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  height: 464px;
  width: 100%;
  padding: 16px 12px;
  font-family: var(--font1);
  background-color: white;
  margin: 10px 0px;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 10px gray;
  img {
    max-height: 200px;
    max-width: 200px;
  }
  text-overflow: ellipsis;
  div.textDiv {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;

    width: 250px;
  }
  div.buttonDiv {
    display: flex;
  }
  @media (max-width: 480px) {
    div.buttonDiv {
      width: 100%;
      height: 60px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0px 12px;
    height: 260px;
    justify-content: space-around;
    margin-top: 8px;
    div.textDiv {
      width: 280px;
      justify-content: space-between;
      flex-flow: column nowrap;
      align-items: flex-start;
    }

    div.buttonDiv {
      width: 100%;
      height: 60px;
    }
  }
  @media (min-width: 769px) {
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 420px;
    height: 400px;

    margin: 8px 4px;

    div.buttonDiv {
      width: 70%;
      height: 60px;
      align-items: center;
      align-content: center;
      justify-content: center;
      
      button{
        background-color: #219653;
        color: white;
      }
    }

    div.textDiv {
      padding-top: 10px;
      border-top: 0.1px solid grey;
  
    }
  }

  ${(props) =>
    props.isInCart &&
    css`
      @media (min-width: 769px) {
        flex-flow: row nowrap;
        width: 100%;
        height: 100px;
        margin: 1px;
        div.buttonDiv {
          width: 15%;
        }

        div.textDiv {
          border: 0px;
        }
        img {
          max-width: 48px;
          max-height: 56px;
          width: auto;
          height: auto;
        }
      }
    `};
`;
