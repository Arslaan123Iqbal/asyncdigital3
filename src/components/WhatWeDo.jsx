import React from 'react'
import Heading from './atomic/Heading'
import CardWhatWeDo from './atomic/CardWhatWeDo'
import Enterprise from '../images/enterprise.png'
import Software from '../images/software.png'
import Brand from '../images/brand.png'
import Hardware from '../images/hardaware.png'
const WhatWeDo = () => {
    const list = [{image:Hardware,title:"Hardware Division",subtitle:"The three ways to divide are tally marks, place value, and multiplication"},
    {image:Software,title:"Software Division",subtitle:"The three ways to divide are tally marks, place value, and multiplication"},
    {image:Enterprise,title:"Enterprise Solutions",subtitle:"The three ways to divide are tally marks, place value, and multiplication"},
    {image:Brand,title:"Branding",subtitle:"The three ways to divide are tally marks, place value, and multiplication"},]
  return (
    <div id='what-we-do' className='pb-80'>
        <div className='flex justify-center flex-col items-center text-center gap-5'>
            <Heading>What we do</Heading>
            <p className='text-tgray'>Explore Our Comprehensive Range of Digital<br/> Solutions Tailored Your Unique Story</p>
        </div>
        <div className='pt-10 flex flex-col gap-4'>
         {
            list.map((lis,i)=>   <CardWhatWeDo title={lis.title} subtitle={lis.subtitle} image={lis.image} key={lis}/>)
         }
            
        </div>
    </div>
  )
}

export default WhatWeDo