import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion"
import { styles } from "../styles";
import { projects } from "../constants";
import { ProjectSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, title, icon, description }) => (
  <Tilt className='w-full' options={{ max: 15, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[5px] shadow-card group' // Added group
    >
      <div
  
        className='relative bg-tertiary rounded-[5px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-full'
        />

        {/* Bottom overlay div that appears on hover */}
        <div className="absolute bottom-0 w-full h-[auto] bg-slate-900 flex flex-col  justify-start  px-4 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
        <h3 className='text-white text-[20px] pt-2'>
          {title}
        </h3>
        <p className="text-white text-opacity-70 text-sm pb-1">
          {description}
        </p>
      </div>

      </div>
    </motion.div>
  </Tilt>
);

const ProjectContainer = () => {
  return (
    <>
    
    <motion.div 
  variants={textVariant()} 
  className="relative flex items-center justify-center min-h-[500px]"
>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <p className={styles.opecHeadText}>PROJECTS | ART | COLLABORATIONS
    </p>
    <h2 className={`${styles.opecSubText} absolute`}>WORK</h2>
  </div>
  
</motion.div>

<motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 h-auto'
      >
          <div className="text-center ">
        <h1 className={`${styles.opecInfoText}`}>[ MORE INFO COMING SOON ]</h1>
      </div>
      

  </motion.div>
<div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
  {projects.map((project, index) => (
    <ProjectCard key={project.title} index={index} {...project} />
  ))}
</div>
    </>
  );
};

export default ProjectSectionWrapper(ProjectContainer, "projectcontainer");