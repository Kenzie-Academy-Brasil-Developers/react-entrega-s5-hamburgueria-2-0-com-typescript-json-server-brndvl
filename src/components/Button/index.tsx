import { ReactNode } from "react";
import { StyledButton } from "./style";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNameProp: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, classNameProp, type, ...rest }: IButton) => {
  return (
    <StyledButton className={classNameProp} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
