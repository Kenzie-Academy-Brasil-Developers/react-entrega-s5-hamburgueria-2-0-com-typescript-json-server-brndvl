import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

interface IUserProps {
  children: ReactNode;
}

export interface IUserData {
  username: string;
  email: string;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

interface UserProviderData {
  token: string;
  registerUser: (data: IUserData) => void;
  login: (data: ILoginData) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: IUserProps) => {
  const history = useHistory();

  const [token, setToken] = useState(
    JSON.stringify(localStorage.getItem("token")) || ""
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const registerUser = (data: IUserData) => {
    axios
      .post(`https://api-kenzie-burgueria.herokuapp.com/register`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const login = (data: ILoginData) => {
    axios
      .post(`https://api-kenzie-burgueria.herokuapp.com/login`, data)
      .then((res) => {
        setToken(res.data.access);
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      })
      .catch((err) => console.log(err));
    history.push("/");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{ token, registerUser, login, logout, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
