"use client"
import { asynceditedustudent } from '@/store/Actions/studentActions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const page = ({params}) => {
    const dispatch = useDispatch();
    const [education, seteducation] = useState();
    const [status, setstatus] = useState();
    const [board, setboard] = useState();
    const [year, setyear] = useState();
    const [performance, setperformance] = useState();
    const [school, setschool] = useState();

    const EditEduHandler = ()=>{
        const edu = {education, status, board, year, performance, school};

        dispatch(asynceditedustudent(params.id, edu))
    }
  return (
  <form className='h-screen flex items-center justify-center '>
    <h1 className='p-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>EDIT EDUCATION</h1>
      
     <div className='grid gap-5 md:grid-cols-2 bg-gray-100 p-20'>
     <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="education"
          type="text"
          placeholder="education"
          onChange={(e) => seteducation(e.target.value)}
        ></input >
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
          name="status"
          type="text"
          placeholder="status"
          onChange={(e) => setstatus(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
          name="board"
          type="text"
          placeholder="board"
          onChange={(e) => setboard(e.target.value)}
        ></input>
     
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
          name="year"
          type="text"
          placeholder="year"
          onChange={(e) => setyear(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
          name="performance"
          type="text"
          placeholder="performance"
          onChange={(e) => setperformance(e.target.value)}
        ></input>
         <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          name="school"
          type="text"
          placeholder="school"
          onChange={(e) => setschool(e.target.value)}
        ></input>
    <button onClick={EditEduHandler} className='w-full col-span-2 justify-center p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'>Edit Education </button>
        </div>
  </form>
  
  )
}

export default page