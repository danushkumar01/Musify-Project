import React from 'react'
import { Outlet } from 'react-router-dom'

const ProfileContext = () => {
  return (
    <div className='basis-[84%]'  ><Outlet /></div>
  )
}

export default ProfileContext