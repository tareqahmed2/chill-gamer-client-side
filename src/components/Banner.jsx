import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import g1 from "../assets/g1.webp";
import g2 from "../assets/g3.avif";
import g3 from "../assets/g7.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full py-12 px-2 bg-gray-800">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          <div className="relative">
            <div
              className="w-full h-80  bg-cover bg-center"
              style={{ backgroundImage: `url(${g1})` }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">
                The Best Gaming Experience
              </h2>
              <p className="text-xl mb-6">
                Discover the top-rated games of 2024, packed with action,
                adventure, and fun!
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Explore Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full h-80  bg-cover bg-center"
              style={{ backgroundImage: `url(${g2})` }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">Unlimited Adventures</h2>
              <p className="text-xl mb-6">
                Dive into immersive worlds and create your own legendary tales.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Explore Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full h-80  bg-cover bg-center"
              style={{ backgroundImage: `url(${g3})` }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">Join the Action</h2>
              <p className="text-xl mb-6">
                Ready to play? Join millions of players and show off your
                skills!
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Explore Now
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
