import React from "react";
import img from "../assets/One_Pass/img.png";
import logo from "../assets/Who will you run into/meta.png";
import rorry from "../assets/One_Pass/rorry.png";
import icon from "../assets/One_Pass/icon.png";

const One_Pass = () => {
  return (
    <>
      <div className="xl:mt-10 mt-5 xl:mb-10 mb-5">
        <h1 className="text-center font-bold mb-5 similar-head blue-color">
          ONE PASS –{" "}
          <span className="relative inline-block red-color">
            Full Day of Opportunities!
            {/* Z-shaped SVG underline */}
            <svg
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              className="absolute left-0 bottom-[-5px] w-full h-3"
            >
              <path
                d="M0,0 L100,0 L0,20 L100,20"
                stroke="#DC2626" // red-600
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </span>
        </h1>

        <div className="container">
          {/* Content */}
        </div>
      </div>
    </>
  );
};

export default One_Pass;
