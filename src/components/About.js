import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadein }  from '../variants'

const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-y-0 h-screen'>

        <div className='flex-1 bg-about bg-contain bg-no-repeat  h-[650px] 
      mix-blend-lighten '></div>

        <div className='flex-1'> 
        <h2 className='h2 text-accent'>About me</h2>
        <h3 className='h3 mb-4'>
          I´m a Developer Front-end, with one year of experience studying a Bootcamp.</h3>
        <p className='mb-8'>
            I am Front End developer based in Spain,Barcelona..
        </p>

        <div className='flex  gap-x-6 mb-16 '>
          
            <div className='text-[30px]  font-tertiary text-gradient 
            mb-2'>
              {inView ? <CountUp start={0} end={18} duration={10}/> : null} 
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Months of <br/>
              Experience
            </div>
            
            <div className='text-[30px] font-tertiary text-gradient 
            mb-2'>
              {inView ? <CountUp start={0} end={4} duration={6}/> : null} 
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects<br/>
              Completed
              </div>
                </div>
                <div className='flex mb-12 gap-x-8 items-center'>
                  <button className='btn btn-lg'>Contact me</button>
                  <a href='#' className='text-gradient btn-link'>
                  My portofolio
                  </a>
                  </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
