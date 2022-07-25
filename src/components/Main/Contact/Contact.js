import React from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import imgContact from "../../../assets/images/email-illustration.svg";
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <div className="container-fluid justify-content-center text-center my-5">
      <p>Contactanos</p>
      <div className="row d-flex">
        <div className="col-6">
          <h3>Todas sus consultas son bienvenidas!</h3>
          <p>
            Estamos a su disposición por cualquier consulta via correo
            electrónico o través de cualquiera de nuestras redes sociales.
          </p>
        </div>
        <div className="col-6">
          <img className="imgSize" src={imgContact} alt="del vago a la par de una carta gigante" />
        </div>
          <Link to="/contact-us">
            <Button description={"Contactar"} />
          </Link>
      </div>
    </div>
  );
};

export default Contact;
