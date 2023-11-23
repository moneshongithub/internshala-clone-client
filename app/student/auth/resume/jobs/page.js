"use client";
import { asyncaddjob } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [Designation, setDesignation] = useState();
  const [Organization, setOrganization] = useState();
  const [Location, setLocation] = useState();

  const AddJobHandler = () => {
    const job = {Designation, Organization, Location};
    dispatch(asyncaddjob(job));
  };
  
  return (
    <form className='h-screen flex items-center justify-center'>
     <h1 className='p-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>ADD JOB</h1>
      <div className='grid gap-5 md:grid-cols-2 bg-gray-100 p-20'>
      <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="Designation"
          type="text"
          placeholder="Designation"
          onChange={(e) => setDesignation(e.target.value)}
        ></input>
         <input  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="Organization"
          type="text"
          placeholder="Organization"
          onChange={(e) => setOrganization(e.target.value)}
        ></input>
         <input  className='col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="Location"
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
      <button onClick={AddJobHandler} className='w-full col-span-2 justify-center p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
        Add Job
      </button>
    </div>
    </form>
  );
};

export default page;
