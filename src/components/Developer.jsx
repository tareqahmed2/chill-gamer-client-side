import React from "react";

const Developer = ({ developer }) => {
  return (
    <div className="border rounded-lg shadow-lg p-5 bg-white hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={developer.logo}
        alt={`${developer.name} Logo`}
        className="w-full h-36 rounded-lg mx-auto mb-3"
      />
      <h3 className="text-xl font-bold text-center mb-2">{developer.name}</h3>
      <p className="text-gray-700 text-center mb-4">{developer.description}</p>
      <p className="text-center font-semibold text-indigo-600">
        Games Developed: {developer.gameCount}
      </p>
      <div className="text-center mt-4">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Developer;
