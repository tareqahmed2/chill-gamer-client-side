import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // For notifications
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      return toast.error("Please enter a valid email address.");
    }

    // Send email using EmailJS
    const serviceID = "service_e1q9brq"; // Replace with your EmailJS service ID
    const templateID = "template_1odp2do"; // Replace with your EmailJS template ID
    const publicKey = "11QPmT3w9acjSj3hf"; // Replace with your EmailJS public key

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          navigate("/"); // Navigate to another page if needed
          setFormData({ name: "", email: "", message: "" }); // Reset form data
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="bg-gray-100 w-11/12 py-5 my-5 mx-auto">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Have any questions or feedback? We're here to help. Reach out to us,
          and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
