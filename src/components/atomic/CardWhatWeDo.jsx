import React from 'react'
import Star from '../../images/icons/star.svg'
import Image from 'next/image'
import HardWare from '../../images/hardaware.png'
import Heading from './Heading'
const CardWhatWeDo = ({title, subtitle, image}) => {
  return (
    <div className='bg-gray rounded-lg'>
        <Image src={Star} height={30} width={30}/>
        <div className='pl-7 flex max-md:flex-col max-md:text-center gap-28 max-[800px]:gap-5 items-center'>
            <Image src={image} height={200} width={200}/>
            <div className='flex  flex-col gap-4'>
                <Heading>{title}</Heading>
                 <p className='text-tgray w-[300px]'>{subtitle}</p>
            </div>
        </div>
        <div className='flex justify-end'>
        <Image src={Star} height={30} width={30}/>
        </div>
    </div>
  )
}

export default CardWhatWeDo