import React from "react";
import consoltimg from "/images/consolt.png";
import eatwellimg from "/images/Eatwell.png";
import escentimg from "/images/Escent.png";
import optimalimg from "/images/optimal.png";
import prop44img from "/images/prop44.png";
import devRes from "/Omirin Adebayo Dev.pdf";

const Coding = () => {
  return (
    <div>
      <span className="hidden md:flex w-full md:items-center">
        <div className="w-[15%] text-[10px] md:text-[20px]">
          Recent Projects
        </div>
        <div className="border-[1px] border-black h-0 w-[85%]"></div>
      </span>
      <div className="mt-0 md:mt-[2rem] px-[2rem] flex md:justify-between">
        {/* <div className="hidden md:block w-[200px] lg:w-[400px] h-[250px] lg:h-[450px] bg-blue-400 mx-auto md:mx-0">
          Escent Store
        </div>
        <div className="flex flex-col md:block mx-auto md:mx-0 scale-[0.7] lg:scale-[1]">
          <div className="flex h-fit  justify-center flex-col md:flex-row mx-auto md:mx-0">
            <div className="w-[250px] h-[300px] bg-green-400">
              Technologies used in the project
            </div>
            <div className="md:w-[250px] my-auto flex mx-auto justify-center">
              Coding
            </div>
          </div>
          <div className="flex flex-col w-[250px] float-right text-right mt-[2rem]">
            <div className="font-bold text-[16px]">CONSOLT</div>
            <div className="flex justify-self-end">
              B2B Health Startup that provides revolutionary data and inventory
              management for establishments
            </div>
          </div>
        </div> */}
      </div>

      {/* Other Projects */}
      <div>
        {/* <div className="flex text-[30px] justify-end mt-[2rem] mx-[4rem]">
          Other projects
        </div> */}
        <div className="mt-[2rem] flex flex flex-wrap justify-center md:grid grid-cols-6 grid-rows-3 gap-[1rem]">
          {/* Project 1 */}
          <a
            rel="noopener noreferrer"
            className="no-underline col-start-1 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  {/* <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  /> */}
                  <img
                    src={prop44img}
                    alt=""
                    className="w-full inset-0 opacity-75"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Prop44</span>
                  <span className="max-w-[13rem] text-[13px]">
                    A gamechanger for Real Estate. Prop44 makes renting a home
                    easy for its users residing in India
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 2 */}
          <a
            rel="noopener noreferrer"
            className="no-underline row-start-1 col-start-4 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  {/* <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  /> */}
                  <img
                    src={consoltimg}
                    alt=""
                    className="w-full inset-0 opacity-75"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Consolt</span>
                  <span className="max-w-[13rem] text-[13px]">
                    A novel tele-medicine webapp and blog that briges the
                    healthcare gap in Nigeria startup
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 3 */}
          <a
            rel="noopener noreferrer"
            className="no-underline row-start-2 col-start-2 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  {/* <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  /> */}
                  <img
                    src={optimalimg}
                    alt=""
                    className="w-full inset-0 opacity-75"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Optimal Commercial Agency</span>
                  <span className="max-w-[13rem] text-[13px]">
                    A landing page for travel agent. A hassle-free solution to
                    flight-booking
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 4 */}
          <a
            rel="noopener noreferrer"
            className="no-underline row-start-2 col-start-5 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  {/* <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  /> */}
                  <img
                    src={escentimg}
                    alt=""
                    className="w-full inset-0 opacity-75"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Escent Store</span>
                  <span className="max-w-[13rem] text-[13px]">
                    An Ecommerce store with the typical features for a luxury
                    brand with easy navigation and payment processes
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 5 */}
          <a
            rel="noopener noreferrer"
            className="no-underline row-start-3 col-start-3 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  {/* <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  /> */}
                  <img
                    src={eatwellimg}
                    alt=""
                    className="w-full inset-0 opacity-75"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">EatWell</span>
                  <span className="max-w-[13rem] text-[13px]">
                    A landing page for a diet-planning business. Users could
                    customize meal plans and buy in the store
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href={devRes}
          download="Resume"
          className="py-3 px-2 rounded-lg border border-black bg-opacity-40 bg-violet-300 hover:bg-[#1c2947] hover:text-white text-[16px]"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Coding;
