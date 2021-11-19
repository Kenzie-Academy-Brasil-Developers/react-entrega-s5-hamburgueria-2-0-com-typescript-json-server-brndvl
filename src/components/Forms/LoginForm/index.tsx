import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserData, useUser } from "../../../providers/User";
import { FormLogin } from "./style";
import Button from "@material-ui/core/Button";

const LoginForm = () => {
  const { login } = useUser();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
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
    login(data);
    console.log(data);
  };

  return (
    <FormLogin onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <input type="text" {...register("email")} placeholder="Email" />

      <div className="errorDiv">
        <p className="errorMsg">{errors.email && errors.email.message}</p>
      </div>

      <input type="password" {...register("password")} placeholder="Senha" />

      <div className="errorDiv">
        {errors.password && (
          <p className="errorMsg">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </FormLogin>
  );
};

export default LoginForm;
