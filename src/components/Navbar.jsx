"use client";
import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import Image from 'next/image'
import Button from './atomic/Button'
import Link from 'next/link'
import Bars from '../images/bars.svg'
import { X } from 'lucide-react'

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const list = [
        {title:"Products",link:"#product"},
        {title:"Vision",link:"#vision"},
        {title:"What We Do",link:"#what-we-do"},
        {title:"Careers",link:"#career"},
        {title:"Team",link:"#team"},
        {title:"Contact Us",link:"#client"}
    ]

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <nav className='relative flex max-md:pr-10 max-md:pl-10 pt-5 pr-20 pl-16 justify-between shadow pb-4'>
            <div className='flex items-center gap-3 max-md:gap-1'>
                <Image src={Logo} alt="Logo" className='max-md:h-10'/>
                <h1 className='font-extrabold text-sm'>ASYNC DIGITAL</h1>
            </div>
            <div className='flex'>
               <div className='flex items-center gap-8 pr-10 max-lg:hidden'>
               {
                    list.map((lis,i)=> <a href={lis.link} key={`i-${lis.title}`} className='text-tgray'>{lis.title}</a>)
                }
               </div>

            <div className='flex gap-5 items-center'>
              <a className='max-lg:h-7 h-full' href="mailto:sales@asyncdigital.net">
              <Button   classname={"max-lg:h-7 h-full"}>Let's Talk</Button>
              </a>
                <Image className='max-lg:block hidden cursor-pointer' src={Bars} alt="Menu" onClick={toggleDrawer}/>
            </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 border right-0 h-full w-64 bg-white  transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="p-4">
                    <button onClick={toggleDrawer} className="float-right">
                        <X size={24} />
                    </button>
                    <div className="mt-12">
                        {list.map((item, i) => (
                            <Link onClick={toggleDrawer} href={item.link} key={`drawer-${item.title}`} className='block py-2 text-tgray'>{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isDrawerOpen && (
                <div className="fixed  lg:hidden" onClick={toggleDrawer}></div>
            )}
        </nav>
    )
}

export default Navbar