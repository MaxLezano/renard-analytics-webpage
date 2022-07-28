import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ourValues, profiles } from "../dataRenard";
import "../components/Main/Main.css";
import "./About.css"

const About = () => {
  return (
    <>
      <Header className={"bgPages"} />
      <div className="container-fluid m-5 text-center">
        <div className="row d-flex justify-content-center">
          <section className="col-4 justify-content-center">
            <p className="parrafoStyle">ACERCA DE RENARD</p>
            <h3 className="h3Style">Big Data deportivo a tu alcance</h3>
            <p>
              Somos un equipo de ingenieros de Argentina y Ecuador. Nos unimos
              con la misión de acercar tecnologías de análisis de datos de clase
              mundial a clubes deportivos de latinoamérica para que puedan
              maximizar su potencial.
            </p>
            <Button
              description={"Nuestros productos"}
              className={"btn btn-danger my-3 px-5"}
            />
          </section>
          <section className="col-4">
            <img
              className="imgSize"
              src="https://img.freepik.com/vector-gratis/big-data-center-rack-sala-servidores-proceso-ingenieria-trabajo-equipo-tecnologia-informatica-almacenamiento-nube_39422-1032.jpg?w=826&t=st=1659018505~exp=1659019105~hmac=f695c5b25f935a2ba18b984b41a1c9c129d38debe9757ec7a28c3127ee6a22c4"
              alt="big data reference"
            />
          </section>
        </div>

        <div className="container-fluid text-center my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-4">
              <img
                className="imgSize"
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-estadisticas-sitio_114360-1434.jpg?w=740&t=st=1659019273~exp=1659019873~hmac=1f506233fa394b053d2b58006685ef1359cc2872110769128a598c85ee1fe925"
                alt="big data reference"
              />
            </section>
            <section className="col-4">
              <p className="parrafoStyle">NUESTRA VISIÓN</p>
              <h3 className="h3Style">
                Ser referentes regionales en el ámbito del big data deportivo.
              </h3>
              <p>
                El big data deportivo ya es una realidad en muchos países.
                Queremos ser referentes en acercar las últimas tecnologías en
                deporte a los clubes de la región para que compitan a nivel
                global.
              </p>
              <Button
                description={"Contactar"}
                className={"btn btn-danger my-3 px-5"}
              />
            </section>
          </div>
        </div>

        <section className="container-fluid text-center my-5">
          <p className="parrafoStyle">NUESTROS VALORES</p>
          <h3 className="h3Style">Guían nuestro día a día.</h3>
          <p>
            En renard creemos estos principios, y trabajamos a diario para poder
            cumplirlos.
          </p>
        </section>

        <div className="container">
          <div className="row d-flex g-4">
            {ourValues.map((ourValue) => (
              <div className="col-4 bg-c d-flex align-items-stretch">
                <div className="card border-0 rounded text-center bg-c cardOurValues">
                  <img
                    src={ourValue.image}
                    className="align-self-center col-2"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title parrafoStyle">
                      {ourValue.title}
                    </h5>
                    <p className="card-text">{ourValue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              {profiles.map((profile) => (
                <div className="col-md-12 col-xl-4 profile">
                  <div className="card bg-c profile">
                    <div className="card-body text-center">
                      <div className="mt-4 mb-4">
                        <img
                          src={profile.image}
                          className="rounded-circle img-fluid"
                          alt="profile pic"
                        />
                      </div>
                      <h4 className="mb-2">{profile.name}</h4>
                      <p className="text-muted mb-4">
                        @{profile.title} <span className="mx-2">|</span>{" "}
                        <a
                          className="link"
                          href={profile.url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          IN
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
