import Button from "../Button";
import Card from "../Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ICONS from "../../assets/images/icons";

const ourValues = [
  {
    image: ICONS.simpleIcon,
    title: "Empatía",
    description:
      "Creemos que el éxito se encuentra en comprender a fondo las necesidades de nuestros clientes, por eso trabajamos juntos en encontrar la solución justa con el mejor retorno de inversión.",
  },
  {
    image: ICONS.reliableIcon,
    title: "Crecimiento conjunto",
    description:
      "Creemos que nuestro crecimiento va de la mano del de nuestros clientes, los ayudamos a desarrollarse al tiempo que aprendemos de ellos constantemente.",
  },
  {
    image: ICONS.shieldIcon,
    title: "Transparencia",
    description:
      "Porque cualquier relación fiable y duradera se basa en la confianza, nos jactamos de ser una empresa transparente interna y externamente.",
  },
  {
    image: ICONS.customizeIcon,
    title: "Mejora continua",
    description:
      "La tecnología avanza día a día, y también lo hacemos nosotros. Trabajamos de manera continua para mantenernos al corriente de las últimas herramientas disponibles.",
  },
  {
    image: ICONS.fastIcon,
    title: "Calidad a través de buenas prácticas",
    description:
      "Un producto de calidad se consigue tomando las acciones correctas desde el primer día, por eso seguir buenas prácticas en nuestro trabajo es clave para nosotros.",
  },
  {
    image: ICONS.supportIcon,
    title: "Trabajo en equipo",
    description:
      "Lo mencionado solo se puede cumplir a través de la colaboración y la comunicación continua. Nuestros clientes son parte esencial de esto y buscamos que sean parte de nuestro equipo de trabajo.",
  },
];

const profiles = [
  {
    image: "https://i.ibb.co/GCkn0XL/1567832611413.jpg",
    title: "CO-FOUNDER",
    description: "Facundo Esquivel Fagiani",
    url: "https://www.linkedin.com/in/facufref/",
  },
  {
    image: "https://i.ibb.co/7GZrM2M/1567704239574.jpg",
    title: "CO-FOUNDER",
    description: "Gerardo Gutierrez",
    url: "https://www.linkedin.com/in/ggutz/",
  },
  {
    image: "https://i.ibb.co/jVbsf3R/1619449910370.jpg",
    title: "CO-FOUNDER",
    description: "Kemel Hallar",
    url: "https://www.linkedin.com/in/kemelhallar/",
  },
  {
    image: "",
    title: "SOFTWARE DEVELOPER",
    description: "German Eliseo Vera",
    url: "https://www.linkedin.com/in/g-e-v/",
  },
  {
    image: "",
    title: "SOFTWARE DEVELOPER",
    description: "Marcos David Cortez",
    url: "https://www.linkedin.com/in/marcos-david-cortez-rodriguez-30094b171/",
  },
  {
    image: "",
    title: "SOFTWARE DEVELOPER",
    description: "Maximiliano David Lezano",
    url: "https://www.linkedin.com/in/maxlezano/",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <section>
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
    </div>
  );
};

export default About;
