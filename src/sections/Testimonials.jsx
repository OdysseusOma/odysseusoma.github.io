import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[url(/blueee.png)] object-cover p-[3rem] min-h-screen relative flex flex-col gap-[5rem]">
      <div className="text-[55px] text-white text-center flex w-full items-center justify-center">
        Read the reviews
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[3rem] md:gap-[0rem] md:justify-between p-[3rem]">
        <div className="testimoniallist flex flex-col relative gap-[1.5rem]">
          <img src="/quoteportfolio.svg" alt="" width={30} />
          <div className="testimonialtext text-white w-[15rem] text-[16px]">
            Testimonials are short quotes from people who love your brand. It's
            a great way to convince customers to try your services.
          </div>
          <div className="testimonialauthor text-[#57e4ff]">Ingrid Correa</div>
        </div>
        <div className="testimoniallist flex flex-col relative gap-[1.5rem]">
          <img src="/quoteportfolio.svg" alt="" width={30} />
          <div className="testimonialtext text-white w-[15rem] text-[16px]">
            Testimonials are short quotes from people who love your brand. It's
            a great way to convince customers to try your services.
          </div>
          <div className="testimonialauthor text-[#57e4ff]">Ingrid Correa</div>
        </div>
        <div className="testimoniallist flex flex-col relative gap-[1.5rem]">
          <img src="/quoteportfolio.svg" alt="" width={30} />
          <div className="testimonialtext text-white w-[15rem] text-[16px]">
            Testimonials are short quotes from people who love your brand. It's
            a great way to convince customers to try your services.
          </div>
          <div className="testimonialauthor text-[#57e4ff]">Ingrid Correa</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
