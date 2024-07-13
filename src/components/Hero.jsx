import React from 'react'
import HeroImage from '../images/hero.png'
import Image from 'next/image'
import Group from '../images/group.png'
const Hero = () => {
    return (
        <div className='flex gap-5 pt-16 items-center max-xl:flex-col'>
            <div className='flex flex-col gap-7 max-xl:text-center'
            >
                <h1 className='text-tblack  max-md:text-2xl font-extrabold text-5xl w-[90%] leading-tight'>
                    Transforming World with Digital Innovation
                </h1>
                <p className='text-tgray w-[90%] leading-7'>
                    Discover how Async Digital is reshaping industries globally with our revolutionary products and services
                </p>
                <div className='flex gap-5 text-start'>
                    <Image className='h-[70px] max-sm:h-[50px]' src={Group}  alt='group'/>
                    <div className='flex gap-2 flex-col'>
                        <h1 className='text-tblack font-bold text-[20px]'>100Million+</h1>
                        <p className='text-tgray w-[80%] max-md:w-full max-sm:text-sm'>Trusted by 100M+ people around the globe</p>
                    </div>
                </div>
            </div>
            <Image className='h-fit w-full object-contain' src={HeroImage} alt='hero'/>
           
        </div>
    )
}

export default Hero