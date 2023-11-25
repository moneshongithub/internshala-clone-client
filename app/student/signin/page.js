"use client";
import { asyncsigninstudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css"

const page = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  const SigninHandler = (e) => {
    const student = { email, password };
    dispatch(asyncsigninstudent(student));
  };
  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  // useEffect(() => {
  //   SigninHandler();
  // }, [SigninHandler])
  

  return (
    <form className={styles.form}>
      <div className="">
      <h1 className={styles.label}>Sign In</h1>
        <input className={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input className={styles.input}
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={SigninHandler}
          type="submit"
          className={styles.button}
        >
          Signin
        </button>{" "}
        <br />
        <Link className={styles.forget} href="/student/forget">Forget Password?</Link>
      </div>
    </form>
  );
};

export default page;
