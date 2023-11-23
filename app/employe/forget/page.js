"use client";
import { asyncforgetemployepassword } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const page = () => {
    const [email, setemail] = useState();
    const router = useRouter()
    const dispatch = useDispatch();
   const {errors} = useSelector((state)=> state.employeReducer);

  const sendemailHandler = async() => {
    const mail = {
      email,
    };
   await dispatch(asyncforgetemployepassword(mail));
   if(errors.length === 0 || 1){
    router.push("/employe/forget/otp")
   }else{
    toast.error(JSON.stringify(errors));
    return;
   }
  };
  return (
    
<div className=" h-96 flex items-center justify-center">
<input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mr-5'
          name="email"
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        ></input>
      <button onClick={sendemailHandler}  className=' col-span-2 justify-center p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
        Send Mail
      </button>
    </div>
    
  );
};

export default page;
