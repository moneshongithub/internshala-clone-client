"use client";
import React from "react";
import { useSelector } from "react-redux";
// import styles from "./page.module.css"
import "./index.css";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);
  return (
    <div className="">
      <h1 >
        Applied Jobs of&nbsp;<strong>{student && student.firstname}</strong>
      </h1>

      <table>
        <thead>
          <tr> 
            <th>PROFILE</th>
            <th>SKILL</th>
            <th>TYPE</th>
          </tr>
        </thead>

        <tbody>
          {student &&
            student.jobs.map((j) => (
              <tr key={j._id}>
                <td>{j.title}</td>
                <td>{j.skill}</td>
                <td>{j.jobtype}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <br />
      <hr />
      <br />

      <h1>
        Applied Internships of&nbsp;<strong>{student && student.firstname}</strong>
      </h1>
      <table>
        <thead>
          <tr>
            <th>PROFILE</th>
            <th>SKILL</th>
            <th>TYPE</th>
          </tr>
        </thead>

        <tbody>
          {student &&
            student.internships.map((i) => (
              <tr key={i._id}>
                <td>{i.profile}</td>
                <td>{i.skill}</td>
                <td>{i.jobtype}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
