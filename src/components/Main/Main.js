import MainBanner from "../MainBanner/MainBanner";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CarouselMain from "./CarouselMain";
import emailImg from "../../assets/images/email-illustration.svg";
import technologiesImg from "../../assets/images/technologies.svg";
import "../Main/Main.css";

const Main = () => {
  return (
    <div>
      <MainBanner />
      <CarouselMain />
      <div className="">
        <section className="">
          <img alt="grafica de algo" />
          <p>Trabajo en progreso</p>
          <h3>Un equipo experimentado, juntos desde 2021.</h3>
          <p>
            Somos un equipo de experimentados analistas e ingenieros de datos.
            Nos unimos hace poco, pero ya logramos mucho.
          </p>
          <table className="container-fluid text-center">
            <thead className="row d-flex">
              <tr>
                <th>Soluciones completadas</th>
                <th>En Desarrollo</th>
              </tr>
            </thead>
            <tbody className="container-fluid text-center">
              <tr className="row d-flex">
                <td>4+</td>
                <td>10+</td>
              </tr>
            </tbody>
          </table>
          <Link to="/about">
            <Button description={"Ver Mas"} />
          </Link>
        </section>

        <div className="container-fluid text-center my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-4">
              <img
                className="imgSize"
                src={technologiesImg}
                alt="technologies"
              />
            </section>
            <section className="col-4">
              <p className="parrafoStyle">Nuestra Experiencia</p>
              <h3 className="h3Style">
                Un equipo de profesionales con experiencia.
              </h3>
              <p>
                Contamos con un equipo de experimentados ingenieros al corriente
                con un gran abanico de tecnologías.
              </p>
            </section>
          </div>
        </div>

        <div className="container-fluid text-center my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-4">
              <p className="parrafoStyle">Contactanos</p>
              <h3 className="h3Style">Todas sus consultas son bienvenidas!</h3>
              <p>
                Estamos a su disposición por cualquier consulta via correo
                electrónico o través de cualquiera de nuestras redes sociales.
              </p>
              <Link to="/contact-us">
                <Button
                  className={"btn btn-danger"}
                  description={"Contactar"}
                />
              </Link>
            </section>
            <section className="col-4">
              <img className="imgSize" src={emailImg} alt="email" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
