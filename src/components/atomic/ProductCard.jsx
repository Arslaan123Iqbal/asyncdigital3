import React from 'react'
import VPN from '../../images/icons/vpn.svg'
import Image from 'next/image'
const ProductCard = () => {
  return (
    <div className='bg-white shadow rounded-lg p-3 w-full'>
        <Image src={VPN} height={60} width={60}/>
        <h1 className='text-tblack'>VPN X Max</h1>
        <p className='text-tgray w-full'>Secure, Speedy ,Seamless</p>
    </div>
  )
}

export default ProductCard