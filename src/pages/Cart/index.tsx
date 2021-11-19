import Cart from "../../components/Cart";
import CartReducer from "../../components/CartReducer";
import { Container } from "./style";

const CartPage = () => {
  return (
    <Container>
      <div className="orderSummaryDiv">
        <CartReducer />
      </div>
      <div className="cartDiv">
        <Cart />
      </div>
    </Container>
  );
};

export default CartPage;
