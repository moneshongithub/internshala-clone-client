"use client";
import { asynccreatejobemploye } from "@/store/Actions/employeActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState();
  const [skill, setskill] = useState();
  const [jobtype, setjobtype] = useState();
  const [openings, setopenings] = useState();
  const [description, setdescription] = useState();
  const [preferences, setpreferences] = useState();
  const [salary, setsalary] = useState();
  const [perks, setperks] = useState();
  const [assesments, setassesments] = useState();

  const createJobHandler = () => {
    const job = {title, skill, jobtype, openings, description, preferences, salary, perks, assesments};
    dispatch(asynccreatejobemploye(job));
  };
  return (
    <form className='h-screen flex items-center justify-center'>
    <h1 className='p-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>ADD JOB</h1>
      <div  className='grid gap-5 md:grid-cols-2 bg-gray-100 p-20'>
      <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="title"
          type="text"
          placeholder="title"
          onChange={(e) => settitle(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="skill"
          type="text"
          placeholder="skill"
          onChange={(e) => setskill(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="jobtype"
          type="text"
          placeholder="jobtype"
          onChange={(e) => setjobtype(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="openings"
          type="text"
          placeholder="openings"
          onChange={(e) => setopenings(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="description"
          type="text"
          placeholder="description"
          onChange={(e) => setdescription(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="preferences"
          type="text"
          placeholder="preferences"
          onChange={(e) => setpreferences(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="salary"
          type="text"
          placeholder="salary"
          onChange={(e) => setsalary(e.target.value)}
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
      <button onClick={createJobHandler}  className='w-full col-span-2 justify-center p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>
        create job
      </button>
    </div>
    </form>
  );
};

export default page;
