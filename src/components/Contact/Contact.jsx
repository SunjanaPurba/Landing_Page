import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setNotification("⚠️ Please enter your email.");
      setStatus("error");
    } else {
      setNotification("✅ Thanks! We’ll reach out to you soon.");
      setStatus("success");
      setEmail("");
    }
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div id="contact">
      <section className="py-16 text-center px-6 bg-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Design Together</h2>
        <p className="max-w-2xl mx-auto text-black mb-8">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
          >
            Contact Me
          </button>
        </div>

        {notification && (
          <div
            className={`mt-4 text-sm font-medium p-2 rounded inline-block ${
              status === "success"
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            {notification}
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
