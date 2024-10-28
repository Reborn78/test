import React from 'react'
import { Aboutme, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas, Clients } from "../components";

import {motion} from "framer-motion";
import { styles } from "../styles";


const About = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
    <div className="relative flex flex-col justify-between min-h-screen  ">
        
    <div className="relative z-1" >
      <Navbar />
      <Aboutme />
  
      
      <Experience />
      <Tech />
      
    </div>
    
  </div>
  <div className='fixed inset-0 black-gradient -z-10'>
  <StarsCanvas />
  </div>
  </section>


)};

export default About