import React from "react";
import { Link } from "react-router-dom";

const Review = ({ review }) => {
  const { _id, cover, title, desc, rating } = review;

  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <figure>
        <img src={cover} alt={title} className="object-cover w-full h-52" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">
          {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
        </p>
        <p className="text-gray-600 mt-3">
          <span className="font-semibold">Rating:</span>{" "}
          <span className="badge badge-secondary p-2 text-white">
            {rating}/10
          </span>
        </p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/review/${_id}`} className="btn btn-primary">
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;
