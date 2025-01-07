import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-8 lg:px-16">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Welcome to our platform! We are dedicated to providing the best gaming
          experience, curating content that inspires and entertains. Our team of
          passionate gamers and developers works tirelessly to bring you the
          latest in gaming, from thrilling adventures to cutting-edge
          technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-500">
              To connect players around the globe through the joy of gaming and
              to push the boundaries of innovation in the gaming industry.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-500">
              To become the go-to platform for gamers worldwide, offering
              unparalleled experiences and fostering a vibrant community.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Our Values
            </h3>
            <p className="text-gray-500">
              Passion, creativity, inclusivity, and a commitment to excellence
              are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
