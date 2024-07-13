"use client";
import React, { useState, useEffect } from 'react';
import Testimonial from './Micro/Testimonail';
import Heading from './atomic/Heading';
import TeamCarousel from './TeamCarousel';
import VerticalCardSlider from './TeamCarousel';

const TestimonialCarousel = () => {

  return (
    <div className='flex relative  h-full pt-80 pb-80 mb-80'>

        {/* <TeamCarousel/> */}
        <VerticalCardSlider />
  

      <div className='absolute right-[10%]  max-[900px]:ml-auto   max-[900px]:left-[10%] max-[900px]:top-[-30%]   '>
        <div className="flex flex-col items-start gap-8 max-lg:text-center justify-end">
          <div className="w-[350px] max-[900px]:w-[100%] max-md:w-[90%]">
            <h1 className="text-tblue">Testimonial</h1>
            <Heading>
              What Our Customers Say About Us   </Heading>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;