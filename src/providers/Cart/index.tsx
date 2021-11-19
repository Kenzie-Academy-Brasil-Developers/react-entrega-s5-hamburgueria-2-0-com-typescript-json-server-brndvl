import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IProduct {
  id?: number;
  name?: string;
  image_url?: string;
  price: number;
  description: string;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const storedCart = localStorage.getItem("cart");

  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    if (typeof storedCart === "string") {
      setCart(JSON.parse(storedCart));
    }
  }, [storedCart]);

  const addToCart = (product: IProduct) => {
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    setCart([...cart, product]);
  };

  const removeFromCart = (product: IProduct) => {
    const currItemIndex = cart.findIndex((el) => el.id === product.id);
    const filteredArray = cart.filter((el, index) => index !== currItemIndex);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(filteredArray));
    setCart(filteredArray);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
