import React from 'react'
import { MdAccountBox } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import { NavLink } from 'react-router-dom';

const ProfileSidebar = () => {
  return (
    <section className='basis-[16%] h-[100vh] bg-slate-600 text-white p-2 text-[18px]'>
      <nav>
        <ul className='flex flex-col gap-2'>
          <li><NavLink  className='hover:bg-slate-400 rounded flex items-center w-full p-3 gap-1'><MdAccountBox/>My Account</NavLink></li>
          <li><NavLink to={'/ProfileContainer/AddProfile'} className='hover:bg-slate-400 rounded flex items-center w-full p-3 gap-1'><IoPersonAdd />Add Profile</NavLink></li>
          <li><NavLink to={'/ProfileContainer/ChangePassword'} className='hover:bg-slate-400 rounded flex items-center w-full p-3 gap-1'><RiLockPasswordFill/>Change Password</NavLink></li>
          <li><NavLink to={'/ProfileContainer/UploadPhoto'} className='hover:bg-slate-400 rounded flex items-center w-full p-3 gap-1'><MdAddAPhoto/>Upload Photo</NavLink></li>
          <li><NavLink to={'/ProfileContainer/Settings'} className='hover:bg-slate-400 rounded flex items-center w-full p-3 gap-1'><IoSettingsOutline/>Settings</NavLink></li>
        </ul>
      </nav>
    </section>
  )
}

export default ProfileSidebar
