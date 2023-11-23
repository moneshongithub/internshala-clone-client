"use client";
import {
  asynccurrentemploye,
  asyncsignoutemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./layout.module.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    dispatch(asynccurrentemploye());
    if (isAuthenticated) router.push("/employe/auth");
    if (!isAuthenticated) router.push("/employe");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutemploye());
  };
  return (
    <>
      <div>
      <nav className={styles.nav}>
      <Link className={styles.home}  href={isAuthenticated ?"/employe/auth":"/" }>Home</Link> <br/>
        {isAuthenticated ? (
          <nav className={styles.nav}>
          <Link  className={styles.link}  href="/employe/auth/profile">
              Profile
            </Link><br/>
            {/* <Link  className={styles.link}  href="/employe/auth/resume">
              Resume
            </Link><br/> */}
            <Link  className={styles.link}  href="/employe/auth/applied">
              my application
            </Link><br/>
            <Link  className={styles.link}  onClick={SignoutHandler} href="">
              Signout
            </Link>
          </nav>
        ) : (
          <nav className={styles.nav}>
            <Link className={styles.link} href="/employe">Signup</Link><br/>
            <Link className={styles.link} href="/employe/signin">Signin</Link>
          </nav>
        )}
      </nav></div>
      {children}
    </>
  );
};

export default employeLayout;
