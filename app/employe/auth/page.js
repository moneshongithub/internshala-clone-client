"use client";
import {
  asyncapplyineternshipemploye,
  asyncapplyjobemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// export const metadata = {
//     title: 'Homepage',
//   }

const page = () => {
  const { employe } = useSelector(
    (state) => state.employeReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [employe]);
  return (
    
   <div>
   <h1 className="flex justify-center mt-10 text-3xl font-mono">
        {" "}
        Hi,&nbsp; <strong>{employe && employe.firstname}! ✋</strong>
      </h1>
     <div className=" flex items-center justify-center h-96">

    

<Link className='w-full-2 justify-center p-3 mr-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white' href="auth/create/job"> Create Job</Link><br/>
<Link className='w-full-2 justify-center p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white' href="auth/create/internship"> Create Internship</Link>

</div>
   </div>
  );
};
export default page;
