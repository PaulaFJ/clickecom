import { InstagramLogo, FacebookLogo } from 'phosphor-react'

import logo from '../assets/logo.png'

export function Footer() {
  return (
    <div className="relative inset-x-0 bottom-0 flex justify-between items-center bg-[#ff3659] px-24 pt-12 mb-0">
       <img src={logo} alt="Clickecom" className="w-26 h-24 "/>

      <ul className="flex gap-3">
        <li>
          <a href="https://instagram.com/clickecom" >
            <InstagramLogo size={24} color="white"/>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/clickecom" >
            <FacebookLogo size={24} color="white"/>
          </a>
        </li>
      </ul>
    </div>
  )
}