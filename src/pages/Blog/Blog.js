import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Blog = () => {
  return (
    <>
      <Header />
      <div
        id="carouselExampleControls"
        className="carousel slide mx-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/foto-gratis/apreton-manos-primer-plano-ejecutivos_1098-1384.jpg?w=1380&t=st=1658756448~exp=1658757048~hmac=fda2c66af219d9c74ca5e1e1ba8ede79e18baba7ca7a87b1306f7e7982a283fe"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano_53876-20488.jpg?w=1060&t=st=1658755665~exp=1658756265~hmac=44b92e647b127f4b783a951aef57be63985abda54c794f1d9af45591ef23ff32"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/foto-gratis/primer-plano-manos-pasando-contrato-al-empresario-irreconocible_1098-19612.jpg?w=1380&t=st=1658756964~exp=1658757564~hmac=1bea1d5c58c9bd926c0d1031cfc592004e088c8b50fee0f735ca8ae22fcfc02e"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid justify-content-center text-center mt-5">
        <div className="row flex justify-content-center">
          <div className="col-4 my-5">
            <h1>Titulo</h1>
            <span className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              blanditiis dolor! Quam, ut. Eos corrupti id iste perferendis
              consectetur cupiditate pariatur totam veniam rerum? Deleniti quod
              blanditiis neque porro. Quisquam.
            </span>
          </div>
          <div className="col-4 p-0 mb-5">
            <div className="card">
              <img
                src="https://img.freepik.com/vector-gratis/apreton-manos-dos-socios-comerciales_74855-6685.jpg?w=1380&t=st=1658759811~exp=1658760411~hmac=d14bced16a2a1c890de01c70e014417e367e3b4973a4d3e36511b87760c7de0d"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
