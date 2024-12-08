import React, { useEffect, useState } from "react";

const TrendingSection = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-uupdate.vercel.app/trending")
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
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Trending Games
          </span>
        </h2>
        <p className="text-center text-gray-300 font-medium mb-10">
          Dive into the world of the most popular games making waves right now!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.map((game) => (
            <div
              key={game._id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col"
            >
              <img
                src={game.coverImage}
                alt={game.gameTitle}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">
                  {game.gameTitle}
                </h3>

                <p className="text-gray-300 text-sm flex-grow">
                  {game.description}
                </p>

                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Release Year:</strong>{" "}
                    {game.releaseYear}
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Platforms:</strong>{" "}
                    {Array.isArray(game.platforms)
                      ? game.platforms.join(", ")
                      : "N/A"}
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Popularity Score:</strong>{" "}
                    {game.popularityScore}
                  </p>
                </div>
              </div>
              {/* didn't get commit */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
