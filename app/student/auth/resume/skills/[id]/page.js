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
  <form>
      <div className='container mt-5'>
      <input
          name="education"
          type="text"
          placeholder="education"
          onChange={(e) => seteducation(e.target.value)}
        ></input>
         <input
          name="status"
          type="text"
          placeholder="status"
          onChange={(e) => setstatus(e.target.value)}
        ></input>
         <input
          name="board"
          type="text"
          placeholder="board"
          onChange={(e) => setboard(e.target.value)}
        ></input>
         <input
          name="year"
          type="text"
          placeholder="year"
          onChange={(e) => setyear(e.target.value)}
        ></input>
         <input
          name="performance"
          type="text"
          placeholder="performance"
          onChange={(e) => setperformance(e.target.value)}
        ></input>
         <input
          name="school"
          type="text"
          placeholder="school"
          onChange={(e) => setschool(e.target.value)}
        ></input>

    <button onClick={EditEduHandler} className='btn btn-danger'>Edit Education </button>
    </div>
  </form>
  )
}

export default page