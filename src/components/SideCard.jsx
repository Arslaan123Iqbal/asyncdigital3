import React from 'react'
import Girl from '../images/girl.png'
import Image from 'next/image'
import Card from './Carousel/Card'

const SideCard = () => {
  return (
    <div>
        <div className=''>
        <Image src={Girl} className='w-[80%] max-md:hidden' alt='fit'/>
        </div>
        <div className='grid grid-cols-2 gap-5 pt-10 max-md:grid-cols-1'>
            <Card/>
            <Card/> 
            <Card/>
            <Card/>  
        </div>
        <Image src={Girl} alt='grrl' className='w-[80%] pt-5 hidden max-md:block'/>
    </div>
  )
}

export default SideCard