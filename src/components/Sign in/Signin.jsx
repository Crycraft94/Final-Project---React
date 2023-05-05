import {React, useState , createContext  } from 'react'
import { bgMain,logo } from '../../assets/img/images'
import { Step1, Step2, Step3 } from './Steps/steps';


export const valueContext = createContext();
export const numberContext = createContext();

export const Signin = () => {
    const [number , setNumber] = useState()
    const [step,setStep] = useState(1);
    const next = (e)=>{
        setStep(step+1)}
    const prevPage = (e) =>{
       
        setStep(step-1)
          }
    const [value , setValue] = useState("");
    const valueHandler = (e)=>{
            setValue(e.target.value);
          }
     const numberHandler = (e)=>{
   
      if(e.target.value.length > 11){
       alert("not a correct number")
      }
      else{
        setNumber(e.target.value);
      }
     }     
      let codeContext = {
        value: value,
        code : valueHandler
      };
      let numContext = {
        value : number , 
        getNumber : numberHandler
      }
  return (
    <valueContext.Provider value={codeContext}>
      <numberContext.Provider value={numContext}>
    <>
     <div className='min-h-screen flex justify-center items-center px-4' style={{backgroundImage: `url(${bgMain})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover"}}>
        <div className="main bg-white text-black text-center p-10 rounded-2xl max-w-full sm:w-[50%] lg:w-[35%]">
        <div className=' flex justify-center items-center flex-col'>
        <img src={logo} alt=""  className='mb-0'/>
        <h5 className='font-bold text-[#1C4B82] mb-10 text-lg'>بنیاد مسکن انقلاب اسلامی</h5>
        </div>
        <h1 className='text-3xl font-bold mb-4'>ورود به سامانه بنیاد مسکن</h1>
        {
            step===1 && <Step1 next={next} />
        }
        {
            step === 2 && <Step2  next={next} prev={prevPage} />
        }
        {
            step === 3 && <Step3  next={next} prev={prevPage}/>
        }
        </div>
     </div>
    </>
    </numberContext.Provider>
    </valueContext.Provider>
   
  )
}
