import React from 'react'

const Exhibitors_Card = () => {
    const partners = [
        {
          name: 'Adcash',
          location: 'Traffic Source | Estonia',
          description: 'Adcash is a global online advertising platform for media buyers, affiliates, ad networks, and publishers. Our ...',
          logo: 'https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fawc-platform-prod%2Fo%2Fawe24%252Fdisplay-logos%252F1724293622_5ng03tv_site-%255BB51-Adcash%255D.png%3Fgeneration%3D1724293624344940%26alt%3Dmedia&w=1920&q=75',
          tag: 'OFFICIAL PARTNER'
        },
        {
            name: 'Adcash',
            location: 'Traffic Source | Estonia',
            description: 'Adcash is a global online advertising platform for media buyers, affiliates, ad networks, and publishers. Our ...',
            logo: 'https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fawc-platform-prod%2Fo%2Fawe24%252Fdisplay-logos%252F1724293622_5ng03tv_site-%255BB51-Adcash%255D.png%3Fgeneration%3D1724293624344940%26alt%3Dmedia&w=1920&q=75',
            tag: 'OFFICIAL PARTNER'
          },
          {
            name: 'Adcash',
            location: 'Traffic Source | Estonia',
            description: 'Adcash is a global online advertising platform for media buyers, affiliates, ad networks, and publishers. Our ...',
            logo: 'https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fawc-platform-prod%2Fo%2Fawe24%252Fdisplay-logos%252F1724293622_5ng03tv_site-%255BB51-Adcash%255D.png%3Fgeneration%3D1724293624344940%26alt%3Dmedia&w=1920&q=75',
            tag: 'OFFICIAL PARTNER'
          },
          {
            name: 'Adcash',
            location: 'Traffic Source | Estonia',
            description: 'Adcash is a global online advertising platform for media buyers, affiliates, ad networks, and publishers. Our ...',
            logo: 'https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fawc-platform-prod%2Fo%2Fawe24%252Fdisplay-logos%252F1724293622_5ng03tv_site-%255BB51-Adcash%255D.png%3Fgeneration%3D1724293624344940%26alt%3Dmedia&w=1920&q=75',
            tag: 'OFFICIAL PARTNER'
          },
        // Add more partner objects here...
      ];
      
  return (
    <>
<div className="mt-10 mb-10">
<div className="container">
<h1 className="text-center xl:text-4xl mt-10  text-[1.6rem] font-bold blue-color mt-5 xl:mt-10 mb-10">These innovative companies are waiting to close deals with you.</h1>
<div className="w-24 h-1 bg-blue-add mx-auto mt-2"></div>

<div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
  {partners.map((partner, idx) => (
   <div
   key={idx}
   className="w-full cursor-pointer bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
              hover:border-2 hover:border-[#000] transition-all duration-300"
 >
   <div className="bg-[#211F52] text-white text-center py-2 xl:text-xl font-semibold rounded-t-xl">
     {partner.tag}
   </div>
   <div className="flex justify-center items-center p-6 border-b">
     <img src={partner.logo} alt={partner.name} className="h-12" />
   </div>
   <div className="p-4">
     <h2 className="text-[1.25rem] font-bold">{partner.name}</h2>
     <p className="text-[14px] text-gray-500 mb-2">{partner.location}</p>
     <p className="text-sm text-gray-700">{partner.description}</p>
   </div>
 </div>
 
  ))}
</div>

</div>
</div>    
    </>
  )
}

export default Exhibitors_Card
