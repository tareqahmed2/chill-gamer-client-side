import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-10 md:gap-0">
          {/* Branding */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Chill Gamer</h2>
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
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
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
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white/50 pt-5 text-center text-sm">
          © 2024 YourBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
