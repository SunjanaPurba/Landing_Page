import React from "react";
import img from "../../assets/icon.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-18 bg-gray-100">
      <div className="flex ">
        <img src={img} alt="" className="w-10" />
        <a className="btn btn-ghost text-2xl font-bold gap-0">
          M<span className="text-gray-500 font-normal">umair</span>
        </a>
      </div>

      <div className="pt-8">
        <ul className="menu menu-horizontal px-1 flex flex-wrap justify-center">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 pt-8 pb-8 text-2xl justify-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <footer className="footer sm:footer-horizontal footer-center bg-gray-700 text-white p-4">
        <aside>
          <p>
            © 2023 <span className="text-orange-500 font-bold">Mumair </span>All
            Rights Reserved , Inc.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
