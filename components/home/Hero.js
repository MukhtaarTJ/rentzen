import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat pt-20 h-fit"
      style={{ backgroundImage: `url(/assets/BG.png)` }}>
      <div className=" flex flex-col justify-center items-center  ">
        <h1 className="text-left px-6 md:text-center pt-20 text-4xl md:text-5xl font-extrabold max-w-[700px] leading-snug md:leading-[60px] ">
          Streamline Your Property Management with RentZen
        </h1>
        <p className="px-6 text-left md:text-center text-2xl pt-5 max-w-[620px] leading-relaxed">
          Effortlessly Manage Your Rental Properties and Tenants the easy way
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 gap-4">
        <div className="bg-[#050b19] max-w-40 py-2 px-4 flex items-center rounded-full gap-2">
          <div className="">
            <Image src="/assets/playstore.png" width={20} height={20} />
          </div>

          <div className="text-white justify-center items-start">
            <p className="text-[10px]">GET IT ON</p>
            <p className="text-center">Google Play</p>
          </div>
        </div>
        <div className="bg-[#050b19] max-w-40 py-2 px-4 flex items-center rounded-full gap-2">
          <div className="">
            <Image src="/assets/apple.png" width={20} height={20} />
          </div>

          <div className="text-white justify-center items-start">
            <p className="text-[10px]">GET IT ON</p>
            <p className="text-center">Google Play</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center py-10">
          <Image 
          src="/assets/endorse.png"
          width={200}
          height={200}
          />
        </div>
        
      </div>
      <div className="flex justify-center items-center py-10 px-6">
          <Image 
          src="/assets/Building.png"
          width={700}
          height={700}
          />
        </div>
    </div>
  );
};

export default Hero;
