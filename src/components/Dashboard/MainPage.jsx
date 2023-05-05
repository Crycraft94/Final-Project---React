import React, { useState } from 'react'
import { checkCircle,  frame2 , frame3 , frame4 , frame5 , plusCircle } from '../../assets/img/images'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
export const MainPage = () => {
  const [list , setList] = useState([
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    },  
    {
      header : "ساختمان تجاری بهار",
      location : "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      Meterage: "675 متر مربع"
    },
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    },  
    {
      header : "ساختمان تجاری بهار",
      location : "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      Meterage: "675 متر مربع"
    },
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    }
  ])
  return (
    <>
      <div className='container mx-auto w-full'>
      <div tabIndex={0} className="collapse  bg-base-100 rounded-box m-6">
      <input type="checkbox" className="peer" />
  <div className="collapse-title text-xl font-bold p-4 flex justify-between flex-row-reverse">
    <BsFillArrowDownCircleFill />
    <span>اعلانات</span>
  </div>
      <div className="collapse-content">
        <p className='bg-[#FFF0E1] text-[#FF8A00] p-2 rounded-lg mb-2 text-sm md:text-md'>درخواست تسهیلات طرح ویژه بهسازی و مسکن روستایی با کد رهگیری 6531279513 نیاز به بازبینی و تکمیل مدارک دارد. </p>
        <p className='bg-[#E9FFEE] text-[#49C264]  p-2 rounded-lg  mb-2 text-sm md:text-md'>درخواست خدمات فنی صدور پروانه برای تخریب و نوسازی ملک مورد تائید قرار گرفت.</p>
        <p className='bg-[#FFE5E5] text-[#E91919] p-2 rounded-lg mb-2 text-sm md:text-md'>مدارک مالکیتی ثبت شده برای ملک با شناسه 5312 مورد تائید واقع نشد و نیاز به بررسی دارد.</p>
        <div className='flex flex-row justify-center items-center gap-2'>
        <a href='#' className='block text-center'>مشاهده همه موارد </a>
        <IoIosArrowBack />
        </div>
      </div>
    </div>
    <div className='father flex flex-col md:flex-row justify-between gap-6 m-6 columns-2'>
    <div className='p-4 bg-white rounded-box w-full md:w-1/2 relative'>
      <h1 className='text-xl font-bold mb-4'>وضعیت حساب کاربری</h1>
      <input type="range" className='w-full  ' value={100} />
      <span className='absolute left-[10px] top-[58px] bg-[#0275FF] rounded-full p-[2px] pt-[4px] text-xs font-bold'>100</span>
      <p className='items-center flex gap-2 text-sm mt-2'><img src={checkCircle} alt="" /> اطلاعات حساب کاربری شما تکمیل و تائید شده است</p>
    </div>
    <div className='p-4 bg-white rounded-box w-full md:w-1/2'>
    <h1 className='text-xl font-bold mb-4'>درخواست‌ها</h1>
    <div className='flex flex-row columns-4 justify-around'>
      <div className='flex flex-col gap-2 text-sm items-center cursor-pointer'>
      <img src={frame2} alt="" />
      <span>تکمیل</span>
      </div>
      <div className='flex flex-col gap-2 text-sm items-center cursor-pointer'>
      <img src={frame3} alt="" />
      <span>در دست بررسی</span>
      </div>
      <div className='flex flex-col gap-2 text-sm items-center cursor-pointer'>
      <img src={frame4} alt="" />
      <span>نیاز به بازبینی</span>
      </div>
      <div className='flex flex-col gap-2 text-sm items-center cursor-pointer'>
      <img src={frame5} alt="" />
      <span>رد شده</span>
      </div>
    </div>
    </div>
    </div>

    <div tabIndex={0} className="collapse  bg-base-100 rounded-box m-6">
      <input type="checkbox" className="peer" />
  <div className="collapse-title text-xl font-bold p-4 flex justify-between flex-row-reverse">
  <BsFillArrowDownCircleFill />
    <span>لیست املاک</span>
  </div>
      <div className="collapse-content">
   <div className='grid  sm:grid-cols-3 gap-4'>
   <Link to="/dashboard/create" className='w-full bg-white p-4 border-2 border-[#1C4B82] border-dashed rounded-lg  items-center flex justify-center cursor-pointer'>
            <p className='text-[#1C4B82] font-bold text-center flex flex-row gap-2'><img src={plusCircle} alt="" /> افزودن ملک جدید</p>
            </Link>
       {
        list.map((item)=>
        <Link to='/dashboard/details' className='w-full bg-[#F5F6FB] p-4 rounded-lg'>
        <h1 className='font-bold text-[#1C4B82] mb-4'>{item.header}</h1>
        <p className='gap-4 flex'><span className='font-bold'>موقعیت</span>{item.location}</p>
        <p className='gap-4 flex'><span className='font-bold'>مالکیت</span>{item.ownership}</p>
        <p className='gap-4 flex'><span className='font-bold'>متراژ</span>{item.Meterage}</p>
        </Link>
        )
       }
   </div>
         <Link to='/dashboard/manage'>
      <div className='flex flex-row justify-center items-center gap-2 mt-8 mb-4'>
        <a href='#' className='block text-center'>مشاهده همه موارد </a>
        <IoIosArrowBack />
        </div>
      </Link>
      </div>
    </div>
      </div>
    </>
  )
}
