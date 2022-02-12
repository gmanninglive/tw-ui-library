import React, { FunctionComponent } from "react";
import "@styles/global.css";

export interface ButtonProps {
  className: string;
  children: any;
  primary?: Boolean;
  secondary?: Boolean;
}
const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
