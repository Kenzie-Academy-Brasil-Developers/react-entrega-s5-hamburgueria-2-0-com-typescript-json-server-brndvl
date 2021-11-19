import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-flow: column nowrap;
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

  div.errorDiv {
    height: 1.1rem;
  }

  p.errorMsg {
    color: red;
  }
  @media (min-width: 481px) {
    input {
      width: 20rem;
      height: 1.5rem;
    }
    Button {
      width: 9rem;
      height: 2rem;
    }
  }
`;
