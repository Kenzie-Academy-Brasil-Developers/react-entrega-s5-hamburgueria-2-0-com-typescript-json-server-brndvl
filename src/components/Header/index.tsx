import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Badge } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/Cart";
import { useUser } from "../../providers/User";
import { FiLogIn } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: "Nunito, sans-serif",
    fontWeight: 600,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

  icon: {
    marginRight: ".5rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  const { isLoggedIn, logout } = useUser();

  const { cart } = useCart();

  const history = useHistory();

  const [cartSize, setCartSize] = useState(cart.length);

  const handleClickToCart = () => {
    history.push("/cart");
  };

  const handleClickToLogin = () => {
    history.push("/login");
  };

  const handleClickToHome = () => {
    history.push("/");
  };

  useEffect(() => {
    setCartSize(cart.length);
  }, [cart.length, isLoggedIn]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Button onClick={handleClickToHome}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Kenzie Burguer 2.0
          </Typography>
        </Button>
        <nav>
          <Button color="inherit" onClick={handleClickToCart}>
            <Badge badgeContent={cart.length} color="secondary">
              <FiShoppingCart className={classes.icon} size={20} />
            </Badge>
          </Button>

          {isLoggedIn ? (
            <Button color="secondary" onClick={logout}>
              <FiLogIn className={classes.icon} size={20} />
            </Button>
          ) : (
            <Button
              onClick={handleClickToLogin}
            >
              <FiLogIn className={classes.icon} size={20} />
      
            </Button>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
