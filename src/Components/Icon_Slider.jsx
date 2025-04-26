import React from "react";
import icon from "../assets/Icon_Slider/icon.webp";
const Icon_Slider = () => {
  const data = [
    { id: 1, img: icon },
    { id: 2, img: icon },
    { id: 3, img: icon },
    { id: 4, img: icon },
    { id: 5, img: icon },
    { id: 6, img: icon },
    { id: 7, img: icon },
    { id: 8, img: icon },
    { id: 9, img: icon },
    { id: 10, img: icon },
    { id: 11, img: icon },
    { id: 12, img: icon },
    { id: 13, img: icon },
    { id: 14, img: icon },
    { id: 15, img: icon },
    { id: 16, img: icon },
    { id: 17, img: icon },
    { id: 18, img: icon },
    { id: 19, img: icon },
    { id: 20, img: icon },
    { id: 21, img: icon },
    { id: 22, img: icon },
    { id: 23, img: icon },
    { id: 24, img: icon },
    { id: 25, img: icon },
    { id: 26, img: icon },
    { id: 27, img: icon },
    { id: 28, img: icon },
    { id: 29, img: icon },
    { id: 30, img: icon },
  ];
  

  return (
    <>
      <marquee behavior="" direction="" className="mb-0 absolute bottom-[10px]">
        <div className="flex">
          {data.map((item, index) => {
            return (
              <img
                key={item.id}
                src={item.img}
                alt={item.img}
                className="w-[100px]"
              />
            );
          })}
        </div>
      </marquee>
    </>
  );
};

export default Icon_Slider;
