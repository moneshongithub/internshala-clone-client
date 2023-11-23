"use client";
import {
  asynccurrentstudent,
  asyncsignoutstudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./layout.module.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    dispatch(asynccurrentstudent());
    if (isAuthenticated) router.push("/student/auth");
    if (!isAuthenticated) router.push("/student");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutstudent());
  };
  return (
    <>
      <div>
      <nav className={styles.nav}>
      <Link className={styles.home}  href={isAuthenticated ?"/student/auth":"/" }>Home</Link> <br/>
        {isAuthenticated ? (
          <nav className={styles.nav}>
          <Link  className={styles.link}  href="/student/auth/profile">
              Profile
            </Link><br/>
            <Link  className={styles.link}  href="/student/auth/resume">
              Resume
            </Link><br/>
            <Link  className={styles.link}  href="/student/auth/applied">
              my application
            </Link><br/>
            <Link  className={styles.link}  onClick={SignoutHandler} href="">
              Signout
            </Link>
          </nav>
        ) : (
          <nav className={styles.nav}>
            <Link className={styles.link} href="/student">Signup</Link><br/>
            <Link className={styles.link} href="/student/signin">Signin</Link>
          </nav>
        )}
      </nav></div>
      {children}
    </>
  );
};

export default StudentLayout;
