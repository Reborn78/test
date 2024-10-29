import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' options={{ max: 35, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
       
        className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative flex items-center justify-center min-h-[500px]"
      >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
    <p className={styles.opecHeadText}>INTROUDUCTION
    </p>
    <h2 className={`${styles.opecSubText} absolute`}>ABOUT</h2>
  </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] mx-auto'
      >
 As the CEO and Founder of Yello Studio Design, I bring a unique blend of production and graphic design expertise to the forefront of my work. 
 I am a detail-oriented professional known for my honesty and problem-solving skills, 
 fostering a positive and adaptable environment. My strong interpersonal abilities allow me to build meaningful relationships with clients and team members alike, 
 ensuring seamless collaboration and exceptional service. Proficient in industry-standard software, I leverage my creative vision and organizational skills to deliver impactful solutions that resonate with our clients’ objectives.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center w-full'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");