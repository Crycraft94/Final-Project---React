import React from 'react'
import { FaEye } from 'react-icons/fa'
export const Tab2Footer = () => {
  return (
    <>
               <div className='flex justify-between flex-row bg-[#F5F6FB] p-1 text-sm rounded-sm text-[#1C4B82] font-bold mt-4'>
            <p className='px-4'>سند ملکی شش دانگ پیوست شد</p>
            <div className='flex gap-2 px-4 items-center'>
              <span className='flex flex-row items-center cursor-pointer gap-1'>مشاهده <FaEye /></span>
              <span className='text-[red] cursor-pointer'>حذف</span>
            </div>
           </div>
           <div className='relative my-6'>
           <label className='bg-white absolute px-4 top-[-10px] right-[10px] text-xs'>سند ملکی شش دانگ*</label>
            <div className='border-2 border-dashed rounded-md border-black p-4 text-xs cursor-pointer'>
            برای انتخاب فایل روی این بخش کلیک کنید یا فایل خود را اینجا رها نمائید
           </div>
           <p className='mt-2 text-xs px-4'>انواع فایل‌های مجاز: pdf, jpg, jpeg, png, bmp, doc, docx - حداکثر سایز: 500 کیلوبایت</p>
           </div>
    </>
  )
}
