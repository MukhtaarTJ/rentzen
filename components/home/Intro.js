import React from "react";
import Image from "next/image";
const Intro = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat pt-10 h-fit bg-gradient-to-r from-#F4F6FE to-#FFEDE8"
      >
      <div className="flex flex-col justify-center items-center px-6">
        <h1 className="text-left px-6 md:text-center pt-20 text-3xl md:text-5xl font-extrabold max-w-[800px] leading-snug md:leading-[60px] ">
          Say hello to simplified property management with RentZen
        </h1>
        <p className="px-6 text-left md:text-center text-2xl  max-w-[800px] pt-10">
          RentZen is designed with landlord in mind and inspired by a landlord
          for landlords. With a well thought through of helping solve all the
          bottlenecks related to managing your properties and tenants.{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-24 py-20 px-6 md:px-20 ">
        <div className=" ">
          <div className="bg-[#fefcfc] min-w-24 py-0 md:py-5 px-7  rounded-3xl">
            <Image src="/assets/timeSaving.png" width={100} height={100} />
            <p className="text-[#fd6035] text-2xl">Time Saving</p>
            <p className="text-gray-400">
              Save time maximise your efficiency and focus on what matters -
              growing your business and maximising your rental income.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fefcfc] min-w-24 py-0 md:py-5 px-7 rounded-3xl">
            <Image src="/assets/timeSaving.png" width={100} height={100} />
            <p className="text-[#fd6035] text-2xl">Time Saving</p>
            <p className="text-gray-400">
              Save time maximise your efficiency and focus on what matters -
              growing your business and maximising your rental income.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fefcfc] min-w-24 py-0 md:py-5 px-7 rounded-3xl">
            <Image src="/assets/timeSaving.png" width={100} height={100} />
            <p className="text-[#fd6035] text-2xl">Time Saving</p>
            <p className="text-gray-400">
              Save time maximise your efficiency and focus on what matters -
              growing your business and maximising your rental income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
