"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { asyncsignupemploye } from "@/store/Actions/employeActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "./page.module.css";

const page = () => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [contact, setcontact] = useState();
  // const [city, setcity] = useState();
  // const [gender, setgender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  const SignupHandler = (e) => {
    // e.preventDefault(); 
    const newemploye = { 
      firstname,
      lastname,
      contact,
      // city,
      // gender,
      email,
      password,
    };
    dispatch(asyncsignupemploye(newemploye));
  };

  useEffect(() => {
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

    // useEffect(() => {
    //   SignupHandler();
    // }, [SignupHandler])
    

  return (
    <div className="container mt-5">
      <h1 className={styles.h1}>Sign-up and apply for free</h1>
      <form className={styles.form}>
        <div>
          <h1 className={styles.label}>Sign Up</h1>
          <div className={styles.in}>
            <div>
              <input
                className={styles.input}
                name="firstname"
                type="text"
                placeholder="firstname"
                onChange={(e) => setfirstname(e.target.value)}
              ></input>
              <input
                className={styles.input}
                name="lastname"
                type="text"
                placeholder="lastname"
                onChange={(e) => setlastname(e.target.value)}
              ></input>
              <input
                className={styles.input}
                name="contact"
                type="text"
                placeholder="contact"
                onChange={(e) => setcontact(e.target.value)}
              ></input>
            </div>
            <div>
              {/* <input
                className={styles.input}
                name="organizationname"
                type="text"
                placeholder="organization name"
                onChange={(e) => setorganizationname(e.target.value)}
              ></input> */}
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            className={styles.button}
            onClick={SignupHandler}
            type="submit"
          >
            Signup
          </button>{" "}
          <h3 className={styles.or}>OR</h3>
          <Link href="/employe/signin">
           <span className={styles.span}> Signin</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
