import React from "react";
import img from "../assets/One_Pass/img.png";
import logo from "../assets/Who will you run into/meta.png";
import rorry from "../assets/One_Pass/rorry.png";
import icon from "../assets/One_Pass/icon.png"
const One_Pass = () => {
  return (
    <>
      <div className="xl:mt-10 mt-5 xl:mb-10 mb-5">
        <h1 className="text-center font-bold mb-5 similar-head blue-color">
        ONE PASS

        </h1>
        <p className="text-center font-bold similar-head red-color">
        Full Day of Opportunies
        </p>
        <div className="container">
          {/* grid grid-cols- sm:grid-cols-2 xl:grid-cols-4 */}
          <div class="flex  gap-4 p-4 xl:flex-row flex-col">
            {/* Card 1 */}
            <div class="bg-white p-3 rounded-xl shadow-md w-[100%] flex flex-col border-1 border-[#0a082f38]">
              <div
                className=" flex justify-center items-center h-40 w-full border-2 border-none rounded"
                style={{
                  background: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-white xl:text-[1rem] text-center uppercase">
                  world-class
                  <br />
                  <span className="xl:text-[1.85rem] font-bold uppercase">
                    marketplace
                  </span>
                </p>
              </div>
              <div className="text mt-5">
                <p>
                  Access to over 300+ advertisers, traffic sources, networks on
                  our world-renowned marketplace.
                </p>
              </div>
              <div className="down-sect mt-5">
                <p className="text-left  uppercase text-[1rem] font-semibold">
                  past exhibitors include:
                </p>
                <div className="image mt-5 flex justify-center gap-10">
                  <div className="flex flex-col gap-5">
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />{" "}
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />{" "}
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />{" "}
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />{" "}
                    <img
                      src="https://affiliateworldconferences.com/europe/_next/image?url=%2Feurope%2F_next%2Fstatic%2Fmedia%2Ffiverr.68420771.png&w=1920&q=75"
                      alt=""
                      className="w-25"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div class="bg-white p-3 rounded-xl shadow-md w-[100%] flex flex-col border-1 border-[#0a082f38]">
              <div
                className=" flex justify-center items-center h-40 w-full border-2 border-none rounded"
                style={{
                  background: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-white xl:text-[1rem] text-center uppercase">
                  world-class
                  <br />
                  <span className="xl:text-[1.85rem] font-bold uppercase">
                    marketplace
                  </span>
                </p>
              </div>
              <div className="text mt-5">
                <p>
                  Access to over 300+ advertisers, traffic sources, networks on
                  our world-renowned marketplace.
                </p>
              </div>
              <div className="down-sect mt-5">
                <p className="text-left  uppercase text-[1rem] font-semibold">
                  past speakers include:
                </p>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 mt-5">
                    <img src={rorry} alt="" className="w-15 h-full" />
                    <div className="text">
                      <p className="text-[15px] font-bold">"Hacking AI: Ad Creative Systems at Scale"</p>
                      <p className="text-[14px] font-semibold">Rory Flynn

</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <img src={rorry} alt="" className="w-15 h-full" />
                    <div className="text">
                      <p className="text-[15px] font-bold">"The AICommerce Revolution: Building Scalable Brands With AI and Automation"
                      </p>
                      <p className="text-[14px] font-semibold">Robin Devon Calandri

</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <img src={rorry} alt="" className="w-15 h-full" />
                    <div className="text">
                      <p className="text-[15px] font-bold">"The AICommerce Revolution: Building Scalable Brands With AI and Automation"
                      </p>
                      <p className="text-[14px] font-semibold">Robin Devon Calandri

</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div class="bg-white p-3 rounded-xl shadow-md w-[100%] flex flex-col border-1 border-[#0a082f38]">
              <div
                className=" flex justify-center items-center h-40 w-full border-2 border-none rounded"
                style={{
                  background: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-white xl:text-[1rem] text-center uppercase">
                  world-class
                  <br />
                  <span className="xl:text-[1.85rem] font-bold uppercase">
                    marketplace
                  </span>
                </p>
              </div>
              <div className="text mt-5">
                <p>
                  Access to over 300+ advertisers, traffic sources, networks on
                  our world-renowned marketplace.
                </p>
              </div>
              <div className="down-sect mt-5">
                <p className="text-left  uppercase text-[1rem] font-semibold">
                  past speakers include:
                </p>
                <div className="flex flex-col gap-2">
                 
                  <div className="flex gap-5  items-center mt-5">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                  <div className="flex gap-5  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                  <div className="flex gap-5  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="down-sect mt-5">
                <p className="text-left  uppercase text-[1rem] font-semibold">
                  past speakers include:
                </p>
                <div className="flex flex-col gap-2">
                 
                  <div className="flex gap-5  items-center mt-5">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                  <div className="flex gap-5  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                  <div className="flex gap-5  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div class="bg-white p-3 rounded-xl shadow-md w-[100%] flex flex-col border-1 border-[#0a082f38]">
              <div
                className=" flex justify-center items-center h-40 w-full border-2 border-none rounded"
                style={{
                  background: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-white xl:text-[1rem] text-center uppercase">
                  world-class
                  <br />
                  <span className="xl:text-[1.85rem] font-bold uppercase">
                    marketplace
                  </span>
                </p>
              </div>
              <div className="text mt-5">
                <p>
                  Access to over 300+ advertisers, traffic sources, networks on
                  our world-renowned marketplace.
                </p>
                <p className="mt-5">
                  Access to over 300+ advertisers, traffic sources, networks on
                  our world-renowned marketplace.
                </p>
              </div>
              <div className="down-sect mt-5">
                <p className="text-left  uppercase text-[1rem] font-semibold">
                  past speakers include:
                </p>
                <div className="flex gap-5 mt-2  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                  <div className="flex gap-5 mt-2  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
                  <div className="flex gap-5 mt-2  items-center">
                    <img src={icon} alt="" className="" />
                    <div className="text">
                      <p className="text-[15px] ">Meta Ads Mixer
                      </p>
                     
                    </div>
                  </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default One_Pass;
