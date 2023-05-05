import React, { useState } from 'react'
import { Sanad } from './Sanad'
import { Card } from './Card'
import { TabBtns } from './TabBtns'
import { useForm } from "react-hook-form";

export const Tab2 = ({nextTab , prevTab}) => {
  const { handleSubmit} = useForm();
  const onSubmit =() =>nextTab();
  const [step , setStep] = useState(1);
  console.log(step);
  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)} className='w-full p-4 bg-white rounded-box sm:text-md text-sm'>
      <div className="form-control relative">
                <label className="label absolute py-0 top-[-10px] right-[20px] bg-white px-2">نوع مالکیت*</label>
                <select className="select select-bordered w-full sm:w-1/2 my-6 " onChange={(e)=>setStep(+e.target.value)}>
                  <option value={1}>سند شش دانگ</option>
                  <option value={2}>برگه واگذاری</option>
                  <option>قولنامه</option>
                  <option>سند مشاعی</option>
                  <option>سایر</option>
                </select>
                
                {
                  step===1 && <Sanad />
                }
                {
                  step === 2 && <Card />
                }
            </div>
            <div></div>
            <TabBtns prevTab={prevTab} />
    </form>
    </>
  )
}
