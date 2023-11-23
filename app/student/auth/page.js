"use client";
import {
  asyncapplyineternshipstudent,
  asyncapplyjobstudent,
} from "@/store/Actions/studentActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import Image from "next/image";


// export const metadata = {
//     title: 'Homepage',
//   }

const page = () => {
  const { jobs, internships, student } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobstudent(id));
  };
  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyineternshipstudent(id));
  };

  useEffect(() => {}, [student]);
  return (
    <div >
      <div className={styles.name}>
      <h1>
        {" "}
        Hi, <strong>{student && student.firstname}! ✋</strong>
      </h1>
      <h3>Let’s help you land your dream career</h3>
      </div>
<div className={styles.container}>
<h1 className={styles.h1}>
        {" "}
        Available Jobs For &nbsp; <strong>{student && student.firstname}</strong>
      </h1>

              <div className={styles.cards}>
      {jobs &&
            jobs.map((j) => (
              <ul className={styles.card}  key={j._id}>
              
               
                <div className={styles.trend}>
                  <Image height={50} width={50} src="/images/trend.png" ></Image>
                  <strong>Actively Hiring</strong>
                </div>
                <br />
                <li >
                  <strong>Title : </strong>
                  {j.title}
                </li>
                <li>
                  <strong>Skills : </strong>
                  {j.skill}
                </li>
                <li>
                  <strong>Job Type : </strong>
                  {j.jobtype}
                </li>
                <li>
                  <strong>Description : </strong>
                  {j.description}
                </li>
                <li>
                  <strong>Preferences : </strong>
                  {j.preferences}
                </li>
                <li>
                  <strong>Salary : </strong>
                  {j.salary}
                </li>
                <li>
                  <strong>Assesments : </strong>
                  {j.assesments}
                </li>
                {!j.students.includes(student && student._id) ? (
                  <button className={styles.button} onClick={() => ApplyJobHandler(j._id)}>
                    Apply job{" "}
                  </button>
                ) : (
                  <button className={styles.button}>Already Applied</button>

                )}
                
               </ul>
               
            ))}
              </div>
</div>


      <br/>        
      <hr />

<div className={styles.container}>

<h1 className={styles.h1}>
        {" "}
        Available Internships For &nbsp;
        <strong>{student && student.firstname}</strong>
      </h1>
      <div className={styles.cards}>
        {internships &&
          internships.map((i) => (
            <ul className={styles.card} key={i._id}>
            <div className={styles.trend}>
                  <Image height={50} width={50} src="/images/trend.png" ></Image>
                  <strong>Actively Hiring</strong>
                </div>
              <br />
              <li>
                <strong>Title : </strong>
                {i.profile}
              </li>
              <li>
                <strong>Skills : </strong>
                {i.skill}
              </li>
              <li>
                <strong>Job Type : </strong>
                {i.internshiptype}
              </li>
              <li>
                <strong>Openings : </strong>
                {i.openings}
              </li> 
              <li>
                <strong>From : </strong>
                {i.from}
              </li>
              <li>
                <strong>To : </strong>
                {i.to}
              </li>
              <li>
                <strong>Duration : </strong>
                {i.duration}
              </li>
              <li>
                <strong>Responsibility : </strong>
                {i.responsibility}
              </li>
              <li>
                <strong>Stipend : </strong>
                {i.stipend.status}
              </li>
              <li>
                <strong>Perks : </strong>
                {i.perks}
              </li>
              <li>
                <strong>Assesments : </strong>
                {i.assesments}
              </li>
              {!i.students.includes(student && student._id) ? (
                <button  className={styles.button} onClick={() => ApplyInternshipHandler(i._id)}>
                  Apply internships{" "}
                </button>
              ) : (
                <button  className={styles.button} >Already Applied</button>
              )}
            </ul>
          ))}
      </div>
</div>

    </div>
  );
};
export default page;
