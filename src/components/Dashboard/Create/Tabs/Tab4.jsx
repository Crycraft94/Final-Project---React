import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { IoIosArrowBack ,IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export const Tab4 = ({prevTab}) => {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();
  const onSubmit =() =>addUser();
  const [data ,setData] = useState({
    firstName : "",
    lastName : "",
    code: "",
    work: ""
  })
  console.log(data);
  const [user,setUser] = useState([
    {
      firstName : "محمدحسین ",
      lastName :"رضاپور",
      code: 2090641234 ,
      work : "وکیل" 
    },
    {
      firstName:" علیرضا",
      lastName : "محمدی",
      code : 2085438109 ,
      work: "شریک"
    }
  ])
 
  const addUser=()=>{
    setUser([...user , data]);
  }
  return (
    <>
    <form className='sm:text-md text-sm' onSubmit={handleSubmit(onSubmit)}>
    <div className='grid-cols-2 flex-col sm:flex-row flex justify-around gap-4 items-center px-4 mt-8 '>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">نام*</label>
            <input type="text" className="input input-bordered w-full" {...register("nameError", { required: true })}  onChange={(e)=>setData({...data , firstName: e.target.value })}  />
            {errors.nameError && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">نام خانوادگی*</label>
            <input type="text" className="input input-bordered w-full"  {...register("lastNameError", { required: true })} onChange={(e)=>setData({...data , lastName: e.target.value})}/>
            {errors.lastNameError && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>

        </div>
        <div className='grid-cols-2 flex-col sm:flex-row  flex justify-around gap-4 items-center px-4 mt-8'>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">نام پدر*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">صادره*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>

        </div>
        <div className='grid-cols-2 flex-col sm:flex-row  flex justify-around gap-4 items-center px-4 mt-8'>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">شماره شناسنامه*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">کد ملی*</label>
            <input type="number" className="input input-bordered w-full" {...register("codeError", { required: true })}  onChange={(e)=>setData({...data , code: e.target.value})} />
            {errors.codeError && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
          </div>

        </div>
        <div className='grid-cols-2 flex-col sm:flex-row flex justify-around gap-4 items-center px-4 mt-8'>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">شماره همراه</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">کد ملی مدیرعامل</label>
            <input type="number" className="input input-bordered w-full" />
          </div>

        </div>
        <div className='grid-cols-2 flex-col sm:flex-row flex justify-around gap-4 items-center px-4 mt-8'>
        <div className="form-control w-full relative">
                <label className="label absolute py-0 top-[-10px] right-[20px] bg-white px-2">نوع*</label>
                <select className="select select-bordered" {...register("workError", { required: true })}  onChange={(e)=>setData({...data , work: e.target.value})}>
                {errors.workError && <span className='absolute text-[red] bottom-[-25px]'> فیلد  باید کامل شود!</span>}
                  <option disabled selected></option>
                  <option>وکیل</option>
                  <option>شریک</option>
                </select>
            </div>
        <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">مدارک</label>
            <div className='border-2 px-6 py-[12px] border-dashed border-black rounded-md text-sm text-[#1E1E1E] cursor-pointer'>برای انتخاب فایل روی این بخش کلیک کنید یا فایل خود را اینجا رها نمائید</div>
          </div>
        </div>
        <div className='p-4 flex justify-end'>
        <button className='btn bg-[transparent] border border-[#255387] text-[#255387] p-4 rounded-lg gap-1 items-center hover:bg-[#1C4B82] hover:text-white' type='submit' >افزودن <AiOutlinePlus /></button>
        </div>
        <div className=' justify-between flex-row flex mx-2 text-xs sm:text-sm font-bold mb-4 text-center'>
          <h1 className='w-1/3 sm:w-1/2 text-right px-4'>لیست شرکا و وکلای ملک</h1>
          <div className='w-2/3 sm:w-1/2 flex justify-center items-center'> 
          <h1 className='w-1/3'>کد ملی</h1>
          <h1 className='w-1/3'>نوع</h1>
          <h1 className='w-1/3'>عملیات</h1>
          </div>
        </div>
        <hr className='mx-6 ' />
        {
          user.map((user)=>
          <div className=' justify-between flex text-xs sm:text-sm px-2  my-4 text-center'>
          <h1 className='w-1/3 sm:w-1/2  text-right px-4'>{user.firstName}{user.lastName}</h1>
          <div className='w-2/3 sm:w-1/2 flex justify-between grid-cols-3'> 
          <h1 className='w-1/3'>{user.code}</h1>
          <h1 className='w-1/3'>{user.work}</h1>
          <div className='w-1/3 flex flex-row sm:gap-2 justify-around mx-2'>
          <h1 className='text-[#255387] font-bold'>ویرایش</h1>
          <h1 className='text-[#E91A18] font-bold'>حذف</h1>
          </div> 
          </div>
        </div>
          )
        }
      
         <div className='flex justify-end m-4 gap-2 mt-8'>
                <button className='btn bg-[#A9B7C5] p-4 rounded-lg text-white border-0 gap-1 items-center hover:bg-[#1C4B82]' type='button' onClick={()=>prevTab()}><IoIosArrowForward />بازگشت</button>
                <Link to='../manage'>
                <button className='btn bg-[#49C264] p-4 rounded-lg text-white border-0 gap-1 items-center hover:bg-[#1C4B82]' type='button' >ثبت ملک<IoIosArrowBack /></button>
                </Link>
                
        </div>
    </form>
    </>
  )
}
