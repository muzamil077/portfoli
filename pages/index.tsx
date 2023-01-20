import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hireme from "./Hireme";
import Topbar from "../src/components/Topbar";
import Hero from "./Hero";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import Services from "./Sevicese";
import Contact from "./contect";
import Projects from "./projects";
import Testimonials from "./testimonials";
import Preloader from "../src/components/preloader";

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(true);
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1800,
  //     offset: 100,
  //     disable: "mobile",
  //   });
  // }, []);
  return (
    <>
      {contentLoaded ? null : <Preloader />}
      <Topbar />
      <Hero />
      <Skills name={"msdfhjk"} para={"sd,gfjkh"} logo={",dfj"} />
      <Services />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">MUZAMIL HUSSAIN</h6>
        <p>MUZAMIL HUSSAIN © All CopyRights Reserved 2022</p>
      </footer>
    </>
  );
}
