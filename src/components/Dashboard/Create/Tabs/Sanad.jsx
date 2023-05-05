import React from 'react'
import { line2 } from '../../../../assets/img/images'
import { Tab2Footer } from './Tab2Footer'
import { useForm } from "react-hook-form";

export const Sanad = () => {
  const { register,  formState: { errors } } = useForm();
  return (
      <>
            <img src={line2} alt="" className='mt-6 mx-auto w-full px-2' />
     
      <div className='grid-cols-2 flex-col sm:flex-row flex justify-around gap-4 items-center my-6'>
      <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">بخش ثبتی*</label>
            <input type="text" className="input input-bordered w-full"  {...register("exampleRequired4", { required: true })} />
            {errors.exampleRequired4 && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">مفروز*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
      </div>
      <div className='grid-cols-2 flex-col sm:flex-row flex justify-around gap-4 items-center my-6'>
      <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">قطعه*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">اصلی*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
      </div>
      <div className='grid-cols-2 flex-col sm:flex-row flex justify-start gap-4 items-center my-6'>
      <div className="form-control w-full sm:w-1/2 relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">فرعی*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
      </div>
           <img src={line2} alt="" className='mt-6 mx-auto w-full px-2' />

          <Tab2Footer />
    </>
  )
}
