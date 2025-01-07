import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import g1 from "../assets/spider.jpg";
import g2 from "../assets/trending.jpg";
import g3 from "../assets/developer.jpg";
import g4 from "../assets/upcoming.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full py-5 px-2 bg-gray-800">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="relative">
            <div
              className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${g1})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Our Highest Rated Games
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                Discover the top-rated games of 2024, packed with action,
                adventure, and fun!
              </p>
              <button
                onClick={() => scrollToSection("highest-section")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative">
            <div
              className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${g2})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Our Trending Games!
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 w-full md:w-10/12">
                Discover what’s trending now! Explore the latest favorites, top
                picks, and must-haves that everyone’s loving this season.
              </p>
              <button
                onClick={() => scrollToSection("trending")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="relative">
            <div
              className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${g4})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Our Upcoming Games
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                Get a sneak peek at the most anticipated games coming soon. Stay
                ahead of the curve and be the first to know!
              </p>
              <button
                onClick={() => scrollToSection("upcoming-games")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="relative">
            <div
              className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${g3})` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Feature Developers
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                Discover the creators behind gaming's greatest hits, shaping
                innovation and unforgettable experiences.
              </p>
              <button
                onClick={() => scrollToSection("feature-developer")}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
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
