import React from "react";

const Button = ({description, className, type, dataBsToggle, dataBsTarget, onClick}) => {
  return (
    <button className={className} type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} onClick={onClick}>{description}</button>
  );
};

export default Button;
