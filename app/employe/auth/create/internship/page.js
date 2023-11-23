// "use client"
// import { asynccreateinternshipemploye } from '@/store/Actions/employeActions'
// import React from 'react'
// import { useDispatch } from 'react-redux'

// const page = () => {
//     const dispatch = useDispatch()
//     const createinternshipHandler = () =>{
//         const internship = {
//             profile: "reactjs",
//             skill: "next js",
//             internshiptype: "Remote",
//             openings: 5,
//             from: "jan",
//             to: "march",
//             duration: "3 months",
//             responsibility: "build some impressive web pages",
//             stipend:{
//                 status:"Unpaid",
//                 amount:1,       
//             },                  
//             perks: "stocks 10%",
//             assesments: "where do ypu see yourself in 5 year", 
         
//         }
//          dispatch(asynccreateinternshipemploye(internship))

//     }
//   return (
//     <div className='container mt-5'>
//         <button onClick={createinternshipHandler} className='btn btn-primary'>Create internship</button>
//     </div>
//   )
// }

// export default page





"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [profile, setprofile] = useState();
  const [skill, setskill] = useState();
  const [internshiptype, setinternshiptype] = useState();
  const [openings, setopenings] = useState();
  const [from, setfrom] = useState();
  const [to, setto] = useState();
  const [duration, setduration] = useState();
  const [responsibility, setresponsibility] = useState();
  const [stipend, setstipend] = useState();
  const [perks, setperks] = useState();
  const [assesments, setassesments] = useState();

  const createinternshipHandler = () => {
    const internship = {profile, skill, internshiptype, openings, from, to, duration,responsibility, stipend, perks, assesments};
    dispatch(asynccreateinternshipemploye(internship));
  };
  return (
    <form className='h-screen flex items-center justify-center'>
    <h1 className='p-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>ADD internship</h1>
      <div  className='grid gap-5 md:grid-cols-2 bg-gray-100 p-20'>
      <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="profile"
          type="text"
          placeholder="profile"
          onChange={(e) => setprofile(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="skill"
          type="text"
          placeholder="skill"
          onChange={(e) => setskill(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="internshiptype"
          type="text"
          placeholder="internshiptype"
          onChange={(e) => setinternshiptype(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="openings"
          type="text"
          placeholder="openings"
          onChange={(e) => setopenings(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="from"
          type="text"
          placeholder="from"
          onChange={(e) => setfrom(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="to"
          type="text"
          placeholder="to"
          onChange={(e) => setto(e.target.value)}
        ></input>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="duration"
          type="text"
          placeholder="duration"
          onChange={(e) => setduration(e.target.value)}
        ></input>  
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="responsibility"
          type="text"
          placeholder="responsibility"
          onChange={(e) => setresponsibility(e.target.value)}
        ></input> 
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="stipend"
          type="text"
          placeholder="stipend"
          onChange={(e) => setstipend(e.target.value)}
        ></input>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="perks"
          type="text"
          placeholder="perks"
          onChange={(e) => setperks(e.target.value)}
        ></input>
        <input className='col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="assesments"
          type="text"
          placeholder="assesments"
          onChange={(e) => setassesments(e.target.value)}
        ></input>
      <button onClick={createinternshipHandler}  className='w-full col-span-2 justify-center p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
        Create Internship
      </button>
    </div>
    </form>
  );
};

export default page;
