import React from 'react'
import Image from 'next/image'
import Logo from '../images/icons/logoFooter.svg'
import Twitter from '../images/icons/twitter.svg'
import Facebook from '../images/icons/facebook.svg'
import Linkedin from '../images/icons/linkedin.svg'

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA]  pr-28 pl-28 max-lg:pl-14 max-lg:pr-14 pt-20 mt-20">
      <div className="max-w-7xl">
        <div className="grid justify-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <Image src={Logo} alt="Async Digital Logo" className="h-8 w-auto mb-4"  />
            <p className="text-gray-600 text-sm max-w-[350px]">
              Lorem ipsum dolor sit amet consectetur. Est molestie et sem integer suscipit consectetur.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[{ title: "Products", link: "#product" },
              { title: "Vision", link: "#vision" },
              { title: "What We Do", link: "#what-we-do" },
              { title: "Careers", link: "#career" },
              { title: "Team", link: "#team" },
              { title: "Contact Us", link: "#client" }].map((item) => (
                <li key={item}>
                  <a href={item.link} className="text-gray-600 hover:text-gray-900">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Chromecast X Streamer', 'AI Translator & Dictionary', 'VPN X', 'Agent X'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Enterprise Solutions', 'AI Drone Surveillance Solutions', 'Military Grade Combat Solutions', 'Digital Disaster Response Solutions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us on socials</h3>
            <p className="text-sm text-gray-600 mb-4">
              Track the latest releases and updates, ask questions, and suggest product improvements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Image src={Linkedin} alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Image src={Facebook} alt="Facebook" width={32} height={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Image src={Twitter} alt="Twitter" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © Copyright 2024 All Rights Reserved by Async Digital Network
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer