import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom"; // For routing to Update Review page
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyReviews = () => {
  const navigate = useNavigate();
  const { user, userEmail, setLoading } = useContext(AuthContext);
  if (!user) {
    navigate("/login");
  }
  const [myReview, setMyReview] = useState([]);
  setLoading(true);
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [userEmail]);
  setLoading(false);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteReview/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyReview(myReview.filter((review) => review._id !== id));
              toast.success("Review deleted successfully!");
            }
          })
          .catch((error) => console.error("Error deleting review:", error));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl text-center text-purple-600 font-bold my-4">
        My Reviews
      </h2>

      <div className="container w-11/12 mx-auto overflow-auto">
        <table className="table my-5 border-2 border-purple-500">
          <thead className="">
            <tr className="border-red-400">
              <th className="border-l-2 border-blue-300">Cover</th>
              <th className="border-l-2 border-blue-300">Title</th>
              <th className="border-l-2 border-blue-300">Rating</th>
              <th className="border-l-2 border-blue-300">Genre</th>
              <th className="border-l-2 border-blue-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((review) => (
              <tr key={review._id}>
                <td>
                  <img src={review.cover} alt={review.title} width="50" />
                </td>
                <td className="border-l-2 border-blue-300">{review.title}</td>
                <td className="border-l-2 border-blue-300">{review.rating}</td>
                <td className="border-l-2 border-r-2 border-blue-300">
                  {review.genre}
                </td>
                <td>
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-danger ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
