import MainBanner from "../MainBanner/MainBanner";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { services } from '../../dataRenard';

const Main = () => {
  return (
    <div>
      <MainBanner />
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

      <div>
        <section>
          <h2>Nuestros Servicios</h2>
          <div>
            {services.map((service) => (
              <Card key={Math.random()} card={service} />
            ))}
          </div>
        </section>
      </div>

      <section>
        <p>Nuestra experiencia</p>
        <h3>Un equipo de profesionales con experiencia.</h3>
        <p>
          Contamos con un equipo de experimentados ingenieros al corriente con
          un gran abanico de tecnologías.
        </p>
        <img alt="iconos de lenguaje de programacion" />
      </section>
      <section>
        <p>Contactanos</p>
        <h3>Todas sus consultas son bienvenidas!</h3>
        <p>
          Estamos a su disposición por cualquier consulta via correo electrónico
          o través de cualquiera de nuestras redes sociales.
        </p>
        <img alt="del vago a la par de una carta gigante" />
        <Link to="/contact-us">
          <Button description={"Contactar"} />
        </Link>
      </section>
    </div>
  );
};

export default Main;
