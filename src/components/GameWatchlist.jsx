import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const GameWatchlist = () => {
  const navigate = useNavigate();
  const { user, userEmail } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [watchList, setWatchList] = useState([]);

  if (!user) {
    navigate("/login");
  }
  useEffect(() => {
    fetch(
      `https://assignment-10-server-site-red.vercel.app/watchlist/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [userEmail]);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="w-8 h-8 border-4 border-dashed rounded-full border-purple-500 border-t-transparent animate-spin"></div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto my-5 p-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-800">
          Game Watchlist
        </h1>
        {watchList.length === 0 ? (
          <p className="text-center">No games added to your watchlist yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-300">
              <thead className="bg-gray-200 border border-gray-300">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Cover</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Rating</th>
                  <th className="border border-gray-300 px-4 py-2">Genre</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Publishing Year
                  </th>
                </tr>
              </thead>
              <tbody>
                {watchList.map(
                  ({
                    _id,
                    cover,
                    title,
                    desc,
                    rating,
                    genre,
                    publishingYear,
                  }) => (
                    <tr
                      key={_id}
                      className="hover:bg-gray-100 border border-gray-300"
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        <img
                          src={cover}
                          alt={title}
                          className="h-16 w-16 object-cover rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {title}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {desc}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {rating}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {genre}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {publishingYear}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
};

export default GameWatchlist;
