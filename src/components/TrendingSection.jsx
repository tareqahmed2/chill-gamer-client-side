import React, { useEffect, useState } from "react";

const TrendingSection = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-site-red.vercel.app/trending")
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
    <div id="trending" className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 mt-10">
          Trending Games
        </h2>
        <p className="text-center text-gray-600 font-bold mb-10">
          Stay in the loop with the hottest trends everyone’s buzzing about!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trending.map((game) => (
            <div
              key={game._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
            >
              <img
                src={game.coverImage}
                alt={game.gameTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  {game.gameTitle}
                </h3>
                <p className="text-gray-600 mt-2 text-sm flex-grow">
                  {game.description}
                </p>
                <div className="mt-auto">
                  <p className="text-gray-800 font-semibold">
                    Release Year: {game.releaseYear}
                  </p>
                  <p className="text-gray-800 font-semibold flex-grow">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
