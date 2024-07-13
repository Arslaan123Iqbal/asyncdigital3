import React from 'react'
import Heading from './atomic/Heading'
import TeamME from '../images/teamme.png'
import Linkedin from '../images/icons/linkdeinsvg.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
const Team = () => {

    const Card =()=>{
       return(
        <div className='text-center flex flex-col justify-center items-center'>
        <Image src={TeamME} height={200} width={200} alt='tream'/>
        <h1 className='text-[20px]'>Lead Generation</h1>
        <p className='text-tgray text-[14px] w-[300px]'>Drive growth and capture leads with ASYNC DIGITAL's</p>
        <Image src={Linkedin} height={100} width={100} alt='saa'/>
       </div>
       )
    }

  return (
    <div id='team' className='pb-32'>
        <div className='flex max-sm:text-center justify-center flex-col items-center'>
        <Heading>Meet our Team World’s</Heading>
        <Heading>Top 1%</Heading>
        </div>
       <div className='pt-20'>
        <Marquee>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </Marquee>
       
       </div>
    </div>
  )
}

export default Team