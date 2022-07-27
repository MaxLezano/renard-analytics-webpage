import MainBanner from "../MainBanner/MainBanner";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Teamworkimg from "../../assets/images/stats-illustration.svg"
import Card from "../Card/Card";
import { services } from "../../dataRenard";
import emailImg from "../../assets/images/email-illustration.svg";
import technologiesImg from "../../assets/images/technologies.svg";
import "../Main/Main.css";

const Main = () => {
  return (
    <div>
      <MainBanner />
      <div className="container-fluid m-5 text-center">
        <div className="row d-flex justify-content-center">
        <section className="col-4 justify-content-center">
          <p className="parrafoStyle">Trabajo en progreso</p>
          <h3 className="h3Style">Un equipo experimentado, juntos desde 2021.</h3>
          <p className="text-white">
            Somos un equipo de experimentados analistas e ingenieros de datos.
            Nos unimos hace poco, pero ya logramos mucho.
          </p>
          <table className="container-fluid text-center">
            <thead>
              <tr className="row d-flex justify-content-center">
                <th className="col-4 text-white">Soluciones completadas</th>
                <th className="col-4 text-white">En Desarrollo</th>
              </tr>
            </thead>
            <tbody className="container-fluid text-center">
              <tr className="row d-flex justify-content-center">
                <td className="col-4 text-white fw-bold">4+</td>
                <td className="col-4 text-white fw-bold">10+</td>
              </tr>
            </tbody>
          </table>
          <Link to="/about">
            <Button
              className={"btn btn-danger"} 
              description={"Ver Mas"} />
          </Link>
        </section>
        <section className="col-4">
          <img className="imgSize" src={Teamworkimg} alt="grafica de algo" />
        </section>
        </div>

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
              <p className="text-white">
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
              <p className="text-white">
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
