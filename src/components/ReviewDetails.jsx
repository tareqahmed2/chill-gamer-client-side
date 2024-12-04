import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const { userName, userEmail } = useContext(AuthContext);
  const reviewData = useLoaderData();
  const { cover, title, desc, rating, genre, publishingYear, email } =
    reviewData;
  const handleWatchList = () => {
    const watchListData = {
      cover,
      title,
      desc,
      rating,
      genre,
      publishingYear,
      email,
      userName,
      userEmail,
    };
    fetch("http://localhost:5000/watchList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchListData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="container mx-auto p-6 my-10">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-8">
        <div className="w-full md:w-1/2">
          <img
            src={cover}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-4">{desc}</p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Published:</strong> {publishingYear}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Rating:</strong>{" "}
            <span className="badge badge-secondary p-2 text-white">
              {rating}/10
            </span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Reviewer:</strong> {email}
          </p>

          <button onClick={handleWatchList} class="btn btn-active btn-primary">
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
