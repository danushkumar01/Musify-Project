import React from 'react'
import { MdAccountBox } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import { NavLink } from 'react-router-dom';

const AlbumSidebar = () => {
  return (
    <section className='basis-[16%] h-[140vh] bg-slate-600 text-white p-2 text-[18px]'>
      <nav>
        <ul className='flex flex-col gap-2'>
          <li><NavLink to='/' className='hover:bg-slate-400 rounded flex items-center w-full p-3 gap-1'><MdAccountBox/>Albums</NavLink></li>
        </ul>
      </nav>
    </section>
  )
}

export default AlbumSidebar
