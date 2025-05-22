import { IdentificationIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'
import blue_fadefrom from "../assets/Investor/blue-blur.webp"
import blume from "../assets/Nation/blume_ventures.png"
import v3 from "../assets/Nation/v3.png"
import bizdateup from "../assets/Nation/bizdateup.png"
import faad from "../assets/Nation/faad.png"
import fluid from "../assets/Nation/fluid.png"
import gvfl from "../assets/Nation/gvfl.png"
import multiply from "../assets/Nation/multiply.png"
import dbs from "../assets/Nation/dbs.png"
import kotak from "../assets/Nation/kotak.png"
const Investor_Form = () => {
    const [inputValue, setInputValue] = useState("https://capitalconnect.bizdateup.com/thanks");
  const data = [
   {
    id:1,  img: blume
   }
   ,
    {
    id:2,  img: v3
   },
    {
    id:3,  img: bizdateup
   },
    {
    id:4,  img: faad
   },
    {
    id:5,  img: fluid
   },
    {
    id:6,  img: gvfl
   },
    {
    id:7,  img: multiply
   },
   {
    id:8,  img: dbs
   },
   {
    id:9,  img: kotak
   }
  ]
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
 <div className="flex flex-col lg:flex-row items-start justify-between xl:gap-12 gap-0 xl:py-16 py-10  bg-gray-50 relative">
  <div className="iamge">
    <img src={blue_fadefrom} alt="" className='w-[600px] h-[500px] absolute top-0 left-[-200px]' />
  </div>
  {/* Logos Section */}
  <div className="container flex gap-10 xl:flex-row flex-col " >
    <div className="flex-1 w:1/2">
    <h2 className="text-2xl font-medium mb-6 capitalize">
Listen to angel investors and vc's across the nation
    </h2>
    <div className="grid grid-cols-3 gap-px border border-gray-300 bg-gray-300 cursor-pointer" >
      {data.map((logo, index) => (
        <div key={index} className="bg-white flex items-center justify-center p-4 h-24">
         <img
  src={logo.img}
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

