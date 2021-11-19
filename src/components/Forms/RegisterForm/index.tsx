import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserData, useUser } from "../../../providers/User";
import { FormRegister } from "./style";
import Button from "@material-ui/core/Button";

const RegisterForm = () => {
  const { registerUser } = useUser();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Formato inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IUserData) => {
    registerUser(data);
    console.log(data);
  };

  return (
    <div>
      <FormRegister onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro</h1>
        <input
          type="text"
          {...register("username")}
          placeholder="Nome de usuário"
        />

        <div className="errorDiv">
          {errors.username && (
            <p className="errorMsg">{errors.username.message}</p>
          )}
        </div>
        <input
          type="text"
          {...register("email")}
          placeholder="Seu melhor email"
        />

        <div className="errorDiv">
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>

        <input type="password" {...register("password")} placeholder="Senha" />

        <div className="errorDiv">
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>

        <Button type="submit" variant="contained" color="primary">
          Cadastre-se
        </Button>
      </FormRegister>
    </div>
  );
};

export default RegisterForm;
