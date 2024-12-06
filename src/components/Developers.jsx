import React, { useEffect, useState } from "react";
import Developer from "./Developer";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/developers")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  return (
    <div
      id="feature-developer"
      className="bg-slate-100 my-10 pt-10 w-full pb-5 rounded-lg px-3 mx-auto"
    >
      <div className="md:mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
          Featured Game Developers
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover the creative minds behind the world’s most iconic games. From
          epic adventures to groundbreaking innovations, these developers are at
          the forefront of the gaming industry.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <Developer key={developer.id} developer={developer}></Developer>
        ))}
      </div>
    </div>
  );
};

export default Developers;
