import React, { useEffect, useState } from "react";
import Review from "./Review";

const TrendingSection = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-uupdate.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTrending(data);
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
    <div
      id="trending"
      className="bg-gradient-to-t from-gray-900 to-purple-900 py-14  text-white"
    >
      <div className="container mx-auto md:px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Trending Games
          </span>
        </h2>
        <p className="text-center text-gray-300 font-medium mb-10">
          Dive into the world of the most popular games making waves right now!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {trending.slice(0, 5).map((game) => (
            // <RateCard key={game.id} rate={game} />
            <Review key={game._id} review={game}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
