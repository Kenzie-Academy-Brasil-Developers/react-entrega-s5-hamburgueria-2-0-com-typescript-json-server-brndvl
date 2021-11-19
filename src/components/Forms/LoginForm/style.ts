import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  input {
    margin: 5px;
    width: 15rem;
  }

  p.errorMsg {
    color: red;
    height: 1rem;
  }
  div.errorDiv {
    height: 1.1rem;
  }
  @media (min-width: 481px) {
    input {
      width: 20rem;
      height: 1.5rem;
    }
    Button {
      width: 4rem;
      height: 2rem;
    }
  }
`;
