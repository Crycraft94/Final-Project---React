import React from 'react'
import { map } from '../../../assets/img/images';

export const DetailsBahar = () => {
  return (
    <>
     <div className='m-6 p-4 bg-white rounded-box '>
            <div className='grid-cols-2 justify-between flex lg:flex-row flex-col'>
                <div className='lg:w-2/3 w-full mb-4'>
                <h1 className='font-bold text-xl text-[#1C4B82] mb-6'>ساختمان تجاری بهار</h1>
                <div className='flex grid-cols-2 gap-2 mb-1'>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span className='font-bold'>استان</span>
                    <span>تهران</span>
                    </div>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>شهرستان</span>
                    <span>تهران</span>
                    </div>
                </div>
                <hr  className='max-w-full w-[90%] mb-1'/>
                <div className='flex grid-cols-2 gap-2 mb-1'>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>بخش</span>
                    <span>مرکزی</span>
                    </div>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>دهستان|شهر</span>
                    <span>تهران</span>
                    </div>
                </div>
                <hr  className='max-w-full w-[90%] mb-1'/>
                <div className='flex grid-cols-2 gap-2 mb-1'>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>روستا|شهر</span>
                    <span>تهران</span>
                    </div>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>مساحت زمین</span>
                    <span>250 متر مربع</span>
                    </div>
                </div>
                <hr  className='max-w-full w-[90%] mb-1 text-sm'/>
                <div className='flex grid-cols-2 gap-2 mb-1'>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>نوع مالکیت</span>
                    <span>سند شش دانگ</span>
                    </div>
                    <div className='flex w-1/2 gap-10 text-sm'>
                    <span  className='font-bold'>آدرس</span>
                    <span>میدان ولیعصر، بلوار کشاورز، خیابان
فلسطین شمالی، خیابان غفاری</span>
                    </div>
                </div>
                </div>
                <div>
                <img src={map} alt="" />
                </div>
            </div>
            </div>
    </>
  )
}
