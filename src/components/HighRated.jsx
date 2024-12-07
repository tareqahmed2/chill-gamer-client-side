import React, { useEffect, useState } from "react";
import RateCard from "./RateCard";
import Lottie from "lottie-react";
import animation from "../animation/animation.json";

const HighRated = () => {
  const [rated, setRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-site-red.vercel.app/highRated")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => b.rating - a.rating);

        setRated(sortedData.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [setLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="w-8 h-8 border-4 border-dashed rounded-full border-purple-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div id="highest-section" className="w-full mx-auto py-12">
      <div>
        <Lottie
          loop={true}
          animationData={animation}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-5">
        Highest Rated Games
      </h1>
      <p className="text-center text-gray-600 font-bold mb-10">
        Experience the best with our top-rated selections, loved by all!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rated.map((game) => (
          <RateCard key={game.id} rate={game} />
        ))}
      </div>
      <div className="flex justify-end">
        <Lottie
          loop={true}
          animationData={animation}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
};

export default HighRated;
