import React from 'react'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Navbar = () => {
  return (
    <>
    <nav className='flex px-20 h-[70px] justify-between items-center bg-slate-950 text-white'>
        <Logo/>
        <Menu/>
    </nav>
    
    </>
  )
}
