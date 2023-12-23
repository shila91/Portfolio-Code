import React, { useRef } from 'react';
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants';
import emailjs  from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_q7fos5i','template_g4a7cih',form.current,'N9jkHIgq2wf8FvjJI')
    .then(
      (result) => {
      console.log(result);
      form.current.reset()
      Swal.fire({
        title: "Mensaje Recibido!",
        text: "See you soon!",
        icon: "success"
      });
    },
    (error) => {
      console.log(error);
    }
  );
  };
  return (
    <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right',0.3)} 
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl text-accent font-medium mb-2
            tracking-wide'>
              Get in touch</h4>
            <h2 className='text-[50px] lg:text-[90px] leading-none mb-12'>Let's work
              <br /> together!
            </h2>
          </div>
        </motion.div>
        <motion.form 
        ref={form}
        onSubmit={sendEmail}
        variants={fadeIn('left',0.3)} 
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 
        pb-24 p-6 items-start'>
          <input 
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all
            resize-none mb-12'
            type='text' 
            name='user_name'
            placeholder='Your name'/>
            <input 
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all
            resize-none mb-12'
            type='email' 
            name='user_email'
            placeholder='Your email'/>
            <textarea 
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all
            resize-none mb-12'
            type='text'
            id=''
            name='user_message'
            placeholder='Your message'/>
            <button className='btnsend2'>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
