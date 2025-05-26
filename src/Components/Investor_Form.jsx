import React, { useState } from 'react';

// Images
import blue_fadefrom from "../assets/Investor/blue-blur.webp";
import blume from "../assets/Nation/blume_ventures.png";
import v3 from "../assets/Nation/v3.png";
import bizdateup from "../assets/Nation/bizdateup.png";
import faad from "../assets/Nation/faad.png";
import fluid from "../assets/Nation/fluid.png";
import gvfl from "../assets/Nation/gvfl.png";
import multiply from "../assets/Nation/multiply.png";
import dbs from "../assets/Nation/dbs.png";
import kotak from "../assets/Nation/kotak.png";

const Investor_Form = () => {
  const [inputValue, setInputValue] = useState("https://capitalconnect.bizdateup.com/thanks");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "AI", "EV", "Insurance", "MedTech", "DeepTech", "SaaS",
    "Gaming", "Logistics", "Real Estate", "Drone", "Tech", "Health"
  ];

  const handleToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const logos = [
    { id: 1, img: blume }, { id: 2, img: v3 }, { id: 3, img: bizdateup },
    { id: 4, img: faad }, { id: 5, img: fluid }, { id: 6, img: gvfl },
    { id: 7, img: multiply }, { id: 8, img: dbs }, { id: 9, img: kotak }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    linkedin: '',
    organization: '',
    position: '',
    size: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between xl:gap-12 gap-0 xl:py-16 py-10 bg-gray-50 relative">
      {/* Background Blur Image */}
      <div className="absolute top-0 left-[-200px] z-0">
        <img src={blue_fadefrom} alt="" className="w-[600px] h-[500px]" />
      </div>

      {/* Left Section - Logos */}
      <div className="container flex gap-10 xl:flex-row flex-col z-10 w-full">
        <div className="flex-1">
          <h2 className="text-2xl font-medium mb-6 capitalize">
            Listen to angel investors and VC's across the nation
          </h2>
          <div className="grid grid-cols-3 gap-px border bg-gray-300 border-gray-300 cursor-pointer">
            {logos.map((logo) => (
              <div key={logo.id} className="bg-white flex items-center justify-center p-4 h-24">
                <img
                  src={logo.img}
                  alt="partner logo"
                  className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  data-aos="flip-up"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-medium mb-6">Request Your Invite</h2>

          <form
            className="space-y-4"
            action="https://formsubmit.co/aakash.goswami@bizdateup.com"
            method="POST"
          >
            {/* Hidden config */}
            <input type="hidden" name="_cc" value="aalain@bizdateup.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={inputValue} />

            {/* Standard Fields */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedin}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            />
            <input
              type="text"
              name="organization"
              placeholder="what is name of your current organization?"
              value={formData.organization}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            />
            <input
              type="text"
              name="position"
              placeholder="What is your current position within the organization?"
              value={formData.position}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            />

            {/* Multi-Select Investment Focus Area */}
            <div className="flex flex-col mt-6">
              <label className="text-xl mb-4">What is your primary investment focus?</label>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`w-[150px] px-4 py-2 mb-2 cursor-pointer text-sm border rounded ${
                      selectedOptions.includes(option)
                        ? "bg-[#211F52] text-white"
                        : "bg-white text-black border-gray-300"
                    }`}
                    onClick={() => handleToggle(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Hidden inputs for selected options */}
              {selectedOptions.map((option, index) => (
                <input
                  key={index}
                  type="hidden"
                  name="focus[]"
                  value={option}
                />
              ))}
            </div>

            {/* Investment Size (Select) */}
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
            >
              <option value="" disabled>Select investment size per startup</option>
              <option value="10 Lakhs - 20 Lakhs">10 Lakhs - 20 Lakhs</option>
              <option value="20 Lakhs - 40 Lakhs">20 Lakhs - 40 Lakhs</option>
              <option value="40 Lakhs - 50 Lakhs">40 Lakhs - 50 Lakhs</option>
              <option value="50 Lakhs - 75 Lakhs">50 Lakhs - 75 Lakhs</option>
              <option value="75 Lakhs - 1CR">75 Lakhs - 1CR</option>
            </select>

            {/* Policies */}
            <p className="text-sm text-gray-500">
              By submitting this form, I agree to BizDateUp{' '}
              <a href="https://www.bizdateup.com/privacypolicy" target="_blank" className="underline">
                privacy policy
              </a> &{' '}
              <a href="https://www.bizdateup.com/termsOfService" target="_blank" className="underline">
                terms of service
              </a>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#211F52] text-white px-6 py-3 rounded hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Investor_Form;