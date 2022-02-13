import React, { HTMLAttributes, ReactNode } from "react";
import { getStyles } from "../../utils/getStyles";

import "/src/styles/global.css";

const buttonStyles = {
  base: "px-10 py-2 rounded-md font-bold text-xl inline-flex gap-x-2",
  primary: "bg-blue-900 text-white",
  secondary: "bg-orange-600 text-white",
  small: "text-sm px-4 py-2",
  large: "px-20 py-10",
};

const Button = ({ className, children, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${getStyles(variant, buttonStyles)} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | `${mainVariant}_${subVariant}`
    | undefined;
}
type mainVariant = "primary" | "secondary";
type subVariant = "small" | "large";

export default Button;
