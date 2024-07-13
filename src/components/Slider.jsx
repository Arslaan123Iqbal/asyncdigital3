import React from 'react'
import Chrome from '../images/icons/chrome.svg'
import Mob from '../images/mob.png'

import App from '../images/appstore.png'
import Image from 'next/image'
import Heading from './atomic/Heading'
import Marquee from 'react-fast-marquee'
const Slider = () => {
    const SliderCard = ()=>{
        return(
            <div className='bg-[#D2E3FC] flex justify-between p-10 rounded-lg mr-10 ml-10 max-lg:flex-col overflow-hidden'>
                        <div className='flex flex-col gap-6 justify-center'>
                        <Image src={Chrome} className='' alt='chtrome'/>
                        <Heading classname={'max-lg:text-2xl'}> Chromecast X Streamer</Heading>
                        <p className='text-tgray w-[300px]'>Experience the unparalleled versatility and convenience of Chrome-cast, your gateway to seamless streaming and immersive entertainment.</p>
                        <Image src={App} height={150} width={150} alt='app'/>
                        </div>
                <Image src={Mob} alt='mob' className='h-[500px] p-4 w-[40%] max-lg:h-[300px] max-lg:w-full'/>
            </div>
        )
    }
  return (
    <div className='mt-20 mb-80 box-border overflow-hidden '>
      <Marquee style={{overflow:"hidden"}}>
      <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
      </Marquee>
    </div>
  )
}

export default Slider