import {useState , React , useContext  } from 'react'
import { valueContext } from '../Signin';
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from 'react-icons/io'

export const Step1 = ({next}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =() =>next();
  const value = useContext(valueContext);
  console.log(value);
    const [status, setStatus] = useState(1) // 0: no show, 1: show yes, 2: show no.
    const radioHandler = (status) => {
          setStatus(status);
        }

  return (
    
    <> 
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-row gap-6'>
        <div className='items-center'>
        <input type="radio" name='input' id='input1' className='bg-white' checked={status === 1} onChange={(e) => radioHandler(1)} />
        <label className='mr-2 text-lg' htmlFor='input1'>حقیقی</label>
        </div>
        <div className='items-center'>
        <input type="radio" name='input' id='input2' className='bg-white'  checked={status === 2} onChange={(e) => radioHandler(2)}/>
       
        <label className='mr-2 text-lg' htmlFor='input2'>حقوقی</label>
        </div>
        </div>
        {
            status === 1 &&
            <div className='relative flex flex-col'>
            <label className='absolute right-[20px] top-[12px] bg-white'>کد ملی</label>
            <input type="number" className='border-2 w-full rounded-lg p-2 mt-6 bg-white' onInput={(e)=>value.code(e)} {...register("errorNum", { required: true , minLength:10 , maxLength:10})} />
            {errors.errorNum && <span className='absolute text-[red] bottom-[-25px]'>نامعتبر!</span>}
            </div>
        }
        {
            status === 2 &&  
            <div className='relative'>
            <label className='absolute right-[20px] top-[12px] bg-white'>شناسه ملی</label>
            <input type="number" className='border-2 w-full rounded-lg p-2 mt-6 mb-20 bg-white'required />
            </div> 
        }
       
        <div className='items-center justify-end flex gap-4 mt-20'>
        <button className='bg-[#1C4B82] p-4 rounded-lg text-white' type='button'>ورود از درگاه دولت من</button>
        <button className='next bg-[#49C264] p-4 rounded-lg text-white flex flex-row-reverse items-center gap-1' type='submit'> <IoIosArrowBack />ادامه</button>
        </div>
        </form>

    </>
   
  )
}
