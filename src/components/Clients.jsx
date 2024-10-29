
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { clients } from "../constants";
import {Tilt} from "react-tilt";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon, link }) => (
  <Tilt className='xs:w-[200px] w-full' options={{ max: 35, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full '
    >
      <div
       
        className='rounded-[20px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <a href={link} target="_blank">
    <img
      src={icon}
      alt='web-development'
      className='w-15 h-15 object-contain'
    />
  </a>

      </div>
    </motion.div>
  </Tilt>
);
const Clients = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
  
  

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 h-auto'
      >
          <div className="text-center ">
        <h1 className={`${styles.opecInfoText}`}>[ CLIENTS ]</h1>
      </div>
      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center h-auto'>
        {clients.map((client, index) => (
          <ServiceCard key={client.name} index={index} {...client} />
        ))}
      </div>

      </motion.div>
    </div>
  );
};

export default SectionWrapper(Clients, "clients");
