import React from 'react'
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io'
import { FaEye } from 'react-icons/fa'

export const HistoryDetails = () => {
  return (
    <>
<div tabIndex={0} className="collapse  bg-base-100 rounded-box m-6">
      <input type="checkbox" className="peer" />
  <div className="collapse-title text-xl font-bold p-4 flex justify-between flex-row-reverse">
    <BsFillArrowDownCircleFill />
    <span>تاریخچه درخواست‌ها</span>
  </div>
      <div className="collapse-content">
        <div className='grid-cols-6 flex-row flex justify-between p-4'>
          <div className='w-[60%] font-bold text-sm'>
          نوع درخواست
          </div>
          <div className='flex flex-row justify-around w-full items-center text-right font-bold text-sm'>
          <span>
          تاریخ ثبت
          </span>
          <span>
          وضعیت
          </span>
          <span>
          کدرهگیری
          </span>
          <span>
          عملیات
          </span>
          </div>
        </div>
        <hr />
        <div className='grid-cols-6 flex-row flex justify-between p-4'>
          <div className='w-[60%] text-sm'>
          درخواست تعیین حدود وضعیت
          </div>
          <div className='flex flex-row justify-around w-full items-center text-right text-sm'>
          <span>
          12 آبان 1401
          </span>
          <span className='p-2 bg-[#49C164] text-white rounded-md'>
          تکمیل
          </span>
          <span>
          2135790264
          </span>
          <span className='text-[#4B709D] cursor-pointer flex flex-row gap-2'>
          مشاهده<FaEye />
          </span>
          </div>
        </div>
        <hr />
        <div className='grid-cols-6 flex-row flex justify-between p-4'>
          <div className='w-[60%] text-sm'>
          درخواست تسهیلات قرض الحسنه
          </div>
          <div className='flex flex-row justify-around w-full items-center text-right text-sm'>
          <span>
          12 آبان 1401
          </span>
          <span className='p-2 bg-[#FF8A00] text-white rounded-md'>
          نیاز به بازبینی
          </span>
          <span>
          2135790264
          </span>
          <span className='text-[#4B709D] cursor-pointer flex flex-row gap-2'>
          مشاهده <FaEye />
          </span>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-2 mb-4'>
        <a href='#' className='block text-center text-[#4B709D]'>مشاهده همه موارد </a>
        <IoIosArrowBack />
        </div>
       
        </div>
      </div>
    </>
  )
}
