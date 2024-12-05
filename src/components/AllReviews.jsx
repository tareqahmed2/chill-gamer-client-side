import React, { useContext, useEffect, useState } from "react";
import Review from "./Review";
import { AuthContext } from "../Context/AuthProvider";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { setLoading } = useContext(AuthContext);
  setLoading(true);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  setLoading(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 w-11/12 mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md">
      {reviews.map((review) => (
        <Review key={review._id} review={review}></Review>
      ))}
    </div>
  );
};

export default AllReviews;
