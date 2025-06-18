import React from 'react'
import { Outlet } from 'react-router-dom'

const AlbumContent = () => {
  return (
    <section className='basis-[84%]' >
        <Outlet/>
    </section>
    
  )
}

export default AlbumContent