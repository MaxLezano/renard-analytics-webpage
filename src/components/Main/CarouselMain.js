import React from "react";
import { carousel } from "../../dataRenard";
import "./CarouselMain.css";

const CarouselMain = () => {
  return (
    <div id="demo" className="carousel slide carouselMain" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
        ></button>
        {carousel.map((card) => (
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={card.order}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_960_720.jpg"
            alt=""
            className="d-block w-100 carousel carouselMain"
          />
          <div className="carousel-caption">
            <h3>Integración de datos</h3>
            <p>
              Integramos datos de distintas fuentes de forma rápida y eficaz
              utilizando las más recientes técnicas de ingeniería de datos.
            </p>
          </div>
        </div>
        <div>
          {carousel.map((card) => (
            <div className="carousel-item">
              <img src={card.image} alt="" className="d-block w-100 carousel carouselMain" />
              <div className="carousel-caption">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default CarouselMain;
