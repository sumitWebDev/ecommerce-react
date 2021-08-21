import React, { Component } from "react";
import Slide1 from "../assets/offer1.jpg";
import Slide2 from "../assets/offer2.jpg";
import Slide3 from "../assets/offer3.jpg";
import Slide4 from "../assets/offer4.jpg";
import Slide5 from "../assets/offer5.jpg";
import homepage from "../styles/homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="carousel-wrapper container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={Slide1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={Slide2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slide3} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slide4} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slide5} alt="Third slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
