import React from 'react'
import Message from '../../images/icons/message.svg'
import Phone from '../../images/icons/phone.svg'
import Location from '../../images/icons/location.svg'
import Image from 'next/image'
const Card = () => {
  return (
    <div className='bg-white rounded-lg p-4'>
      <h1 className='text-tblack text-2xl'>Karachi</h1>
      <div className='text-tgray flex flex-col gap-3'>
        <div className='flex gap-2'>
          <Image src={Location}/>
          <p className='text-[12px]'>34 Madison Street, NY, USA 10005</p>
        </div>
        <div className='flex gap-2'>
          <Image src={Message}/>
          <p className='text-[12px]'>34 Madison Street, NY, USA 10005</p>
        </div>
        <div className='flex gap-2'>
          <Image src={Phone}/>
          <p className='text-[12px]'>34 Madison Street, NY, USA 10005</p>
        </div>
      </div>
    </div>
  )
}

export default Card