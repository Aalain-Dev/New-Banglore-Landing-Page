import { IdentificationIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'
import blue_fadefrom from "../assets/Investor/blue-blur.webp"
const Investor_Form = () => {
    const [inputValue, setInputValue] = useState("https://capitalconnect.bizdateup.com/thanks");
  
    const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    linkedin: '',
    organization: '',
    position: '',
    focus: '',
    size: '',
  });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
 <div className="flex flex-col lg:flex-row items-start justify-between gap-12 px-6 py-16 bg-gray-50 relative">
  <div className="iamge">
    <img src={blue_fadefrom} alt="" className='w-[600px] h-[500px] absolute top-0 left-[-200px]' />
  </div>
  {/* Logos Section */}
  <div className="container flex gap-10 xl:flex-row flex-col " >
    <div className="flex-1 w:1/2">
    <h2 className="text-2xl font-medium mb-6">
      Listen To Marketing & Product Leaders From
    </h2>
    <div className="grid grid-cols-3 gap-px border border-gray-300 bg-gray-300 cursor-pointer" >
      {[
        'airtel', 'tata', 'hdfc',
        'asianpaints', 'ihcl', 'zee5',
        'policybazaar', 'nazara', 'tata-cliq',
        'apollo', 'federal', 'digital'
      ].map((logo, index) => (
        <div key={index} className="bg-white flex items-center justify-center p-4 h-24">
         <img
  src={`https://www.hashgrowth.org/wp-content/uploads/2025/03/tata-capital-logo.png`}
  alt={logo}
  className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition duration-300"  data-aos="flip-up"
/>
        </div>
      ))}
    </div>
  </div>

  {/* Form Section */}
  <div className="flex-1 w-full w:1/2 ">
    <h2 className="text-2xl font-medium mb-6">Request Your Invite</h2>
    <form  className="space-y-4" action="https://formsubmit.co/aakash.goswami@bizdateup.com" method="POST">

          <input type="hidden" name="_cc" value="aalain@bizdateup.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={inputValue} />
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
        placeholder="Which organization are you associated with?"
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
      <input
        type="text"
        name="focus"
        placeholder="What is your primary investment focus?"
        value={formData.focus}
        required
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
      />
      <input
        type="text"
        name="size"
        placeholder="What is your typical investment size?"
        value={formData.size}
        required
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-3 rounded bg-white"
      />

      <p className="text-sm text-gray-500">
        By submitting this form, I agree to BizDateUp{' '}
        <a href="https://www.bizdateup.com/privacypolicy" target='_blank' className="underline">privacy policy</a> &{' '}
        <a href="https://www.bizdateup.com/termsOfService" target='_blank' className="underline">terms of service</a>.
      </p>

      <button
        type="submit"
        className="bg-[#211F52] text-white px-6 py-3 cursor-pointer rounded transition-transform duration-300 transform hover:scale-105 w-30 xl:text-xl"
      >
        Submit
      </button>
    </form>
  </div>
  </div>
</div>

  )
}

export default Investor_Form

