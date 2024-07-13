import React from "react";
import VisionImage from "../images/vision.png";
import Image from "next/image";
import Heading from "./atomic/Heading";
import Companies from "../images/companies.png";
import Livs from "../images/livs.png";
const Vision = () => {
  return (
    <>
      <div id="vision" className="flex gap-4 pt-32 pb-32 max-lg:flex-col">
        <div
          className="bg-[#F0FBF3] p-16 max-md:p-6 rounded flex flex-col  gap-4
            "
        >
          <h1 className="text-tblack font-extrabold text-5xl max-md:text-3xl">
            Our Vision
          </h1>
          <p className="text-tgray text-[28px] max-md:text-[18px]">
            At Async Digital, our mission is simple: to empower success in the
            digital world. Through innovative solutions and exceptional service,
            we enable businesses and individuals to thrive, grow, and achieve
            their goals with confidence
          </p>
        </div>

        <Image className="h-[400px] max-lg:h-fit w-[100%]" src={VisionImage} />
      </div>

      <div className="flex gap-16 max-lg:flex-col-reverse items-center justify-between pt-32 pb-32">
        <Image src={Companies} className="h-[400px] w-[50%] max-lg:w-fit" />

        <div className="flex flex-col gap-8 max-lg:text-center">
          <div className="w-[350px] max-lg:w-full">
            <h1 className="text-tblue">
              our experience allows us to bring values
            </h1>
            <Heading classname={"max-md:text-2xl"}>
              Some Friends we’ve Made in the Process
            </Heading>
          </div>
        </div>
      </div>

      <div className="flex gap-16 pt-10 pb-80 max-lg:flex-col">
        <div
          className="  max-md:p-6 rounded flex flex-col  gap-4 max-md:text-center
            "
        >
          <h1 className="text-tblack font-extrabold text-5xl max-md:text-3xl max-md:text-center max-md:w-full w-[350px] leading-tight">
            Making Lives easier with cutting edge innovation.
          </h1>
          <p className="text-tgray text-[28px] max-md:text-[18px]">
            At ASYNC DIGITAL, we promise excellence tailored to you. Our
            dedicated team crafts bespoke solutions to meet your unique needs,
            ensuring standout results in every project. Experience tailored
            excellence with us.
          </p>
        </div>

        <Image className="h-[400px] max-lg:h-fit w-[100%]" src={Livs} />
      </div>
    </>
  );
};

export default Vision;
