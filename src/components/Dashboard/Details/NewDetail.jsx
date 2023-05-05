import React from 'react'
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import {IoIosInformationCircle} from 'react-icons/io'
import { house,circle,certificate,bill,building,buildingCircle,houseMedical,memo,road,houseCheck,exportfile,signature } from '../../../assets/img/images';

export const NewDetail = () => {
  return (
    <>
        <div tabIndex={0} className="collapse  bg-base-100 rounded-box m-6">
      <input type="checkbox" className="peer" />
    <div className="collapse-title text-xl font-bold p-4 flex justify-between flex-row-reverse">
    <BsFillArrowDownCircleFill />
    <span>ثبت درخواست جدید</span>
    </div>
      <div className="collapse-content">
       <div className='flex flex-row-reverse gap-2 w-full justify-end items-center font-bold'>
       <h1>اگر برای ثبت درخواست جدید اطلاعات کافی ندارید، می‌توانید از <span className='text-[#FEC175]'>راهنمای ثبت درخواست</span> کمک بگیرید.</h1>
      <IoIosInformationCircle className='text-[#4B709D]'/>
       </div>
       <h1 className='my-8 font-semibold'>خدمات فنی صدور پروانه ساختمانی</h1>
       <div className='sm:flex-row flex-col flex gap-1 sm:gap-4 text-sm'>
        <div className='border-2  text-sm w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={circle} alt="" />
          <span className='w-full text-center mt-4 '>درخواست خدمات فنی صدور پروانه</span>
        </div>
        <div className='border-2  text-sm  w-full md:w-1/3 lg:w-1/6  p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={house} alt="" />
          <span className='w-full text-center mt-4'>تعیین حدود و وضعیت</span>
        </div>
        <div className='border-2  text-sm   w-full md:w-1/3 lg:w-1/6  p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={certificate} alt="" />
          <span className='w-full text-center mt-4'>درخواست امکان صدور پایانکار/عدم خلافی</span>
        </div>
       </div>
       <h1 className='my-8 font-semibold'>تسهیلات</h1>
       <div className='sm:flex-row flex-col flex gap-1 sm:gap-4 text-sm'>
        <div className='border-2  text-sm w-full md:w-1/3 lg:w-1/6  p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={building} alt="" />
          <span className='w-full text-center mt-4'>تسهیلات طرح ویژه بهسازی و مسکن </span>
        </div>
        <div className='border-2  text-sm w-full md:w-1/3 lg:w-1/6  p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={bill} alt="" />
          <span className='w-full text-center mt-4'>تسهیلات قرض الحسنه</span>
        </div>
       </div>
       <h1 className='my-8 font-semibold'>فنی و مهندسی</h1>
       <div className='sm:flex-row flex-col flex gap-1 sm:gap-4 text-sm'>
        <div className='border-2  text-sm  w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={road} alt="" />
          <span className='w-full text-center mt-4'>درخواست اصلاح معابر</span>
        </div>
        <div className='border-2  text-sm  w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={houseMedical} alt="" />
          <span className='w-full text-center mt-4'>درخواست تغییر کاربری</span>
        </div>
        <div className='border-2  text-sm  w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={memo} alt="" />
          <span className='w-full text-center mt-4'>درخواست اصلاح ضوابط</span>
        </div>
        <div className='border-2  text-sm   w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={buildingCircle} alt="" />
          <span className='w-full text-center mt-4'>درخواست اصلاح محدوده</span>
        </div>
       </div>
       <h1 className='my-8 font-semibold'>خدمات مالکیتی</h1>
       <div className='sm:flex-row flex-col flex gap-1 sm:gap-4 text-sm'>
        <div className='border-2  text-sm w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={signature} alt="" />
          <span className='w-full text-center mt-4'>صدور سند</span>
        </div>
        <div className='border-2  text-sm  w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={exportfile} alt="" />
          <span className='w-full text-center mt-4'>قرارداد واگذاری</span>
        </div>
        <div className='border-2  text-sm  w-full md:w-1/3 lg:w-1/6 p-4 items-center justify-center flex flex-col rounded-2xl'>
          <img src={houseCheck} alt="" />
          <span className='w-full text-center mt-4'>قرارداد اجاره</span>
        </div>
       </div>
        </div>
      </div>
    </>
  )
}
