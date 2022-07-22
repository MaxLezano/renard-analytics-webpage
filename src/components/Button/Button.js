import React from "react";

const Button = ({description, className}) => {
  return (
    <div>
      <button className={className}>{description}</button>
    </div>
  );
};

export default Button;
