import {React , useState} from 'react'
import { notif2,grid ,chimney,exit,headset,inbox,transfer,user,frame, gridActive ,chimneyActive , inboxActive , userActive,headsetActive} from '../../assets/img/images'
import './sidebar.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDropdown } from 'react-icons/io'


export const Sidebar = () => {
  const [activeButton, setActiveButton] = useState()

  return (
    <>
 
  <div className="bg-white hidden sm:block md:w-[30%] p-2">
    <div className='flex justify-center items-center flex-col gap-4 border-2 p-4 rounded-lg border-gray-100'>
    <h2 className='font-bold'>محمدرضا فراهانی اصل</h2>
    <p className='text-[#a8a7a7] text-sm'>091231823123</p>
    <div className='flex items-center justify-start text-sm gap-2 bg-[#D4FFDE] p-2 rounded w-full  cursor-pointer'>
        <img src={notif2} alt=""/>
        <p className=' text-[#49C264]'>شما 8 اعلان جدید دارید</p>
    </div>
    </div>
    <div className='list flex flex-col gap-2 p-4'>
        <Link to='main'>
        <button className={`btn font-light flex justify-start border-0 ${activeButton === "1" ? "bg-[#1C4B82] text-white": "bg-white text-[#1C4B82]"} hover:text-[white]`} value={1} onClick={()=>setActiveButton("1")}><a href="#"><img src={activeButton === "1" ?  gridActive: grid } alt=""  /> داشبورد</a></button>
        </Link>
        <Link to='manage'>
        <button className={`btn font-light flex justify-start border-0 ${activeButton === "2" ? "bg-[#1C4B82] text-white": "bg-white text-[#1C4B82]"} hover:text-[white]`} value={2} onClick={()=>setActiveButton("2")}><a href="#"><img src={activeButton === "2" ? chimneyActive : chimney} alt="" /> مدیریت املاک</a></button>
        </Link>
        <button className={`btn  font-light flex justify-start border-0 ${activeButton === "3" ? "bg-[#1C4B82] text-white": "bg-white text-[#1C4B82]"} hover:text-[white]`} value={3} onClick={()=>setActiveButton("3")}><a href="#"><img src={activeButton==="3" ? inboxActive: inbox} alt="" />  امور مالی</a></button>

        <div className="collapse bg-[#F5F6FB] rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl flex flex-row  p-0 items-center collapse-arrow ">
        <button className='btn font-light flex justify-between border-0 bg-[#F5F6FB] gap-2 text-lg'  value={4} onClick={()=>setActiveButton("4")}>
        <div className='flex justify-start text-[#1C4B82]'>
        <a href="#"><img src={transfer} alt="" />
        کارتابل
        </a>
        </div>
        <IoIosArrowDropdown className='text-[#1C4B82]' />
        </button>
        </div>
        <div className="collapse-content">
          <ul className='coll-list text-[#1C4B82]'>
            <li className='cursor-pointer'> خدمات فنی <img src={frame} alt="" className='mr-2' /></li>
            <li className='cursor-pointer'>تسهیلات</li>
            <li className='cursor-pointer'>فنی و مهندسی</li>
            <li className='cursor-pointer'>خدمات مالکیتی</li>
          </ul>
        </div>
      </div>

        <button className={`btn font-light flex justify-start border-0 ${activeButton === "5" ? "bg-[#1C4B82] text-white": "bg-white text-[#1C4B82]"} hover:text-[white]`} value={5} onClick={()=>setActiveButton("5")}><a href="#"><img src={activeButton === "5" ? userActive : user} alt="" /> اطلاعات هویتی</a></button>
        <button className={`btn font-light flex justify-start border-0 ${activeButton === "6" ? "bg-[#1C4B82] text-white": "bg-white text-[#1C4B82]"} hover:text-[white]`} value={6} onClick={()=>setActiveButton("6")}><a href="#"><img src={activeButton === "6" ? headsetActive :headset} alt="" /> پشتیبانی</a></button>
        <Link to='/'>
        <button className={`btn font-light flex justify-start border-0 ${activeButton === "7" ? "bg-[#1C4B82] text-[#E91919]": "bg-white text-[#E91919]"} hover:text-[white]`} value={7} onClick={()=>setActiveButton("7")}><a href="#"><img src={exit} alt="" /> خروج</a></button>
        </Link>
    </div>
</div>
    </>
  )
}
