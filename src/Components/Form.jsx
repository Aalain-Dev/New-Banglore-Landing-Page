import React from 'react'

const Form = () => {
  return (
 <div className="flex flex-col lg:flex-row items-start justify-between gap-12 px-6 py-16 bg-gray-50 ">
  {/* Logos Section */}
  <div className="container flex gap-10">
    <div className="flex-1">
    <h2 className="text-2xl font-medium mb-6">
      Listen To Marketing & Product Leaders From
    </h2>
    <div className="grid grid-cols-3 gap-px border border-gray-300 bg-gray-300 cursor-pointer">
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
  className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition duration-300"
/>
        </div>
      ))}
    </div>
  </div>

  {/* Form Section */}
  <div className="flex-1 max-w-xl w-full">
    <h2 className="text-2xl font-medium mb-6">Request Your Invite</h2>
    <form className="space-y-4">
      <div className="flex gap-4">
        <input type="text" placeholder="First Name*" className="flex-1 border border-gray-300 px-4 py-3 rounded bg-white" />
        <input type="text" placeholder="Last Name*" className="flex-1 border border-gray-300 px-4 py-3 rounded bg-white" />
      </div>
      <input type="email" placeholder="Business Email*" className="w-full border border-gray-300 px-4 py-3 rounded bg-white" />
      <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 px-4 py-3 rounded bg-white" />
      <input type="text" placeholder="Job Title*" className="w-full border border-gray-300 px-4 py-3 rounded bg-white" />
      <input type="text" placeholder="Company Name*" className="w-full border border-gray-300 px-4 py-3 rounded bg-white" />

      <p className="text-sm text-gray-500">
        By submitting this form, I agree to MoEngage's{' '}
        <a href="#" className="underline">privacy policy</a> &{' '}
        <a href="#" className="underline">terms of service</a>.
      </p>

         <button type = "submit"
  className=" bg-[#211F52] text-white px-6 py-3 cursor-pointer rounded transition-transform duration-300 transform hover:scale-105 w-30 xl:text-xl"
>
Submit
</button>
    </form>
  </div>
  </div>
</div>

  )
}

export default Form