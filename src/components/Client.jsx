import React from 'react'
import Car from '../images/career.png'
import FormNew from './Form'
import Image from 'next/image'
import ClinetForm from './ClinetForm'
import SideCard from './SideCard'

const Client = () => {
  return (
    <div id='client' className='bg-[#E8F0FE] mt-10 p-4 pt-16 rounded-2xl'>
    


    <div className='flex pr-10 pl-10 gap-6 max-md:pr-1 max-md:pl-1 max-lg:flex-col'>
    <ClinetForm/>
  
    <SideCard/>
    </div>
    </div>
  )
}

export default Client