import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hireme from "./Hireme";
import Topbar from "../src/components/Topbar";
import Hero from "./Hero";
import Skills from "./Skills";
import { useEffect } from "react";
import Services from "./Sevicese";
import Contact from "./contect";

export default function Home() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1800,
  //     offset: 100,
  //     disable: "mobile",
  //   });
  // }, []);
  return (
    <>
      <Topbar />
      {/* <Hero/> */}
      <Skills/>
      <Services/>
      <Hireme />
      <Contact/>
      <footer className="p-3 text-center">
        <h6 className="mb-3">JOHN ALEX</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </>
  );
}
