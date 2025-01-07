import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const UpcomingGames = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-uupdate.vercel.app/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data);

        setTimers(new Array(data.length).fill(0));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimers = upcoming.map((game) => {
        const now = new Date().getTime();
        const releaseTime = new Date(game.releaseDate).getTime();
        return releaseTime - now;
      });
      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [upcoming]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="w-8 h-8 border-4 border-dashed rounded-full border-purple-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // Helper functions remain unchanged
  const formatCountdown = (distance) => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <section
      id="upcoming-games"
      className="bg-gradient-to-r from-purple-800 via-pink-800 to-indigo-800 text-white py-16 my-16 rounded-xl shadow-lg"
    >
      <div className="container md:px-6 mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-300">
          Upcoming Games
        </h2>
        <p className="mb-12 text-lg md:text-xl text-gray-200">
          Discover the most anticipated games coming soon to our platform!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
          {upcoming.map((game, index) => (
            <div
              key={game.id}
              className="card bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 duration-300 "
            >
              <img
                src={game.cover}
                alt={game.title}
                className="w-full h-56 object-cover transform transition-all duration-500 hover:scale-110"
              />
              <div className="card-body p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{game.description}</p>
                <p className="text-lg font-semibold mb-4">
                  <FaRegCalendarAlt className="inline-block mr-2 text-green-400" />
                  Release Date:{" "}
                  <span className="text-green-400">
                    {formatDate(game.releaseDate)}
                  </span>
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex items-center justify-center">
                    <span className="mr-2 text-sm">Release Countdown:</span>
                    <span className="font-bold  text-sm text-red-500">
                      {timers[index] > 0
                        ? formatCountdown(timers[index])
                        : "Released!"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
