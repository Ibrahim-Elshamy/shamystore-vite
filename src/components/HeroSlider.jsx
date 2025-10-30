import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import mackbook from "../img/MacBook.jpeg"
import PlayStation from "../img/PlayStation.jpeg"
import Wardrobe from "../img/Todos los.jpeg"

const heroData = [
  {
    name: "mackBook air",
    Description: "perfect for work, study, and creativity.",
    image: mackbook,
  },
  {
    name: "PlayStation 5",
    Description:
      "An immersive entertainment experience for next-generation games. ",
    image: PlayStation,
  },
  {
    name: "Wardrobe",
    Description: "A spacious and stylish storage unit designed to keep yours",
    image: Wardrobe,
  },
];

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {heroData.map((item, index) => (
              <SwiperSlide>
                <div className="content" key={index}>
                  <h4>Introducing the new</h4>
                  <h3>
                    {item.name}
                  </h3>
                  <p>{item.Description}</p>
                  <Link to="/" className="btn">
                    Shop Now
                  </Link>
                </div>
                <img src={item.image} alt={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
