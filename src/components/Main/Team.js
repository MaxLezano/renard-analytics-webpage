import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Team = () => {
  return (
    <section>
      <img alt="grafica de algo" />
      <p>Trabajo en progreso</p>
      <h3>Un equipo experimentado, juntos desde 2021.</h3>
      <p>
        Somos un equipo de experimentados analistas e ingenieros de datos. Nos
        unimos hace poco, pero ya logramos mucho.
      </p>
      <table>
        <thead>
          <tr>
            <th>Soluciones completadas</th>
            <th>En Desarrollo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4+</td>
            <td>10+</td>
          </tr>
        </tbody>
      </table>
      <Link to="/about">
        <Button description={"Ver Mas"} />
      </Link>
    </section>
  );
};

export default Team;
