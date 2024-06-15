import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              This restaurant stands as a beacon of culinary excellence and dining grandeur. Renowned for its exceptional food quality, it ensures that every dish is a masterpiece, crafted with the finest ingredients and utmost care. The restaurant is celebrated for its rich and diverse menu, featuring an array of traditional and contemporary dishes that tantalize the taste buds. Each meal is a testament to the establishment's commitment to flavor, freshness, and presentation.

              Beyond the culinary delights, the ambiance exudes elegance and warmth, creating a perfect setting for memorable dining experiences. The staff's attentive service and hospitality further elevate the restaurant's reputation, making every visit feel special. Whether you're indulging in their famous biryanis or exploring other gourmet offerings, this restaurant promises a dining experience that is both exquisite and unforgettable, truly living up to its illustrious name.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
