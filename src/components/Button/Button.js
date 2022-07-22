import React from "react";

const Button = ({description, className}) => {
  return (
    <button className={className}>{description}</button>
  );
};

export default Button;
