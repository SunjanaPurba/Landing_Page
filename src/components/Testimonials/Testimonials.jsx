import React, { useState } from "react";
import img from "../../assets/Ellipse 10.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      img: img,
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      img: img,
      text: "Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Vel sed sed amet facilisi. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Developer",
      img: img,
      text: "Convallis pretium. Vel sed sed amet facilisi. Lorem ipsum dolor sit amet consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-16 px-6 bg-base-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="max-w-2xl mx-auto text-gray-500 mb-12">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className="card max-w-3xl mx-auto bg-base-200 shadow-md p-8 transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center gap-6 text-left">
          <img
            src={testimonials[activeIndex].img}
            alt={testimonials[activeIndex].name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-600 mb-4">
              <span className="text-orange-500 text-2xl font-bold">“</span>
              {testimonials[activeIndex].text}
              <span className="text-orange-500 text-2xl font-bold">”</span>
            </p>
            <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
            <span className="text-sm text-gray-500">
              {testimonials[activeIndex].role}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
