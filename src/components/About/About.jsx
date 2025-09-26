import React from "react";
import img from "../../assets/Nav Bar.png"

const About = () => {
  return (
    <React.Fragment>
      <div id="about" className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-sm rounded-lg lg:mr-12 mb-8 lg:mb-0"
            alt="About Me"
          />
          <div className="bg-base-100 text-center px-6 lg:text-left lg:flex-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              pariatur aspernatur nostrum fugiat eum quia commodi exercitationem
              recusandae assumenda, quidem expedita, minus nobis similique. Quae
              aut placeat architecto saepe praesentium!
            </p>

            <div className="space-y-5 mt-6">
              {[
                { title: "UX", percent: 80 },
                { title: "Website Design", percent: 90 },
                { title: "App Design", percent: 75 },
                { title: "Graphic Design", percent: 95 },
              ].map((skill, index) => (
                <div key={index}>
                  <p className="font-bold text-gray-800 mb-1">{skill.title}</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full relative">
                    <div
                      className="h-2 bg-[#FD6F00] rounded-full relative"
                      style={{ width: skill.percent + "%" }}
                    >
                      <div className="absolute -right-2 -top-1 w-4 h-4 bg-white border-2 border-[#FD6F00] rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
