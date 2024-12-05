import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src="https://i.postimg.cc/s26qKvRs/error.png"
        alt="404 Not Found"
        className="max-w-md"
      />
      <h1 className="text-4xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
