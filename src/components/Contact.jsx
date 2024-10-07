import React from 'react';
import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className='border-b '>{CONTACT.email}</a>
      </div>
      
      <div className='mt-8 flex items-center justify-center gap-6 text-3xl'>
        <a href='https://www.linkedin.com/in/nechar-kc-660358299/'  >
          <FaLinkedin className='hover:text-blue-500' />
        </a>
        <a href='https://github.com/SpeedRelativity'  >
          <FaGithub className='hover:text-gray-500' />
        </a>
        <a href='https://www.instagram.com/totallyseriousname' >
          <FaInstagram className='hover:text-pink-500' />
        </a>
        <a href='https://x.com/Nechar_' >
          <FaTwitterSquare className='hover:text-blue-400' />
        </a>
      </div>
    </div>
  )
}

export default Contact;
