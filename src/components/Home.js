import React from "react";
import carouse1_1 from "../images/carousel_1.jpg";
import carouse1_2 from "../images/carousel_2.jpg";
import carouse1_3 from "../images/carousel_3.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* Carousel imlementation */}
      <div
        id="myCarousel"
        className="carousel slide px-3"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carouse1_1}
              className="d-block w-100 carousel-imgs"
              alt="Img 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Find your dream job</h5>
              <p>
                Your dream is one click away apply for your desired job now!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carouse1_2}
              className="d-block w-100 carousel-imgs"
              alt="Img 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Job Searching made easy</h5>
              <p>Just go to Jobs page click fill the form and you are done</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carouse1_3}
              className="d-block w-100 carousel-imgs"
              alt="Img 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Update your resume</h5>
              <p>You can select your preferred job here</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      {/* Carousel End */}

      {/* Adding footer component */}
      <Footer />
    </>
  );
}

export default Home;
