import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const handleSubsCribe = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  if (!email) {
    return toast.error("Field the Email feild correctly");
  }

  e.target.email.value = "";
  toast.success("Subscribe Successfully!");
};
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10 ">
      <div className="container w-11/12 mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-10 md:gap-0">
          {/* Branding */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <img
              className="w-16 my-3 h-16 rounded-full cursor-pointer"
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
            <p className="text-sm">
              Innovating for a better tomorrow. Follow us on our journey to
              create an impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubsCribe} className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/tareqahmed2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/tareq-ahmed-b66293318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com/md.tareq.ahmed.337952?mibextid=ZbWKwL"
                target="_blank"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <FaFacebook size={30} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white/50 pt-5 text-center text-sm">
          © 2025 YourBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
