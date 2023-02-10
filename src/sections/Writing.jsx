import React from "react";

const Writing = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[4rem] h-fit md:h-[25rem] mt-0 md:mt-[2rem]">
        <div className="font-bold h-[40px]">
          I'm the copywriter you never knew you needed
        </div>
        <div className="max-w-[40rem] text-center">
          I can write about nearly anything I love to familiarise myself by
          researching your industry before I get started. Thus, I am comfortable
          writing on any topic and industry. Wondering if your project is too
          technical or niche? Send me a message first and we can talk about it.
        </div>
        <div>
          I am open to: Freelance A freelance relationship may be a better
          option to get the help you need if: a. Your current staff lacks the
          expertise to fulfill a new requirement b. You are not financially
          ready to hire employees c. Your needs are short-term 👉🏻 Project basis
          👉🏻 Remote working Contractors If you are looking for a more heavy
          loads of work, you can consider a contractor relationship We will draw
          up an agreement, including the expected timeframe for how long the
          project should last 👉🏻 Full time 👉🏻 Contract basis 👉🏻 Remote working
        </div>
      </div>

      {/* Niche Samples */}
      <div>
        <div className="flex text-[30px] justify-end mt-[2rem] mx-[4rem]">
          Niche samples
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

export default Writing;
