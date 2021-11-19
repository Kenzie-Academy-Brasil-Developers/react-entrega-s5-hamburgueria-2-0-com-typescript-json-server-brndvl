import { IProduct, useCart } from "../../providers/Cart";
import ProductCard from "../ProductCard";

const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      {cart?.map((el: IProduct, index) => (
        <ProductCard isInCart={true} currentProduct={el} key={index} />
      ))}
    </>
  );
};

export default Cart;
