import React from "react";
import Car from "../images/career.png";
import FormNew from "./Form";
import Image from "next/image";

const Career = () => {
  return (
    <div id="career" className="bg-gray max-lg:pt-10 mb-32 rounded-lg">
      <div className="text-center bg-gray p-12">
        <h1 className="text-tblack font-extrabold text-5xl">Careers</h1>
        <p className="text-tgray text-[28px]">Select your Area of Expertise</p>
      </div>

      <div className="flex max-lg:flex-col gap-10 pr-10 pl-10 items-center">
        <FormNew />
        <Image src={Car} className="h-[400px] w-full"  alt="card"/>
      </div>
    </div>
  );
};

export default Career;
