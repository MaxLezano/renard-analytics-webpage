import React from "react";
import imgExperience from "../../../assets/images/technologies.svg"

const Experience = () => {
  return (
    <section>
      <p>Nuestra experiencia</p>
      <h3>Un equipo de profesionales con experiencia.</h3>
      <p>Contamos con un equipo de experimentados ingenieros al corriente con un gran abanico de tecnologías.</p>
      <img src={imgExperience} alt="iconos de lenguaje de programacion"/>
    </section>
  );
};

export default Experience;
