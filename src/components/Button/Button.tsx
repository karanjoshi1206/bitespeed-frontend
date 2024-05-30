import React from "react";
import "./Button.scss";
type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {props.icon && <div className="button_icon">{props.icon}</div>}
      {children}
    </button>
  );
};
export default Button;
