import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const RateCard = ({ rate }) => {
  const navigate = useNavigate();
  const { _id, name, rating, image, description } = rate;

  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="badge badge-primary text-xs">Rating: {rating}</span>
          <button
            onClick={() => navigate(`highRatedCardDetails/${_id}`)}
            className="btn btn-sm btn-accent hover:btn-secondary"
          >
            Explore Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
