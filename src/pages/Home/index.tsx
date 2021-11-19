import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../../providers/Cart";
import ProductCard from "../../components/ProductCard";
import { Container, ProdContainer } from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ListaDeProdutosTeste } from "../../components/ListaDeProdutos/Products";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [productsList, setProductsList] = useState<IProduct[]>(
    [] as IProduct[]
  );

  useEffect(() => {
    axios
      .get("https://api-kenzie-burgueria.herokuapp.com/products")
      .then((res) => {
        console.log(res.data)
        setProductsList(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <ProdContainer>
        {!isLoading ? (
          <CircularProgress size={50} />
        ) : (
          productsList?.map((el: IProduct, index) => (
            <ProductCard currentProduct={el} isInCart={false} key={index} />
          ))
        )}
      </ProdContainer>
    </Container>
  );
};

export default Home;
