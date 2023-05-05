import React from 'react'
import { line2 } from '../../../../assets/img/images'
import { Tab2Footer } from './Tab2Footer'
export const Card = () => {
  return (
    <>
     <img src={line2} alt=""  className='mt-6 mb-4 mx-auto w-full px-2' />
     <div className='grid-cols-2 flex-col sm:flex-row flex justify-around gap-4 items-center my-6'>
      <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">شماره قرارداد*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full relative">
            <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">واگذارکننده*</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
      </div>
     <img src={line2} alt="" className='mb-6 mt-4 mx-auto w-full px-2' />
     <Tab2Footer />
    </>
  )
}
