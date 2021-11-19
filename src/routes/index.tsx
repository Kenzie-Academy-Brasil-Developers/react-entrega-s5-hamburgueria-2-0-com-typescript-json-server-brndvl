import { Switch, Route } from "react-router-dom";
import CartPage from "../pages/Cart";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route component={CartPage} path="/cart" />
      <Route component={Home} exact path="/" />
      <Route component={Login} exact path="/login" />
    </Switch>
  );
};

export default Routes;
