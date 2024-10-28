import React, { useEffect } from 'react';
import { Aboutme, Contactme, ContactmeButtons, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow style when component unmounts
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-between min-h-screen black-gradient z-0">
        
    <div className="relative z-1" >
      <Navbar />
      <Contactme />
      <ContactmeButtons />

      <div className='fixed inset-0 -z-10'>
      <StarsCanvas />
      </div>
    </div>
    
  </div>
  );
}

export default Contact;