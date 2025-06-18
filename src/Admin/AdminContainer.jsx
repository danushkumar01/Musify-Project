import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminContent from './AdminContent'

const AdminContainer = () => {
  return (
    <>
        <section className='w-full h-[calc(100vh-70px)] bg-slate-800 text-gray-400 flex overflow-auto'>
            <AdminSidebar/>
            <AdminContent/>
        </section>
    </>
  )
}

export default AdminContainer