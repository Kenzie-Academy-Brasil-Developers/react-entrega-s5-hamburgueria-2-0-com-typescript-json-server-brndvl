import { useState } from "react";
import { Container } from "./style";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import Button from "../../components/Button";
import undraw_burger from "../../assets/images/undraw_burger.svg";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleIsRegister = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <Container>
      <figure>
        <img src={undraw_burger} alt="login" />
      </figure>
      {isRegistered ? (
        <div className="formsContainer">
          <LoginForm />
          <p>
            Não possui uma conta?
            <Button
              onClick={handleIsRegister}
              classNameProp="switchRegisterLogin"
            >
              Cadastre-se
            </Button>
          </p>
        </div>
      ) : (
        <div className="formsContainer">
          <RegisterForm />
          <p>
            Já possui uma conta?
            <Button
              onClick={handleIsRegister}
              classNameProp="switchRegisterLogin"
            >
              Entrar
            </Button>
          </p>
        </div>
      )}
    </Container>
  );
};

export default Login;
