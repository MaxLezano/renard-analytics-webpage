import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ourValues, profiles } from "../../dataRenard";
import { useTranslation } from "react-i18next";
import "../../components/Main/Main.css";
import "./About.css"

const About = () => {
  const [t] = useTranslation('global');

  return (
    <>
      <Header className={"bgPages"} />
      <div className="container-fluid text-center mt-5">
        <div className="row d-flex justify-content-center">
          <section className="col-12 col-lg-4 my-2 justify-content-center">
            <p className="mb-0 parrafoStyle">{t('about.aboutRenard.subtitle')}</p>
            <h3 className="h3Style">{t('about.aboutRenard.title')}</h3>
            <p className="text-white">{t('about.aboutRenard.description')}</p>
            <Button
              description={t('about.aboutRenard.button')}
              className={"btn btn-danger my-3 px-5"}
            />
          </section>
          <section className="col-12 col-lg-4 my-2">
            <img
              className="imgSize"
              src="https://i.postimg.cc/qRzG7mWS/about-image1.png"
              alt="big data reference"
            />
          </section>
        </div>

        <div className="container-fluid text-center mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <section className="col-12 col-lg-4 my-2">
              <img
                className="imgSize"
                src="https://i.postimg.cc/L5R44Wb3/about-image2.png"
                alt="big data reference"
              />
            </section>
            <section className="col-12 col-lg-4 my-2">
              <p className="mb-0 parrafoStyle">{t('about.ourVision.subtitle')}</p>
              <h3 className="h3Style">{t('about.ourVision.title')}</h3>
              <p className="text-white">{t('about.ourVision.description')}</p>
              <Button
                type='button'
                description={t('about.ourVision.button')}
                className={"btn btn-danger my-3 px-5"}
                dataBsToggle='modal'
                dataBsTarget='#hireModal'
              />
            </section>
          </div>
        </div>

        <section className="container-fluid text-center mt-5">
          <p className="mb-0 parrafoStyle">{t('about.ourValues.subtitle')}</p>
          <h3 className="h3Style">{t('about.ourValues.title')}</h3>
          <p className="text-white">{t('about.ourValues.description')}</p>
        </section>

        <div className="container-fluid col-12 col-md-10 col-lg-12 col-xl-10 px-0">
          <div className="row g-4">
            {ourValues.map((ourValue) => (
              <div className="col-12 col-md-6 col-lg-4 px-0 bg-c d-flex justify-content-center">
                <div className="card border-0 rounded-4 text-center bg-c">
                  <img
                    src={ourValue.image}
                    className="align-self-center col-2 pt-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title parrafoStyle">
                      {t(`about.ourValues.${ourValue.title}`)}
                    </h5>
                    <p className="card-text">{t(`about.ourValues.${ourValue.description}`)}</p>
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
