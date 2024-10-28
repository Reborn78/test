import React from 'react'
import { Aboutme, ProjectContainer, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Clients } from "../components";


const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectContainer />
      <Clients />
       <div className='fixed inset-0 black-gradient -z-10'>
  <StarsCanvas />
  </div>
    </div>
  )
}

export default Projects