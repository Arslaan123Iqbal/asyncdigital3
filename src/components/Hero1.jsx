"use client";
import React, { useState } from 'react'
import './Carousel/FancyCarousel.css'
import Icon2 from '../images/icons/icon2.svg';

import Icon4 from '../images/icons/icon4.svg';
import Icon5 from '../images/icons/icon5.svg';
import Icon6 from '../images/icons/icon6.svg';
import Icon7 from '../images/icons/icon7.svg';
import Icon8 from '../images/icons/icon8.svg';
import Icon9 from '../images/icons/icon9.svg';
import Icon10 from '../images/icons/icon10.svg';

import Wheel from './Carousel/Wheel';
import Image from 'next/image';

import Logo from '../images/logo.svg'
import { FancyCarousel } from './Carousel/FancyCarousel';
const images = [Icon2, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10]

// const images = [Icon10]


const Hero1 = () => {

    const [focusElement, setFocusElement] = useState(0);
    return (
        <div id='product' className='mt-16 bg-[#F1F3F4] p-20 max-xl:p-10 rounded-3xl flex max-xl:flex-col-reverse justify-center items-center overflow-hidden'>
            <FancyCarousel
                images={images}


                carouselRadius={200}
                peripheralImageRadius={40}
                centralImageRadius={140}
                key={`i-${images}`}

                autoRotateTime={2}
                borderWidth={2}
                borderHexColor={'1c364f'}
            />

<div>
<div className='max-md:text-center p-16  max-md:pb-20 max-md:p-0 max-md:pt-16  rounded flex flex-col  gap-4
            '>
                <h1 className='text-tblack font-extrabold text-5xl'>Our Products</h1>
                <p className='text-tgray text-[28px]'>Async Digital is reshaping industries globally with our revolutionary products and services</p>
            </div>  
</div>

        </div>
    )
}

export default Hero1