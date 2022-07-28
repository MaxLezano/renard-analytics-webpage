import React from "react";

const Button = ({description, className, type, dataBsToggle, dataBsTarget}) => {
  return (
    <button className={className} type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}>{description}</button>
  );
};

export default Button;
