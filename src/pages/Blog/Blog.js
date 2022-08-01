import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Header className="bgPages" />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center my-5">
          <div
            id="carouselExampleControls"
            className="carousel slide my-2 col-sm-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner carouselBorder">
              <div className="carousel-item active">
                <img src={Image1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Image2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Image3} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-sm-4 my-2 text-center align-items-center">
            <h1 className="text-danger fw-bold">Titulo</h1>
            <span className="text-white justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              blanditiis dolor! Quam, ut. Eos corrupti id iste perferendis
              consectetur cupiditate pariatur totam veniam rerum? Deleniti quod
              blanditiis neque porro. Quisquam.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sit, blanditiis dolor! Quam, ut. Eos
              corrupti id iste perferendis consectetur cupiditate pariatur totam
              veniam rerum? Deleniti quod blanditiis neque porro. Quisquam.
            </span>
            <br />
            <button className="btn btn-danger mt-5">Go Somewhere</button>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mb-5">
        <div class="row d-flex justify-content-center">
          <h3 className="text center text-white col-12">Cards</h3>
          <div class="card mx-2 my-3 col-lg-3">
            <div class="card-body">
              <h5 class="card-title text-dark">Special title treatment</h5>
              <p class="card-text text-dark">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/#" class="btn btn-danger">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card mx-2 my-3 col-lg-3">
            <div class="card-body">
              <h5 class="card-title text-dark">Special title treatment</h5>
              <p class="card-text text-dark">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/#" class="btn btn-danger">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card mx-2 my-3 col-lg-3">
            <div class="card-body">
              <h5 class="card-title text-dark">Special title treatment</h5>
              <p class="card-text text-dark">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/#" class="btn btn-danger">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
