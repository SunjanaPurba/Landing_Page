import React from "react";
import img from "../../assets/Group 25.png";
import img2 from "../../assets/Group 26.png";
import img3 from "../../assets/Group 27.png"

const Projects = () => {
  return (
    <div id="projects">
      <section className="py-16 bg-base-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-10">My Projects</h2>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 mt-10">
          <button className="btn btn-sm border-[#bcb5b5] rounded-lg bg-[#F8F8F8]">
            All
          </button>
          <button className="btn btn-sm border-[#bcb5b5] rounded-lg bg-[#F8F8F8]">
            UI/UX
          </button>
          <button className="btn btn-sm border-[#bcb5b5] rounded-lg bg-[#FD6F00]">
            Web Design
          </button>
          <button className="btn btn-sm border-[#bcb5b5] rounded-lg bg-[#F8F8F8]">
            App Design
          </button>
          <button className="btn btn-sm border-[#bcb5b5] rounded-lg bg-[#F8F8F8]">
            Graphic Design
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3 px-10">
          <div>
            <img
              className="rounded-lg shadow-lg"
              src={img}
              alt="Project 1"
            />
            <h2 className="text-[#FD6F00] text-2xl text-left pt-6">
              Web Design{" "}
            </h2>
            <p className="text-left font-bold text-3xl">
              AirCalling Landing Page Design{" "}
            </p>
          </div>
          <div>
            <img
              className="rounded-lg shadow-lg"
              src={img2}
              alt="Project 2"
            />
            <h2 className="text-[#FD6F00] text-2xl text-left pt-6">
              Web Design{" "}
            </h2>
            <p className="text-left font-bold text-3xl">
              Business Landing Page Design{" "}
            </p>
          </div>
          <div>
            <img
              className="rounded-lg shadow-lg"
              src={img3}
              alt="Project 3"
            />
            <h2 className="text-[#FD6F00] text-2xl text-left pt-6">
              Web Design{" "}
            </h2>
            <p className="text-left font-bold text-3xl">
              Ecom Web Page Design{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
