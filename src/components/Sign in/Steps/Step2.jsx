import {React ,useContext  , createContext} from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { valueContext } from '../Signin';
import { numberContext } from '../Signin';
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from 'react-icons/io'

export const Step2 = ({next , prev}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =() =>next();
  const number = useContext(numberContext);
  const value = useContext(valueContext);
 
  return (
    
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <div className='relative opacity-50'>
            <label className='absolute right-[20px] top-[12px] bg-white text-[gray]'>کد ملی</label>
            <input type="text" className='border-2 w-full rounded-lg p-2 my-6 bg-white' disabled value={value.value}/>
            </div>
      </div>
      <div>
      <div className='relative flex flex-col'>
            <label className='absolute right-[20px] top-[-10px] bg-white'>شماره همراه</label>
            <input type="number" className='border-2 w-full rounded-lg p-2 bg-white' onInput={(e)=>number.getNumber(e)}  {...register("PhoneNumber", { required: true,minLength:11 , maxLength:11})} /><RiErrorWarningLine className='absolute left-[16px] bottom-[13px]' />
            {errors.PhoneNumber && <span className='absolute text-[red] bottom-[-25px]'>نامعتبر!</span>}
            </div>
      </div>
      <div className='items-center justify-end flex gap-4 mt-10'>
      <button className='bg-[#A9B7C5] rounded-lg text-white px-8 py-4' type='button' onClick={()=>prev()}>بازگشت</button>
      <button className='next bg-[#49C264] px-8 py-4 rounded-lg text-white  flex flex-row-reverse items-center gap-1' type='submit'> <IoIosArrowBack />ادامه</button>
      </div>
    </form>
    </>
  )
}
