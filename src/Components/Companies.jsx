import React from 'react';
import Company_Card_2 from './Company_Card_2';

const Companies = () => {
  const data = [
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1744013115_ahb8ky6_appective-logo-320-x-80-kopya.png&w=1920&q=75"
    },
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1740678219_me0077z_CBH-mono-BLACK.png&w=1920&q=75"
    },
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1744013115_ahb8ky6_appective-logo-320-x-80-kopya.png&w=1920&q=75"
    },
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1740678219_me0077z_CBH-mono-BLACK.png&w=1920&q=75"
    }, {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1744013115_ahb8ky6_appective-logo-320-x-80-kopya.png&w=1920&q=75"
    },
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1740678219_me0077z_CBH-mono-BLACK.png&w=1920&q=75"
    },
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1744013115_ahb8ky6_appective-logo-320-x-80-kopya.png&w=1920&q=75"
    },
    {
      img: "https://affiliateworldconferences.com/europe/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fawc-platform-prod%2Fawe25%2Fbadge-logos%2F1740678219_me0077z_CBH-mono-BLACK.png&w=1920&q=75"
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center xl:text-4xl mt-10  text-[1.6rem] font-bold blue-color mt-5 xl:mt-10 mb-10">
        These innovative companies are waiting to close deals with you.
      </h1>
      <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 mb-10">
        {data.map((company, index) => (
          <Company_Card_2 key={index} img={company.img} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
