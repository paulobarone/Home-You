import { ReactNode } from "react";
import { ButtonStyled } from "./Button.style";

interface ButtonProps {
  children: ReactNode;
  type: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({ children, type }: ButtonProps) {
  return <ButtonStyled $type={type}>{children}</ButtonStyled>
}