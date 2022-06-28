import React from "react";

import './Button.css'
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button-add-poke">{children}</button>
  )
};

export default Button;
