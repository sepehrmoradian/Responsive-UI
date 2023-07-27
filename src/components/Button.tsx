import React from "react";
import buttonStyle from "./styles/button.module.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div className={buttonStyle.container}>
      <button className={buttonStyle.position} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
