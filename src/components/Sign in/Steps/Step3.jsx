import React, { useState, useContext } from 'react'
import { Timer } from '../Timer';
import { numberContext } from '../Signin';
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

export const Step3 = ({prev}) => {
  const [password ,setPassword] = useState("")
  const validate=(e)=>{
    setPassword(e.target.value);
    console.log(e.target.value);
  }
  const number = useContext(numberContext);
  return (
    <>
    <form>
    <h5>لطفا کد ارسال شده به شماره <span className='text-[#174B88]'>{number.value}</span> را وارد نمایید.</h5>
    <div className='text-[#174B88]'>
        <Timer />
    </div>
   
    <div className='relative'>
            <label className='absolute right-[20px] top-[12px] bg-white'>کد دریافتی</label>
            <input type="text" className='border-2 w-full rounded-lg p-2 my-6 bg-white ' required />
    </div>
    <div className='relative'>
            <label className='absolute right-[20px] top-[12px] bg-white'>رمز عبور</label>
            <input type="text" className='border-2 w-full rounded-lg p-2 mt-6 bg-white' required value={password} onChange={(e)=>validate(e)}/>
            <div className='relative'>
            <hr className="w-full h-1 my-4 border-0 rounded bg-[#b2b2b2]" />
            {/* <hr className={` transition-all ${password.length === 0 && "w-0"} ${password.length*10 >= 20 && "w-[20%] bg-[#fa2222] "} ${password.length*10 >= 60 && "w-[60%] bg-[#ecd14a]"} ${password.length*10 >=80 && "w-[100%] bg-[#4aec4a] "} h-1  border-0 rounded z-10 absolute top-0`} /> */}
            <hr className={` transition-all ${password.length*10 < 50 ? "w-[10%] bg-[red]" : password.length*10 >= 50 ? "w-[100%] bg-[green] " :""} h-1  border-0 rounded z-10 absolute top-0`} />
            </div>
            <div className='flex items-center'>
            <RiErrorWarningLine className='text-[#FF8A00]' />
            <h5 className='text-start text-xs'>رمز عبور باید حداقل 8 کاراکتر و ترکیبی از حروف و اعداد باشد.</h5>
            </div>  
    </div>
    <div className='relative'>
            <label className='absolute right-[20px] top-[12px] bg-white' >تکرار رمز عبور</label>
            <input type="number" className='border-2 w-full rounded-lg p-2 my-6 bg-white' required/>
    </div>
    <div className='items-center justify-end flex gap-4'>
      <button className='bg-[#A9B7C5] rounded-lg text-white px-8 py-4' type='button' onClick={()=>prev()}>بازگشت</button>
      <Link to='/dashboard'><button className='next bg-[#49C264] px-8 py-4 rounded-lg text-white' type='submit'>ادامه</button></Link>
      </div>
      </form>
    </>
  )
}
