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
      <div>
        <Header className='bgPages' />
      </div>
      <div className="container-fluid divCarousel">
        <div className="row d-flex justify-content-center">
          <div
            id="carouselExampleControls"
            className="carousel slide mx-5 col-4 divCarousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner mt-5">
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
          <div className="col-4 mt-5 text-center">
            <h1 className="text-white">Titulo</h1>
            <span className="my-5 text-white justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              blanditiis dolor! Quam, ut. Eos corrupti id iste perferendis
              consectetur cupiditate pariatur totam veniam rerum? Deleniti quod
              blanditiis neque porro. Quisquam.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sit, blanditiis dolor! Quam, ut. Eos
              corrupti id iste perferendis consectetur cupiditate pariatur totam
              veniam rerum? Deleniti quod blanditiis neque porro. Quisquam.
            </span>
          </div>
        </div>
      </div>
      <div>
      <div className="container-fluid text-center justify-content-center">
        <div class="row d-flex">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/#" class="btn btn-danger">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/#" class="btn btn-danger">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
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
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
