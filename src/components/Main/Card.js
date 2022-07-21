import React from "react";

const Card = ({ info }) => {
  return (
    <div>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
    </div>
  );
};

export default Card;
