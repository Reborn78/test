
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { contacts } from "../constants";
import {Tilt} from "react-tilt";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon, link, target }) => (
  <Tilt className='xs:w-[auto] w-[auto]' options={{ max: 35, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full '
    >
      <div
       
        className='rounded-[20px] py-5 px-1 xs:px-3 sm:px-7 md:px-10 min-h-[280px] flex justify-normal sm:justify-evenly items-center flex-col'
      >
        <a href={link} target={target}>
    <img
      src={icon}
      alt='web-development'
      className='xl:w-16 md:w-12 w-10 h-16 object-contain'
    />
  </a>

      </div>
    </motion.div>
  </Tilt>
);
const ContactmeButtons = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
  
  

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[700px] md:h-[550px] h-[250px]'
      >
          <div className="text-center ">
        <h1 className={`${styles.opecInfoText}`}>[ CONTACT ]</h1>
      </div>





      <div className='mt-5 flex flex-wrap gap-10 items-center justify-center'>


        
        {contacts.map((contact, index) => (
          <ServiceCard key={contact.name} index={index} {...contact} />
        ))}
      </div>

      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactmeButtons, "contactmebuttons");
