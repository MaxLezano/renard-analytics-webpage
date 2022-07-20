import React from "react";

const Card = ({ info }) => {
  return (
    <div>
      {/* THERE SHOULD BE AN ICON/IMG OF THE SERVICE */}
      <h3>{info.title}</h3>
      <p>{info.description}</p>
    </div>
  );
};

export default Card;
