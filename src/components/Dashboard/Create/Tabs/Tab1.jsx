import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { line2 } from '../../../../assets/img/images'
import { useForm } from "react-hook-form";

export const Tab1 = ({nextTab}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =() =>nextTab();
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='grid-cols-2 sm:flex-row flex-col flex justify-around gap-10 sm:gap-4 items-center p-4 mt-8 sm:text-sm text-xs'>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">عنوان ملک*</label>
            <input type="text" className="input input-bordered w-full"  {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>
            <div className="form-control w-full relative">
                <label className="label absolute py-0 top-[-10px] right-[20px] bg-white px-2">استان*</label>
                <select className="select select-bordered">
                  <option disabled selected>تهران</option>
                  <option>مازندران</option>
                  <option>خراسان</option>
                  <option>گلستان</option>
                </select>
            </div>

        </div>
        <div className='grid-cols-2 sm:flex-row flex-col flex justify-around gap-4 items-center p-4 mt-2 sm:text-sm text-xs'>
   
            <div className="form-control w-full relative">
                <label className="label absolute py-0 top-[-10px] right-[20px] bg-white px-2">بخش*</label>
                <select className="select select-bordered">
                  <option disabled selected>تهران</option>
                  <option>مازندران</option>
                  <option>خراسان</option>
                  <option>گلستان</option>
                </select>
            </div>
            <div className="form-control w-full relative">
                <label className="label absolute py-0 top-[-10px] right-[20px] bg-white px-2">دهستان | شهر*</label>
                <select className="select select-bordered">
                  <option disabled selected>تهران</option>
                  <option>مازندران</option>
                  <option>خراسان</option>
                  <option>گلستان</option>
                </select>
            </div>

        </div>
        <div className='grid-cols-2 sm:flex-row flex-col flex justify-around gap-4 items-center p-4 mt-2 sm:text-sm text-xs'>
    
            <div className="form-control w-full relative">
                <label className="label absolute py-0 top-[-10px] right-[20px] bg-white px-2 ">روستا | شهر*</label>
                <select className="select select-bordered">
                  <option disabled selected>تهران</option>
                  <option>مازندران</option>
                  <option>خراسان</option>
                  <option>گلستان</option>
                </select>
            </div>
            <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2" >آدرس ملک *</label>
            <input type="text" className="input input-bordered w-full"  {...register("exampleRequired1", { required: true })} />
            {errors.exampleRequired1 && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>

        </div>
        <img src={line2} alt="" className='mt-4 mx-auto w-full px-4' />
        <div className='grid-cols-2 sm:flex-row flex-col flex justify-around sm:gap-4 gap-10 items-center p-4 mt-8 sm:text-sm text-xs'>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-0 sm:px-2 ">مساحت زمین(مترمربع)*</label>
            <input type="number" className="input input-bordered w-full"{...register("exampleRequired2", { required: true })} />
            {errors.exampleRequired2 && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">کد پستی</label>
            <input type="text" className="input input-bordered w-full" />
          </div>

        </div>
        <div className='flex justify-end'>
        <button className='btn bg-[#49C264] p-4 rounded-lg text-white border-0 m-4 gap-1 items-center hover:bg-[#1C4B82]' type='submit'>ذخیره و ادامه <IoIosArrowBack /></button>
        </div>
    </form>
      
    </>
  )
}
