import React from "react";
import Card from "./Card";

const services = [
  {
    image: "",
    title: "Integracion de datos",
    description:
      "Integramos datos de distintas fuentes de forma rápida y eficaz utilizando las más recientes técnicas de ingeniería de datos.",
  },
  {
    imagen: "",
    title: "Análisis deportivo",
    description:
      "Analizamos datos cuantitativos y cualitativos para proveer completos informes para la toma de decisiones deportivas, referentes a estrategias, preparación, entrenamientos y más.",
  },
  {
    imagen: "",
    title: "Scouting de Jugadores",
    description:
      "Proveemos una búsqueda completa y exhaustiva de jugadores según características específicas, rendimiento, proyección a futuro, similaridad y más.",
  },
  {
    imagen: "",
    title: "Asesoría y consultoría",
    description:
      "Asesoramos en la implementación de nuevas tecnologías para el deporte, guiando en el proceso y asegurando que tu inversión tenga el mejor retorno posible.",
  },
];

const Services = () => {
  return (
    <div>
      <section>
        <h2>Nuestros Servicios</h2>
        <div>
          {services.map((service) => (
            <Card key={Math.random()} info={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
