import { Card } from "./style";
import { IProduct, useCart } from "../../providers/Cart";
import Button from "@material-ui/core/Button";
import { formatter } from "../../services/formatter";

interface ProductCardProps {
  currentProduct: IProduct;
  isInCart: boolean;
}

const ProductCard = ({ currentProduct, isInCart }: ProductCardProps) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <Card isInCart={isInCart}>
      <img src={currentProduct.image_url} alt={currentProduct.name} />
      <div className="textDiv">
        <h2>{currentProduct.name}</h2>
        <h3>{currentProduct.description}</h3>
        <h2>{formatter.format(currentProduct.price)}</h2>
      </div>
      <div className="buttonDiv">
        {isInCart ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeFromCart(currentProduct)}
          >
            Remover do carrinho
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => addToCart(currentProduct)}
          >
            Adicionar ao carrinho
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
