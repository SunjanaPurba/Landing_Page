import React from "react";
import img from "../../assets/Vector.png";
import img2 from "../../assets/Vector (1).png";
import img3 from "../../assets/Group 18.png";
import img4 from "../../assets/Vector (2).png";

const Services = () => {
  return (
    <div id="services">
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Services</h2>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          nobis veniam omnis beatae suscipit.{" "}
        </p>
        <div className="grid gap-6 mt-10 md:grid-cols-4 px-10">
          <div className="card rounded-2xl shadow-lg bg-gray-200 text-black">
            <div className="card-body">
              <img className="w-10 mb-4" src={img} alt="" />
              <h3 className="font-bold text-left">UI/UX Design</h3>
              <p className="text-left">
                Creating intuitive and user-friendly interfaces.
              </p>
            </div>
          </div>
          <div className="card rounded-2xl shadow-lg bg-gray-200 text-black">
            <div className="card-body">
              <img
                className="w-10 mb-4"
                src={img2}
                alt=""
              />
              <h3 className="font-bold text-left">Web Design</h3>
              <p className="text-left">
                Modern and responsive website designs.
              </p>
            </div>
          </div>
          <div className="card rounded-2xl shadow-lg bg-gray-200 text-black">
            <div className="card-body">
              <img className="w-10 mb-4" src={img3}alt="" />
              <h3 className="font-bold text-left">App Design</h3>
              <p className="text-left">
                Designing beautiful and functional mobile apps.
              </p>
            </div>
          </div>
          <div className="card rounded-2xl shadow-lg bg-gray-200 text-black">
            <div className="card-body">
              <img
                className="w-10 mb-4"
                src={img4}
                alt=""
              />
              <h3 className="font-bold text-left">Graphic Design</h3>
              <p className="text-left">
                Creative graphics and branding solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
