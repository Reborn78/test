import { motion } from 'framer-motion';

import {styles } from '../styles'
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    
    <section className="relative flex flex-col justify-between items-center w-full h-screen ">
    <div className="w-full h-[10vh] bg-black fixed top-0 z-10"></div> {/* Top black bar */}
    <div className="flex flex-col justify-center items-center flex-1 max-w-7xl mx-auto px-4">
     <div className='mb-20'>
      <h1 className={`${styles.heroHeadText} text-white text-center mt-20 `}>
        YELLO STUDIO
        {/* YELLO STUDIO <span className='text-[#915EFF]'>DESIGN</span> */}
      </h1>
      <h1 className={`${styles.heroSubText} text-white text-center text-opacity-70`}>
        ADVERTISING | GRAPHIC DESIGN | WEB DEVELOPMENT
      </h1>
      </div>
      <span className='hash-span'>
          &nbsp;
          
        </span>
      <div className="flex justify-center mt-20 ">
        <Link to="/projects" className="hover:underline mx-2 md:px-10 px-2 text-[20px]">PROJECTS</Link> 
    
        <Link to="/about" className="hover:underline mx-2 md:px-10 px-2 text-[20px]" >ABOUT</Link> 
        <Link to="/contact" className="hover:underline mx-2 md:px-10 px-2 text-[20px]">CONTACT</Link>
      </div>
  
    </div>
    <div className="w-full h-[10vh] bg-black fixed bottom-0 z-10"></div> {/* Bottom black bar */}
  </section>
  );
}

export default Hero