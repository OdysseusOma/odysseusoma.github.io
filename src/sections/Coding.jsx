import React from "react";

const Coding = () => {
  return (
    <div>
      <span className="hidden md:flex w-full md:items-center">
        <div className="w-[15%] text-[10px] md:text-[20px]">Recent Project</div>
        <div className="border-[1px] border-black h-0 w-[85%]"></div>
      </span>
      <div className="mt-0 md:mt-[2rem] px-[2rem] flex md:justify-between">
        <div className="hidden md:block w-[200px] lg:w-[400px] h-[250px] lg:h-[450px] bg-blue-400 mx-auto md:mx-0">
          Consolt HomePage
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
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <div className="flex text-[30px] justify-end mt-[2rem] mx-[4rem]">
          Other projects
        </div>
        <div className="mt-[2rem] flex flex flex-wrap justify-center md:grid grid-cols-6 grid-rows-3 gap-[1rem]">
          {/* Project 1 */}
          <div className="h-[10rem] w-[25rem] col-start-1 bg-blue-400 relative">
            <div className="flex justify-between">
              <div className="h-[10rem] w-[10rem] bg-yellow-200 rounded-[30px]"></div>
              <div className="flex flex-col items-center justify-center bg-red-400">
                <span className="font-bold">Optmial Commercial Agency</span>
                <span className="max-w-[13rem] text-[13px]">
                  Sample work can entice potential clients to reach out for more
                  of your work. Share them here.
                </span>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="h-[10rem] w-[25rem] row-start-1 col-start-4 bg-blue-400">
            <div className="flex justify-between">
              <div className="h-[10rem] w-[10rem] bg-yellow-200 rounded-[30px]"></div>
              <div className="flex flex-col items-center justify-center bg-red-400">
                <span className="font-bold">Optmial Commercial Agency</span>
                <span className="max-w-[13rem] text-[13px]">
                  Sample work can entice potential clients to reach out for more
                  of your work. Share them here.
                </span>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="h-[10rem] w-[25rem] row-start-2 col-start-2 row-start-2 bg-blue-400">
            <div className="flex justify-between">
              <div className="h-[10rem] w-[10rem] bg-yellow-200 rounded-[30px]"></div>
              <div className="flex flex-col items-center justify-center bg-red-400">
                <span className="font-bold">Optmial Commercial Agency</span>
                <span className="max-w-[13rem] text-[13px]">
                  Sample work can entice potential clients to reach out for more
                  of your work. Share them here.
                </span>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="h-[10rem] w-[25rem] row-start-2 col-start-5 bg-blue-400">
            <div className="flex justify-between">
              <div className="h-[10rem] w-[10rem] bg-yellow-200 rounded-[30px]"></div>
              <div className="flex flex-col items-center justify-center bg-red-400">
                <span className="font-bold">Optmial Commercial Agency</span>
                <span className="max-w-[13rem] text-[13px]">
                  Sample work can entice potential clients to reach out for more
                  of your work. Share them here.
                </span>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="h-[10rem] w-[25rem] row-start-3 col-start-3 bg-blue-400">
            <div className="flex justify-between">
              <div className="h-[10rem] w-[10rem] bg-yellow-200 rounded-[30px]"></div>
              <div className="flex flex-col items-center justify-center bg-red-400">
                <span className="font-bold">Optmial Commercial Agency</span>
                <span className="max-w-[13rem] text-[13px]">
                  Sample work can entice potential clients to reach out for more
                  of your work. Share them here.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
