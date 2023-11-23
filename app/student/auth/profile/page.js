"use client";
import {
  asyncavatarstudent,
  asyncresetstudentpassword,
  asyncupdatestudent,
} from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css"

const page = () => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.studentReducer);

  const StudentUpdateHandler = () => {
    const newStudent = { firstname, lastname };
    dispatch(asyncupdatestudent(newStudent));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncavatarstudent(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = { password };
    dispatch(asyncresetstudentpassword(pwd));
  };
  return (
    <div className={styles.main}>
     <div className={styles.profile}>
     <img className={styles.img}   src={student && student.avatar.url} alt="" />
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
        <button className={styles.button} onClick={StudentUpdateHandler}>
          Update Student
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
          Update Student Password
        </button>
      </form>
      </div>
    </div>
  );
};

export default page;
