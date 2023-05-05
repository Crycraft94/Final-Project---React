import { useState , React } from 'react'
import { plusCircle } from '../../assets/img/images'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Manage = () => {
  const [list , setList] = useState([
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    },  
    {
      header : "ساختمان تجاری بهار",
      location : "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      Meterage: "675 متر مربع"
    },
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    },  
    {
      header : "ساختمان تجاری بهار",
      location : "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      Meterage: "675 متر مربع"
    },
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    },
    {
      header : "ساختمان تجاری بهار",
      location : "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      Meterage: "675 متر مربع"
    },
    {
      header : "زمین مسکونی روستایی",
      location : "تهران، پردیس، بومهن، گلخندان، طاهرآباد",
      ownership: "قولنامه",
      Meterage: " 249 متر مربع"
    },
    {
      header : "ساختمان تجاری بهار",
      location : "البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه",
      ownership: "سند شش دانگ",
      Meterage: "675 متر مربع"
    },
  ])
  return (
    <>
     <div className='w-full'>
    <div tabIndex={0} className="collapse  bg-base-100 rounded-box m-6">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-bold p-4 flex justify-between flex-row-reverse">
    <BsFillArrowDownCircleFill />
    <span>لیست املاک</span>
  </div>
      <div className="collapse-content grid  sm:grid-cols-3 gap-4">
      <Link to="../create" className='w-full bg-white p-4 border-2 border-[#1C4B82] border-dashed rounded-lg  items-center flex justify-center cursor-pointer'>
            <p className='text-[#1C4B82] font-bold text-center flex flex-row gap-2'><img src={plusCircle} alt="" /> افزودن ملک جدید</p>
      </Link>
       
        {
        list.map((item)=>
        <Link to='../details' className='w-full bg-[#F5F6FB] p-4 rounded-lg'>
        <h1 className='font-bold text-[#1C4B82] mb-4'>{item.header}</h1>
        <p className='gap-4 flex'><span className='font-bold'>موقعیت</span>{item.location}</p>
        <p className='gap-4 flex'><span className='font-bold'>مالکیت</span>{item.ownership}</p>
        <p className='gap-4 flex'><span className='font-bold'>متراژ</span>{item.Meterage}</p>
        </Link>
        )
       }
      </div>
    </div>
    </div>
    </>
  )
}
