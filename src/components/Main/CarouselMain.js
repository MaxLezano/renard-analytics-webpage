import React from "react";
import { carousel } from "../../dataRenard";
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import "./CarouselMain.css";

const CarouselMain = () => {
  const [t] = useTranslation('global');
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
            key={uniqid()}
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
            <h3>{t('carouselMain.titleCarousel')}</h3>
            <p>{t('carouselMain.descriptionCarousel')}</p>
          </div>
        </div>
        <div>
          {carousel.map((card) => (
            <div className="carousel-item" key={uniqid()}>
              <img src={card.image} alt="" className="d-block w-100 carousel carouselMain" />
              <div className="carousel-caption">
                <h3>{t(`carouselMain.${card.title}`)}</h3>
                <p>{t(`carouselMain.${card.description}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselMain;
