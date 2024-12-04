import React, { useEffect, useState } from "react";

const TrendingSection = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrending(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Trending Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trending.map((game) => (
            <div
              key={game._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={game.coverImage}
                alt={game.gameTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {game.gameTitle}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{game.description}</p>
                <p className="mt-4 text-gray-800 font-semibold">
                  Release Year: {game.releaseYear}
                </p>
                <p className="text-gray-800 font-semibold">
                  Platforms:{" "}
                  {Array.isArray(game.platforms)
                    ? game.platforms.join(", ")
                    : "N/A"}
                </p>
                <p className="text-gray-800 font-semibold">
                  Popularity Score: {game.popularityScore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
