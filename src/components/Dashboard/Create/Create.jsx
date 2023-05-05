import React, { useState } from 'react'
import { line,checkmark } from '../../../assets/img/images'
import { Tab1 } from './Tabs/Tab1';
import { Tab2 } from './Tabs/Tab2';
import { Tab3 } from './Tabs/Tab3';
import { Tab4 } from './Tabs/Tab4';


export const Create = () => {
  const [tab , setTab] = useState(1);
  const nextTab=(e)=>{
    setTab(tab+1);
  }
  const prevTab=()=>{
    setTab(tab-1);
  }
  return (
    <>  
        <div className='w-full sm:mx-6  my-6 bg-white rounded-box'>
        <div className='p-4'>
                <h1 className=' font-bold text-xl mb-8'>افزودن ملک جدید</h1>
                <div className='flex flex-row justify-center items-center  gap-1 sm:gap-6'>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <span className={`${tab === 1?"bg-[#1C4B82] py-2 px-4 ": "bg-[#49C164] p-4" } rounded-full text-white mb-4 font-bold self-start`}>{tab===1? "1" : <img  src={checkmark} className='w-3'/> }</span>
                    <div className='flex flex-row gap-4 w-full'>
                    <p className='font-bold'>مشخصات ملک</p>
                    <img src={line} alt=""className='sm:flex hidden' />
                    </div>
                  
                    </div>
                   
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <span className={`${tab === 2?"bg-[#1C4B82] py-2 px-4 text-white": tab > 2 ? "bg-[#49C164] p-4 " : "bg-[#F5F6FB] py-2 px-4 text-[#1C4B82]"}  rounded-full mb-4 font-bold self-start`}>{tab===2 ? "2" : tab >2 ?<img  src={checkmark} className='w-3'/> : "2"}</span>
                    <div className='flex flex-row gap-4 w-full'>
                    <p className='font-bold'>اطلاعات مالکیتی</p>
                    <img src={line} alt="" className='sm:flex hidden' />
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                    <span className={`${tab === 3?"bg-[#1C4B82] py-2 px-4 text-white": tab > 3 ? "bg-[#49C164] p-4 " : "bg-[#F5F6FB] py-2 px-4 text-[#1C4B82]"}  rounded-full mb-4 font-bold self-start`}>{tab===3 ? "3" : tab >3 ?<img  src={checkmark} className='w-3'/> : "3"}</span>
                    <div className='flex flex-row gap-4 w-full'>
                    <p className='font-bold'>موقعیت مکانی </p>
                    <img src={line} alt="" className='sm:flex hidden'/>
                    </div>
                    </div>
                   <div className='flex flex-col justify-center items-center cursor-pointer'>
                   <span className={`${tab === 4?"bg-[#1C4B82] py-2 px-4 text-white": tab > 4 ? "bg-[#49C164] p-4 " : "bg-[#F5F6FB] py-2 px-4 text-[#1C4B82]"}  rounded-full mb-4 font-bold self-start`}>{tab===4 ? "4" : tab >3 ?<img  src={checkmark} className='w-3'/> : "4"}</span>
                   <div className='flex flex-row gap-4 w-full'>
                    <p className='font-bold'>شرکا و وکلا</p>
                    </div>
                   </div>
                    
                </div>
        </div>
        {
          tab === 1 && <Tab1 nextTab={nextTab} />
        }
        {
          tab === 2 && <Tab2 nextTab={nextTab} prevTab={prevTab} />
        }
        {
          tab === 3 && <Tab3 nextTab={nextTab} prevTab={prevTab} />
        }
        {
          tab === 4 && <Tab4 prevTab={prevTab}  />
        }
     
        </div>
        
    </>
  )
}
