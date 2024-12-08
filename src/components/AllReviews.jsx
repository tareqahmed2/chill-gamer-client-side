import React, { useContext, useEffect, useState } from "react";
import Review from "./Review";
import { AuthContext } from "../Context/AuthProvider";
import { removeItem } from "localforage";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [sortType, setSortType] = useState("rating-asc");
  const [sortStart, setSortStart] = useState(true);
  const [loading, setLoading] = useState(true);

  if (sortStart) {
    useEffect(() => {
      fetch("https://assignment-10-uupdate.vercel.app/reviews")
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setFilteredReviews(data);
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }, []);
  }
  //

  const handleSortChange = (e) => {
    const type = e.target.value;

    setSortType(type);
    setSortStart(true);
    const sortedReviews = [...filteredReviews].sort((a, b) => {
      if (type === "rating-asc") return a.rating - b.rating;
      if (type === "rating-desc") return b.rating - a.rating;
      if (type === "year-asc") return a.publishingYear - b.publishingYear;
      if (type === "year-desc") return b.publishingYear - a.publishingYear;
      return 0;
    });

    setFilteredReviews(sortedReviews);
    setSortStart(true);
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    console.log(genre);

    if (genre === "all") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.genre === genre);

      setFilteredReviews(filtered);
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-dashed border-purple-800 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="my-10 w-11/12 mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center mb-6">
        <select onChange={handleSortChange} className="p-2 border rounded">
          <option value="rating-asc">Sort by Rating (Ascending)</option>
          <option value="rating-desc">Sort by Rating (Descending)</option>
          <option value="year-asc">Sort by Year (Ascending)</option>
          <option value="year-desc">Sort by Year (Descending)</option>
        </select>
        <select onChange={handleGenreChange} className="p-2 border rounded">
          <option value="all">All Genres</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Puzzle">Puzzle</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
