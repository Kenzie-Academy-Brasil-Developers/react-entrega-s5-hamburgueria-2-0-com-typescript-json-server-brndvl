import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { UserProvider } from "./User";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};

export default Providers;
