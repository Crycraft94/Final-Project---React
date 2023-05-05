import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

export const TabBtns = ({prevTab}) => {
  return (
    <>
            <div className='flex justify-end m-4 gap-2 '>
                <button className='btn bg-[#A9B7C5] p-4 rounded-lg text-white border-0 gap-1 items-center hover:bg-[#1C4B82]' type='button' onClick={()=>prevTab()}><IoIosArrowForward />بازگشت</button>
                <button className='btn bg-[#49C264] p-4 rounded-lg text-white border-0 gap-1 items-center hover:bg-[#1C4B82]' type='submit' >ذخیره و ادامه <IoIosArrowBack /></button>
            </div>
    </>
  )
}
