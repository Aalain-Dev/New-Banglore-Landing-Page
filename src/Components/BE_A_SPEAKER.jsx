import React, { useState } from 'react';
import destkop from "../assets/BE_A_Speaker/destkop.png";
import mobile from "../assets/BE_A_Speaker/mobile.png";

const BE_A_SPEAKER = () => {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('https://capitalconnect.bizdateup.com/thanks');

  return (
    <>
      {/* Main Section */}
      <div className="mt-10 border-t-2 xl:pt-20">
        <div className="container">
          <div className="flex flex-col justify-center item-center xl:gap-5 gap-5">
            <h1 className='text-center xl:text-[3.125rem] pb-0 font-bold text-[1.5rem] blue-color'>
              BE A SPEAKER AT BizDateUp!
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>

            <p className='text-center xl:text-[1.25rem] text-[1rem] text-black'>
              We’re always looking to collaborate with thought leaders who are willing to push the limits to shape the startup ecosystem. If you would like to propose a speaker, please submit your application by clicking on the button below. If we think there could be a good fit, a member of our team will be in touch with you. Applications close on 30, May 2025.
            </p>

            {/* Apply Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="uppercase text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-60"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Images */}
      <img src={destkop} alt="" className='mt-10 w-full none-600' />
      <img src={mobile} alt="" className='mt-10 w-full show-600' />

      {/* Modal Form Popup */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000082] bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full xl:w-4xl relative z-10">
            <p className='text-left text-[25px] mb-5 font-bold'>Please Fill Out The Form</p>

            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-5 right-3 text-4xl font-bold text-black cursor-pointer"
            >
              &times;
            </button>

            <form
              action="https://formsubmit.co/aakash.goswami@bizdateup.com"
              method="POST"
              className="space-y-4 z-1000"
            >
              <input type="hidden" name="_subject" value="New submission! For Banglore Speakers Page" />
              <input type="hidden" name="_cc" value="aalain@bizdateup.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={inputValue} />

              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  pattern="[0-9]{10}"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Company Name</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              {/* LinkedIn Profile Field */}
              <div>
                <label className="block mb-1 font-medium">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/your-profile"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">What describes you best?</label>
                <select
                  name="identity"
                  required
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">Select an option</option>
                  <option value="VC">VC</option>
                  <option value="Angel Investor">Angel Investor</option>
                  <option value="Startup Founder">Startup Founder</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="uppercase text-white text-center xl:text-lg px-5 py-2 rounded-xl font-bold cursor-pointer gradient-bg border-b-2 w-60"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BE_A_SPEAKER;
