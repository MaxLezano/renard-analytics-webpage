import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ourValues, profiles } from '../../dataRenard';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <section className="contAbout">
        <img alt="referencia a big data" />
        <p>ACERCA DE RENARD</p>
        <h3>Big Data deportivo a tu alcance</h3>
        <p>
          Somos un equipo de ingenieros de Argentina y Ecuador. Nos unimos con
          la misión de acercar tecnologías de análisis de datos de clase mundial
          a clubes deportivos de latinoamérica para que puedan maximizar su
          potencial.
        </p>
        <Button
          description={"Nuestros productos"}
          className={"btn btn-danger my-3 px-5"}
        />
      </section>
      <section>
        <img alt="referencia a big data" />
        <p>NUESTRA VISIÓN</p>
        <h3>Ser referentes regionales en el ámbito del big data deportivo.</h3>
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
      <section>
        <p>NUESTROS VALORES</p>
        <h3>Guían nuestro día a día.</h3>
        <p>
          En renard creemos estos principios, y trabajamos a diario para poder
          cumplirlos.
        </p>
      </section>
      <section>
        <div>
          {ourValues.map((value) => (
            <Card key={Math.random()} card={value} />
          ))}
        </div>
      </section>
      <section>
        <p>Nuestro Equipo</p>
        <h3>Quienes somos Renard</h3>
        <p>
          Conecta con nosotros a través de nuestras redes, estaremos atentos.
        </p>
      </section>
      <section>
        <div>
          {profiles.map((profile) => (
            <Card key={Math.random()} card={profile} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
