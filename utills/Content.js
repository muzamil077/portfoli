// import images
import Hero_person from "../src/assets/images/Hero/me.jpeg";
import figma from "../src/assets/images/Skills/figma.png";
import nextjs from "../src/assets/images/Skills/nextjs.png"
import html from "../src/assets/images/Skills/html.png"

import css from "../src/assets/images/Skills/css.png"
import reactjs from "../src/assets/images/Skills/react.png";
import nodejs from "../src/assets/images/Skills/node.png";
import python from "../src/assets/images/Skills/python.png";

import services_logo1 from "../src/assets/images/Services/logo1.png";
import services_logo2 from "../src/assets/images/Services/logo2.png";
import services_logo3 from "../src/assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/img1.png";
import project2 from "../src/assets/images/Projects/img2.png";
import project3 from "../src/assets/images/Projects/img3.png";
import person_project from "../src/assets/images/Projects/person.png";

import avatar1 from "../src/assets/images/Testimonials/avatar1.png";
import avatar2 from "../src/assets/images/Testimonials/avatar2.png";
import avatar3 from "../src/assets/images/Testimonials/avatar3.png";
import avatar4 from "../src/assets/images/Testimonials/avatar4.png";

import Hireme_person from "../src/assets/images/Hireme/person.png";
import Hireme_person2 from "../src/assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
// import { BsInstagram } from "react-icons/bs";
import {FaGithub} from "react-icons/fa"
import { TbSmartHome } from "react-icons/tb";
import {MdAddReaction} from "react-icons/md"
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#testimonials",
      icon: MdAddReaction,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Hi, I'm a freelance website designer",
    firstName: "MUZAMIL",
    LastName: "HUSSAIN",
    link: "#contact",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Front end development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Lorem ipsum text  dummy",
        logo: html
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Nextjs",
        para: "Lorem ipsum text  dummy",
        logo: nextjs,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "meixuhussain.007@gmail.com",
        icon: GrMail,
        link: "mailto:meixuhussain.007@gmail.com",
      },
      {
        text: "+92 3169002574",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "muzamil hussain",
        icon: FaGithub,
        link: "https://github.com/muzamil077",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
