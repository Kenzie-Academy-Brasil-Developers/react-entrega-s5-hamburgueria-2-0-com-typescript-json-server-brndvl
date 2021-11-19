import { useCart } from "../../providers/Cart";
import { formatter } from "../../services/formatter";
import Button from "../Button";
import CartSummary from "./style";

const CartReducer = () => {
  const { cart } = useCart();

  return (
    <CartSummary>
      <h3>Valor Total: </h3>
      <h3>{formatter.format(cart.reduce((acc, el) => acc + el.price, 0))}</h3>
      <Button classNameProp="purchaseBtn">Finalizar Compra</Button>
    </CartSummary>
  );
};

export default CartReducer;
