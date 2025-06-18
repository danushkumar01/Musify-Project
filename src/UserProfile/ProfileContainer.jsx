import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import ProfileContext from './ProfileContext'

const ProfileContainer = () => {
    return (
        <section className='w-full h-[calc(100vh-70px)] bg-slate-800 text-gray-400 flex overflow-auto'>
            <ProfileSidebar/>
            <ProfileContext/>
        </section>
      )
}

export default ProfileContainer