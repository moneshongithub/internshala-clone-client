"use client"
import { asyncotpemployepassword } from '@/store/Actions/employeActions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  const [otp, setotp] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
    const router = useRouter()
    const dispatch = useDispatch();
   const {errors} = useSelector((state)=> state.employeReducer);
    const sentotpHandler = async()=>{
        const newpwd = {
            otp,
            password, 
            email
        };
       await dispatch(asyncotpemployepassword(newpwd))
        if(errors.length === 0 || 1){
            router.push("/employe/signin")
           }else{
            toast.error(JSON.stringify(errors))
            return;
           }
    };                                                              
  return (
    <div className='h-[90vh] overflow-hidden flex items-center justify-center'>
     <h1 className='p-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Enter otp <br/> Email <br/> Password</h1>
     <div className='grid gap-5 md:grid-cols-2 bg-gray-100 p-20'>
     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mr-5'
          name="otp"
          type="text"
          placeholder="otp"
          onChange={(e) => setotp(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mr-5'
          name="pass"
          type="text"
          placeholder="New Password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
         <input className='col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mr-5'
          name="email"
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <button className=' col-span-2 justify-center p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white' onClick={sentotpHandler}>change password</button>
     </div>
    </div>
  )
}

export default page