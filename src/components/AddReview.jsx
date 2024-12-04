import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddReview = () => {
  const navigate = useNavigate();
  const { user, userName, userEmail } = useContext(AuthContext);
  if (!user) {
    navigate("/login");
  }
  console.log(userName, userEmail);
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const cover = form.cover.value;
    const title = form.title.value;
    const desc = form.desc.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const email = form.email.value;
    console.log(cover, title, desc, rating, publishingYear, genre, email);
    const newReview = {
      cover,
      title,
      desc,
      rating,
      publishingYear,
      genre,
      email,
    };
    console.log(newReview);

    // send data to the server and database
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("successfully added");
          navigate("/");
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="m-4">
      <div className=" card bg-base-100 w-full md:w-3/4 lg:w-3/6  shrink-0 shadow-2xl mx-auto my-10 py-10 px-3 md:px-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Add New Review
        </h2>

        <form onSubmit={handleAddReview} className="space-y-6">
          {/* Game Cover Image/Thumbnail */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Game Cover Image/Thumbnail URL:
            </label>
            <input
              type="url"
              name="cover"
              placeholder="Enter the game cover image URL"
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Game Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Game Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter the game title"
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Review Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Review Description:
            </label>
            <textarea
              name="desc"
              placeholder="Enter your detailed review"
              rows="5"
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Rating (1-5):
            </label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              defaultValue="1"
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Publishing Year */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Publishing Year:
            </label>
            <input
              type="number"
              name="publishingYear"
              placeholder="Enter the publishing year"
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Genre Dropdown */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Genre:
            </label>
            <select
              name="genre"
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Strategy">Strategy</option>
              <option value="Puzzle">Puzzle</option>
            </select>
          </div>

          {/* User Email (Read-only) */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              User Email:
            </label>
            <input
              type="email"
              name="email"
              value={userEmail || ""}
              readOnly
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              User Name:
            </label>
            <input
              type="text"
              name="name"
              value={userName || ""}
              readOnly
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
