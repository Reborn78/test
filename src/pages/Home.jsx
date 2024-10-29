import React from 'react'
import {   Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, StarsGlowCanvas } from "../components";

const Home = () => {
    return (
      <div className="relative flex flex-col justify-between min-h-screen black-gradient z-0">
        
        <div className="relative z-1 " >
          <Hero />
          
          <StarsGlowCanvas />
          
        </div>
        
      </div>
    );
  }
  

export default Home