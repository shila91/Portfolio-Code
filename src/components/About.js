import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn }  from '../variants'


const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  });
  
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-y-0 h-screen'>

<motion.div 
        variants={fadeIn('right',0.3)} 
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='mifoto flex-1 bg-about  bg-contain bg-no-repeat  h-[300px] 
      bg-top'></motion.div>

        <motion.div 
        variants={fadeIn('left',0.5)} 
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1'> 
        <h2 className='h2 text-accent'>About me</h2>
        <h3 className='h3 mb-4'>
          I´m a Developer Front-end, with one year of experience studying a Bootcamp.</h3>
        <p className='mb-8'>
            I am Front End developer based in Spain,Barcelona..
        </p>

        <div className='flex  gap-x-6 mb-16 '>
          
            <div className='text-[30px]  font-tertiary text-gradient 
            mb-2'>
              {inView ? <CountUp start={0} end={16} duration={10}/> : null} 
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Months of <br/>
              Experience
            </div>
            
            <div className='text-[30px] font-tertiary text-gradient 
            mb-2'>
              {inView ? <CountUp start={0} end={5} duration={6}/> : null} 
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects<br/>
              Completed
              </div>
                </div>
                <div className='flex mb-12 gap-x-8 items-center'>
              
                  <a href='https://github.com/shila91?tab=repositories'
                  className=' text-gradient btn-link'>My portfolio </a>
                  <a href='https://i.ibb.co/3rhsfkr/Screenshot-2023-12-19-at-14-00-11-Finalizar-CV-Live-Career.png' className='text-gradient btn-link'>
                  Curriculum Vitae
                  </a>
                  </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
