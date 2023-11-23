"use client";
import { asyncdeletejobstudent,
asyncdeleteedustudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);
    
  const DeleteHandler = (id)=>{
    dispatch(asyncdeletejobstudent(id));
    dispatch(asyncdeleteedustudent(id));
  }
  return (
    <div className="container mx-auto px-4">
      <h3 className="flex justify-center text-4xl font-mono">
        <strong>{student && student.firstname}&apos;s</strong> &nbsp; Resume Section
      </h3>
<div className="educaton">
<h4  className="text-2xl text-blue-800 font-mono font-bold">
       Add Education <Link type="button" className=" font-xl font-mono text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2" href="/student/auth/resume/education">+</Link> 
      </h4>
      <div className="flex border ">
        {student &&
          student.resume.education.map((e) => (
            <ul  className="border list-disc px-8 py-3" key={e.id} 
            >
              <li className="w-full px-4 py-1"> <strong className="text-gray-900">Education :</strong> {e.education}</li>
              <li className="w-full px-4 py-1"> <strong className="text-gray-900">Status : </strong> {e.status}</li>
              <li  className="w-full px-4 py-1"><strong className="text-gray-900">Board : </strong> {e.board}</li>
              <li  className="w-full px-4 py-1"><strong className="text-gray-900">Year : </strong> {e.year}</li>
              <li  className="w-full px-4 py-1"><strong className="text-gray-900">Performance : </strong> {e.performance}</li>
              <li  className="w-full px-4 py-1 mb-4"><strong className="text-gray-900">School : </strong> {e.school} </li>
              <Link  
                type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 mr-2.5 ml-2.5" 
                href={`/student/auth/resume/education/${e.id}`}
              >
                Edit
              </Link>
              <button onClick={()=>DeleteHandler(e.id)}
              type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 ml-2">
                Delete
              </button>
            </ul>
          ))}
      </div>
</div>

{/* jobsss section */}

<div className="job">
<h4  className="text-2xl text-blue-800 font-mono font-bold m-3">
       Add Job <Link type="button" className=" font-xl font-mono text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2" href="/student/auth/resume/jobs">+</Link> 
      </h4>
      <div className="flex border ">
        {student &&
          student.resume.jobs.map((j) => (
            <ul  className="border list-disc px-8 py-3" key={j.id} 
            >
              <li className="w-full px-4 py-1"> <strong className="text-gray-900">Designation :</strong> {j.Designation}</li>
              <li className="w-full px-4 py-1"> <strong className="text-gray-900">Organization : </strong> {j.Organization}</li>
              <li  className="w-full px-4 py-1 mb-4"><strong className="text-gray-900">Location : </strong> {j.Location}</li>
              <Link  
                type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 mr-2.5 ml-2.5" 
                href={`/student/auth/resume/jobs/${j.id}`}
              >
                Edit
              </Link>
              <button onClick={()=>DeleteHandler(j.id)}
              type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 ml-2">
                Delete
              </button>
            </ul>
          ))}
      </div>
</div>

{/* internships section */}
<div className="internship">
<h4  className="text-2xl text-blue-800 font-mono font-bold m-3">
       Add Internship <Link type="button" className=" font-xl font-mono text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2" href="/student/auth/resume/internships">+</Link> 
      </h4>
      <div className="flex border ">
        {student &&
          student.resume.internships.map((i) => (
            <ul  className="border list-disc px-8 py-3" key={i.id} 
            >
              <li className="w-full px-4 py-1"> <strong className="text-gray-900">Designation :</strong> {i.Designation}</li>
              <li className="w-full px-4 py-1"> <strong className="text-gray-900">Organization : </strong> {i.Organization}</li>
              <li  className="w-full px-4 py-1 mb-4"><strong className="text-gray-900">Location : </strong> {i.Location}</li>
              <Link  
                type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 mr-2.5 ml-2.5" 
                href={`/student/auth/resume/internships/${i.id}`}
              >
                Edit
              </Link>
              <button onClick={()=>DeleteHandler(i.id)}
              type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 ml-2">
                Delete
              </button>
            </ul>
          ))}
      </div>
</div>


            <h1>all the left over information</h1>
    </div>
  );
};

export default page;
