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
    <div className=" w-full mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Highest Rated Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rated.map((game) => (
          <RateCard key={game.id} rate={game} />
        ))}
      </div>
    </div>
  );
};

export default HighRated;
