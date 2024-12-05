import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import { FaSpinner } from "react-icons/fa";

const HighRatedCardDetails = () => {
  const { id } = useParams();
  const { setLoading } = useContext(AuthContext);
  const [ratedData, setRatedData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/highRatedCardDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setRatedData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!ratedData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-3xl" />
      </div>
    );
  }

  const { name, description, rating, image, specifications } = ratedData;
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Specifications
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-800">
              Rating: <span className="text-purple-700">{rating}/10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighRatedCardDetails;
