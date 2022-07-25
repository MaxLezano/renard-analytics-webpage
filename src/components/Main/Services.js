import React from "react";
import Card from "../Card/Card";
import { services } from "../../dataRenard";

const Services = () => {
  return (
    <div>
      <section>
        <h2>Nuestros Servicios</h2>
        <div>
          {services.map((service) => (
            <Card key={Math.random()} info={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
