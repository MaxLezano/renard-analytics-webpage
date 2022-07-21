import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <p>Contactanos</p>
      <h3>Todas sus consultas son bienvenidas!</h3>
      <p>
        Estamos a su disposición por cualquier consulta via correo electrónico o
        través de cualquiera de nuestras redes sociales.
      </p>
      <img alt="del vago a la par de una carta gigante" />
      <Link to="/contact-us">
        <Button description={"Contactar"} />
      </Link>
    </section>
  );
};

export default Contact;
