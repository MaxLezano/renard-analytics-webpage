import MainBanner from "../MainBanner/MainBanner";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CarouselMain from "./CarouselMain";
import Teamworkimg from "../../assets/images/stats-illustration.svg";
import emailImg from "../../assets/images/email-illustration.svg";
import technologiesImg from "../../assets/images/technologies.svg";
import { useTranslation } from "react-i18next";
import "./Main.css";

const Main = () => {
  const [t] = useTranslation('global');
  return (
    
    <div>
      <MainBanner />
      <CarouselMain />
      <div className="container-fluid text-center mt-5">
        <div className="row d-flex justify-content-center">
          <section className="col-12 col-md-5 col-lg-4 justify-content-center">
            <p className="parrafoStyle">{t('main.work.subtitle')}</p>
            <h3 className="h3Style">{t('main.work.title')}</h3>
            <p className="text-white">{t('main.work.description')}</p>
            <table className="container-fluid text-center">
              <thead>
                <tr className="row d-flex justify-content-center">
                  <th className="col-4 text-white">{t('main.work.th1')}</th>
                  <th className="col-4 text-white">{t('main.work.th2')}</th>
                </tr>
              </thead>
              <tbody className="container-fluid text-center">
                <tr className="row d-flex justify-content-center">
                  <td className="col-4 text-white fw-bold">4+</td>
                  <td className="col-4 text-white fw-bold">10+</td>
                </tr>
              </tbody>
            </table>
            <Link reloadDocument to="/about">
              <Button className={"btn btn-danger"} description={t('main.work.button')} />
            </Link>
          </section>
          <section className="col-12 col-md-5 col-lg-4">
            <img className="imgSize" src={Teamworkimg} alt="grafica de algo" />
          </section>
        </div>

        <div className="container-fluid text-center my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-12 col-md-5 col-md-5 col-lg-4">
              <img
                className="imgSize"
                src={technologiesImg}
                alt="technologies"
              />
            </section>
            <section className="col-12 col-md-5 col-md-5 col-lg-4">
              <p className="parrafoStyle">{t('main.experience.subtitle')}</p>
              <h3 className="h3Style">{t('main.experience.title')}</h3>
              <p className="text-white">{t('main.experience.description')}</p>
            </section>
          </div>
        </div>

        <div className="container-fluid text-center my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-12 col-md-5 col-lg-4">
              <p className="parrafoStyle">{t('main.contactUs.subtitle')}</p>
              <h3 className="h3Style">{t('main.contactUs.title')}</h3>
              <p className="text-white">{t('main.contactUs.description')}</p>
              <Link reloadDocument to="/contact-us">
                <Button
                  className={"btn btn-danger"}
                  description={t('main.contactUs.button')}
                />
              </Link>
            </section>
            <section className="col-12 col-md-5 col-lg-4">
              <img className="imgSize" src={emailImg} alt="email" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;