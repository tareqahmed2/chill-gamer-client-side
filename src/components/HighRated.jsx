import React, { useEffect, useState } from "react";
import RateCard from "./RateCard";

const HighRated = () => {
  const [rated, setRated] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        setRated(data);
      });
  }, []);
  return (
    <div id="highest-section" className=" w-full mx-auto py-12">
      <h1 className="text-3xl  font-bold text-center mb-2 text-purple-800 my-5">
        Highest Rated Games
      </h1>
      <p className="text-center  text-gray-600 font-bold mb-10">
        Experience the best with our top-rated selections, loved by all!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rated.map((game) => (
          <RateCard key={game.id} rate={game} />
        ))}
      </div>
    </div>
  );
};

export default HighRated;
