import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';


export const Dashboard = () => {
  return (
    <>
    
    <div className='bg-[#F5F6FB]'>
    
      <Navbar />
      <div className='w-full flex min-h-screen sm:flex-row flex-col '>
      <Sidebar />
      <Outlet />
      </div>
    </div>

    </>
  )
}
