import React from 'react'
import { logo , frame8 , setting , notif ,grid , chimney ,inbox , exit , headset , user , transfer} from '../../assets/img/images'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
<div className='w-full'>
  <div className='navbar mx-auto px-4 shadow  bg-white'>
  <div className="navbar bg-[transparent] items-center justify-center flex p-0">
   <div className="navbar-start items-center w-full">
   <Link to='/dashboard'>
   <a href='#' className="btn btn-ghost  gap-2 text-[#1C4B82] normal-case text-sm items-center"><img src={logo} alt="" /><p className='hidden md:flex'>بنیاد مسکن انقلاب اسلامی</p></a>
   </Link>
   
  </div>
  <div className="navbar-end">
  <div className="flex gap-4 justify-end items-center">
    <div className="form-control w-[50%] sm:w-[60%] md:w-full">
      <input type="text" placeholder="جستجو..." className="input input-bordered bg-[#F5F6FA] border-0 rounded-full" />
    </div>
    <div className='justify-around w-full gap-2 hidden md:flex'>
    <div className='relative w-full'>
      <img src={frame8} alt=""  className='absolute top-[-12px] right-[-10px]'/>
    <img src={notif} alt="" className='cursor-pointer' />
    </div>
    <img src={setting} alt="" className='cursor-pointer' />
    </div>
  </div>
    <div className="dropdown lg:hidden md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact left-0 top-[40px] menu-horizontal items-start dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box flex flex-col justify-end">
        <li  className='w-full'><Link to='main'><img src={grid} alt="" className='cursor-pointer font-bold' />داشبورد </Link></li>
        <li><Link to='manage'><img src={chimney} alt="" className='cursor-pointer' /> مدیریت املاک </Link></li>
        <li><p> <img src={inbox} alt="" className='cursor-pointer' />امور مالی </p></li>
        <li><p><img src={transfer} alt="" className='cursor-pointer' />کارتابل </p></li>
        <li><p><img src={user} alt="" className='cursor-pointer' /> اطلاعات هویتی </p></li>
        <li><p><img src={headset} alt="" className='cursor-pointer' />پشتیبانی </p></li>
        <li><Link to='/'><img src={exit} alt="" className='cursor-pointer' />خروج </Link></li>
      </ul>
     </div>
    </div>
  </div>
  </div>
</div>
    </>
  )
}
