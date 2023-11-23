"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "./page.module.css";

// export const metadata = {
//   title: 'Homepage',
// }

const page = () => {
  return (
    <div className="">
      <nav className="p-8 px-28 flex justify-between align-middle border-2 border-b-black-500 shadow-xl ">
        <navl>
          <Image
            className="text-center"
            width={200}
            height={200}
            src="/images/Internshala-removebg.png"
          />
        </navl>
        <navr className="flex  justify-between">
          <Link
            href="/student"
            className=" px-5 m-6 p-2 bg-sky-300 rounded-full hover:bg-sky-400 hover:text-slate-200"
          >
            Student
          </Link>
          <br />
          <Link
            href="/employe"
            className=" px-5 m-6 p-2 bg-zinc-400 rounded-full hover:bg-zinc-500 hover:text-slate-200"
          >
            Employe
          </Link>
        </navr>
      </nav>

      <div className=" h-full w-full ">
        <div className=" h-full w-full ">
          <h1 className="flex justify-center items-center text-5xl font-bold opacity-75 mt-10">
            Make your dream career a reality
          </h1>
          <div className={styles.image}>
            <Image
              className={styles.main}
              width={400}
              height={200}
              src="/images/underline_fire1.jpg"
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>

      <div className={styles.homeb}>
        <div className={styles.homeh1}>
          <h1>Trending on Internshala 🔥</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card} >
            <Image  height= {100}
  width= {400} src="/images/pgc_banner-student.png-_2_.jpg"></Image>
          </div>
          <div className={styles.card}><Image  height= {100}
  width= {400} src="/images/year_fh_2203-student.png.jpg"></Image></div>
          <div className={styles.card}><Image  height= {100}
  width= {400} src="/images/dream_internship_with_saregama-student.png.jpg"></Image></div>
        </div>
      </div>
    </div>
  );
};

export default page;
