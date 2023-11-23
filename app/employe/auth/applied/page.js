// "use client"
// import React from "react";
// import { useSelector } from "react-redux";

// const page = () => {
//   const { employe } = useSelector((state) => state.employeReducer);
//   return (
//     <div className="container mt-5">
//       <h1>
//         {" "}
//         posted jobs and internships by{" "}
//         <strong>{employe && employe.firstname}</strong>
//       </h1>
//       <ul className="list-group">
//         {employe &&
//           employe.jobs.map((j) => (
//             <div className="list-group-item mb-3" key={j._id}>
//               {JSON.stringify(j)} <br />
//             </div>
//           ))}
//         {employe &&
//           employe.internships.map((i) => (
//             <div className="list-group-item mb-3" key={i._id}>
//               {JSON.stringify(i)} <br />
//             </div>
//           ))}
//       </ul>
//       <hr />
//     </div>
//   );
// };

// export default page;






"use client";
import React from "react";
import { useSelector } from "react-redux";
// import styles from "./page.module.css"
import "./index.css";

const page = () => {
  const { employe } = useSelector((state) => state.employeReducer);
  return (
    <div className="">
      <h1 >
        Posted Jobs of&nbsp;<strong>{employe && employe.firstname}</strong>
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
          {employe &&
            employe.jobs.map((j) => (
              <tr key={j._id}>
                <td>{j.profile}</td>
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
      Posted Internships of&nbsp;<strong>{employe && employe.firstname}</strong>
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
          {employe &&
            employe.internships.map((i) => (
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
