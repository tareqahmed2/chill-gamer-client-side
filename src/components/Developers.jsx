import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-uupdate.vercel.app/developers")
      .then((res) => res.json())
      .then((data) => {
        setDevelopers(data);
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
      id="feature-developer"
      className="bg-slate-100 my-10 pt-10 w-full pb-5 rounded-lg px-3 mx-auto"
    >
      <div className="md:mt-10">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-purple-700 drop-shadow-md">
          Featured Game Developers
        </h2>
        <p className="text-center text-gray-700 text-lg mb-10 font-medium">
          Discover the creative minds behind the world’s most iconic games.
        </p>
      </div>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {developers.map((developer) => (
          <div
            key={developer.id}
            className="flex flex-col items-center mx-8 transition-transform transform hover:scale-105"
          >
            <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-indigo-600">
              <img
                src={developer.logo}
                alt={developer.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              {developer.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2 px-3 text-center">
              {developer.description}
            </p>
            <p className="text-indigo-500 mt-2 font-semibold">
              Games Developed: {developer.gameCount}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Developers;
