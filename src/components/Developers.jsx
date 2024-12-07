import React, { useEffect, useState } from "react";
import Developer from "./Developer";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-site-red.vercel.app/developers")
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
          <Developer key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default Developers;
