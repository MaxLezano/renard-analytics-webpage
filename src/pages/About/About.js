import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ourValues, profiles } from "../../dataRenard";
import "../../components/Main/Main.css";
import "./About.css"

const About = () => {
  return (
    <>
      <Header className={"bgPages"} />
      <div className="container-fluid text-center mt-5">
        <div className="row d-flex justify-content-center">
          <section className="col-12 col-lg-4 my-2 justify-content-center">
            <p className="mb-0 parrafoStyle">ACERCA DE RENARD</p>
            <h3 className="h3Style">Big Data deportivo a tu alcance</h3>
            <p className="text-white">
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
          <section className="col-12 col-lg-4 my-2">
            <img
              className="imgSize"
              src="https://img.freepik.com/vector-gratis/big-data-center-rack-sala-servidores-proceso-ingenieria-trabajo-equipo-tecnologia-informatica-almacenamiento-nube_39422-1032.jpg?w=826&t=st=1659018505~exp=1659019105~hmac=f695c5b25f935a2ba18b984b41a1c9c129d38debe9757ec7a28c3127ee6a22c4"
              alt="big data reference"
            />
          </section>
        </div>

        <div className="container-fluid text-center mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-12 col-lg-4 my-2">
              <img
                className="imgSize"
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-estadisticas-sitio_114360-1434.jpg?w=740&t=st=1659019273~exp=1659019873~hmac=1f506233fa394b053d2b58006685ef1359cc2872110769128a598c85ee1fe925"
                alt="big data reference"
              />
            </section>
            <section className="col-12 col-lg-4 my-2">
              <p className="mb-0 parrafoStyle">NUESTRA VISIÓN</p>
              <h3 className="h3Style">
                Ser referentes regionales en el ámbito del big data deportivo.
              </h3>
              <p className="text-white">
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

        <section className="container-fluid text-center mt-5">
          <p className="mb-0 parrafoStyle">NUESTROS VALORES</p>
          <h3 className="h3Style">Guían nuestro día a día.</h3>
          <p className="text-white">
            En renard creemos estos principios, y trabajamos a diario para poder
            cumplirlos.
          </p>
        </section>

        <div className="container-fluid col-12 col-md-10 col-lg-12 col-xl-10 px-0">
          <div className="row g-4">
            {ourValues.map((ourValue) => (
              <div className="col-12 col-md-6 col-lg-4 px-0 bg-c d-flex justify-content-center">
                <div className="card border-0 rounded-4 text-center bg-c cardOurValues">
                  <img
                    src={ourValue.image}
                    className="align-self-center col-2 pt-3"
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

        <div className="container py-5 d-flex justify-content-center">
          <div className="row d-flex col-xl-10">
            {profiles.map((profile) => (
              <div className="col-12 col-sm-6 col-lg-4 p-0 d-flex justify-content-center profile">
                <div className="card bg-c profile">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <img
                        src={profile.image}
                        className="rounded-circle img-fluid"
                        alt="profile pic"
                      />
                    </div>
                    <h4 className="mb-2">{profile.name}</h4>
                    <p className="text-muted mb-0">
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
      </div>
      <Footer />
    </>
  );
};

export default About;
