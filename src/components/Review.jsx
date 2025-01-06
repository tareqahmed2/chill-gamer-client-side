import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Review = ({ review }) => {
  const { _id, cover, title, desc, rating, genre, publishingYear } = review;
  const { user } = useContext(AuthContext);
  return (
    <div className="card bg-base-100 shadow-xl w-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mx-auto my-4">
      <figure>
        <img src={cover} alt={title} className="object-cover w-full h-52" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">
          {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
        </p>
        <p className="text-blue-600 font-bold">{genre}</p>
        <p className="font-bold text-purple-700">{publishingYear}</p>
        <p className="text-gray-600 mt-3">
          <span className="font-semibold">Rating:</span>{" "}
          <span className="badge badge-secondary p-2 text-white">
            {rating}/10
          </span>
        </p>
        <div className="card-actions justify-end mt-4">
          {user && (
            <Link to={`/review/${_id}`} className="btn btn-primary">
              Explore Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
