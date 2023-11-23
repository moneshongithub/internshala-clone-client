
"use client";
import {
  asyncavataremploye, asyncresetemployepassword, asyncupdateemploye,
} from "@/store/Actions/employeActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css"

const page = () => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();

  const { employe } = useSelector((state) => state.employeReducer);

  const employeUpdateHandler = () => {
    const newemploye = { firstname, lastname };
    dispatch(asyncupdateemploye(newemploye));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncavataremploye(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = { password };
    dispatch(asyncresetemployepassword(pwd));
  };
  return (
    <div className={styles.main}>
    <div className={styles.profile}>
    <div className={styles.proimg}>
    <img src={employe && employe.organizationlogo.url} alt=''/>
    </div>
     <br />
     <form onSubmit={AvatarHandler} encType="multipart/form-data">
       <input type="file" name="avatar" />
       <button className={styles.button}>submit</button>
     </form>
    </div>

     <div>
     <form className={styles.form}>
       <input  className={styles.input}
         name="firstname"
         type="text"
         placeholder="firstname"
         onChange={(e) => setfirstname(e.target.value)}
       ></input>
       <input className={styles.input}
         name="lastname"
         type="text"
         placeholder="lastname"
         onChange={(e) => setlastname(e.target.value)}
       ></input>
       <button className={styles.button} onClick={employeUpdateHandler}>
         Update employe
       </button>
     </form>
     </div>

     <div>
     <form>
       <input  className={styles.input}
         name="password"
         type="password"
         placeholder="password"
         onChange={(e) => setpassword(e.target.value)}
       ></input>
       <button className={styles.button}  onClick={ResetPasswordHandler}>
         Update employe Password
       </button>
     </form>
     </div>
   </div>
  );
};

export default page;
