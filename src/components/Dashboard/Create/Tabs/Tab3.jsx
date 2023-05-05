import React ,{useState} from 'react'
import { MapContainer, TileLayer, Marker , Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Tab3Map } from './Tab3Map';
import { TabBtns } from './TabBtns';



export const Tab3 = ({nextTab,prevTab}) => {
  const [position ,setPosition] = useState({ lat : 36.5659, lng: 53.05})
  const changeMarker=(e)=>{
    setPosition({...position , lat : e.lat , lng : e.lng})
  }
  const [state, setState] = useState(false);
  const showMap=()=>{
    setState(!state);
  }
  console.log(position);
  
  return (
        <>
    <form onSubmit={nextTab}  className='w-full p-4 bg-white rounded-box sm:text-md text-sm'>
    <div className='grid-cols-2  flex-col sm:flex-row flex justify-around gap-4 items-center my-6'>
          <div className="form-control w-full relative">
                <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">طول جغرافیایی</label>
                <input type="text" className="input input-bordered w-full" value={position.lat} />
              </div>
              <div className="form-control w-full relative">
                <label className="label absolute right-[20px] top-[-10px] py-0 bg-white px-2">عرض جغرافیایی</label>
                <input type="text" className="input input-bordered w-full" value={position.lng}/>
              </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
          <input type="checkbox" className="checkbox checkbox-sm" value={false} onChange={()=>showMap()}/>
          <p>انتخاب مختصات از روی نقشه</p>
          </div>
          {
            state === false && ""
          }
          {
            state === true && 
            <div className='checkboxMap flex justify-center mx-2 my-5'>
            <MapContainer center={[position.lat , position.lng]} zoom={11} scrollWheelZoom={true} className='min-h-[40vh] max-w-full h-[250px] w-full'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           <Tab3Map  changeMarker={changeMarker} />
             </MapContainer>
            </div>
          }
        <TabBtns prevTab={prevTab} />
          

    </form>
        </>
  )
}
