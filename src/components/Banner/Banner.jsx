import React from "react";
import img from "../../assets/Frame 27.png"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 gap-20 px-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex flex-col items-center">
              <img
                src={img}
                className="max-w-sm rounded-lg"
                alt="Banner"
              />
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex gap-4 pt-8 pb-8 text-2xl justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Hi I am <br />
                <span className="text-[#FD6F00]">Muhammad umair</span>
              </h1>
              <h2 className="text-5xl font-bold mt-4">
                UI & UX <p className="pl-30">Designer</p>
              </h2>
              <p className="py-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae{" "}
                <br />
                blanditiis totam aut tenetur temporibus distinctio officiis nemo
                doloribus fugiat magnam!
              </p>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn btn-primary bg-[#FD6F00] border-0 rounded-md text-white"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
