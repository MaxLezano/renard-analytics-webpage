import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ourValues, profiles } from "../../dataRenard";

const About = () => {
  return (
    <>
      <Header className='bgPages' />
      <div className="container-fluid text-center mg-5">
        <section className=" ">
          <img alt="referencia a big data" />
          <p className="title">ACERCA DE RENARD</p>
          <h3 className="">Big Data deportivo a tu alcance</h3>
          <p>
            Somos un equipo de ingenieros de Argentina y Ecuador. Nos unimos con
            la misión de acercar tecnologías de análisis de datos de clase
            mundial a clubes deportivos de latinoamérica para que puedan
            maximizar su potencial.
          </p>
          <Button
            description={"Nuestros productos"}
            className={"btn btn-danger my-3 px-5"}
          />
        </section>
        <section className="">
          <img alt="referencia a big data" />
          <p className="title">NUESTRA VISIÓN</p>
          <h3 className="">
            Ser referentes regionales en el ámbito del big data deportivo.
          </h3>
          <p>
            El big data deportivo ya es una realidad en muchos países. Queremos
            ser referentes en acercar las últimas tecnologías en deporte a los
            clubes de la región para que compitan a nivel global.
          </p>
          <Button
            description={"Contactar"}
            className={"btn btn-danger my-3 px-5"}
          />
        </section>
        <section className="">
          <p className="title">NUESTROS VALORES</p>
          <h3 className="">Guían nuestro día a día.</h3>
          <p>
            En renard creemos estos principios, y trabajamos a diario para poder
            cumplirlos.
          </p>
        </section>

        <div className="container-fluid">
          <div className="row d-flex g-4">
            {ourValues.map((ourValues) => (
              <div className="col-4 ">
                <div className="card border-0 text-center">
                  <img
                    src={ourValues.image}
                    className="align-self-center col-1"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ourValues.title}</h5>
                    <p className="card-text">{ourValues.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="">
          <p className="">Nuestro Equipo</p>
          <h3 className="">Quienes somos Renard</h3>
          <p>
            Conecta con nosotros a través de nuestras redes, estaremos atentos.
          </p>
        </section>
        <section className="">
          <div>
            {profiles.map((profile) => (
              <Card key={Math.random()} card={profile} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
