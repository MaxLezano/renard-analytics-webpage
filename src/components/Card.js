import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <img src={card.image} alt="icon or img" />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {card.url ? (
        <a href={card.url} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : null}
    </div>
  );
};

export default Card;
