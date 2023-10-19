import React from 'react';
import Image from '../assets/zyro-image(1).png';
import { FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import { motion} from 'framer-motion';
import { fadeIn} from '../variants'

const Banner = () => {
  return <section className='min-h-[100vh] lg:min-h-[90vh] flex lg:justify-center text-center items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center 
        lg:gap-x-12'>
          {   }
          <div className='flex-1 text-center font-secondary lg:text-left '>
            
            <motion.h1
            variants={fadeIn('up',0.4)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.5}} 
            className='text-[55px] text-pink-300 font-bold leading-[0.8] lg:text'
          >
            SHEILA <span>MOTILLA</span>
            </motion.h1>

            <motion.div 
            variants={fadeIn('up',0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} 
            className='mb-6 text-[36px] lg:text[60px] font-secondary
            font-semibold uppercase leading-[1] '>
              <span className=' mr-4 text-pink-200 '>I am a  </span>
              <TypeAnimation 
                  sequence ={[
                  'developer  ',
                  2000,
                  'front end',
                  2000,
            ]}
            speed={50}
            className='text-accent '
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>

          <motion.p 
          variants={fadeIn('up',0.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} 
          className=' mb-8 max-w-lg mx-auto  lg:mx-0 text-center lg:text-left'>
              Hi!I am Front End developer based in Spain,Barcelona.
              Here you can see some work of my latest year.
          </motion.p>
          <motion.div 
          variants={fadeIn('up',0.6)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} 
          className='flex max-w-mx gap-x-6 items-center
          mb-12 mx-auto lg:mx-0'
          >
            
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn('up',0.7)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max 
          mx-auto lg:mx-0'>
            <a href='https://github.com/'>
            <FaGithub />
              </a>  
              <a href=''>
            <FaDribbble />
              </a>  
          </motion.div>
        </div>
        
          <motion.div 
          variants={fadeIn('down',0.5)} 
          initial='hidden'
          whileInView={'show'}
          className='hidden  mix-blend-lighten lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
            <img className='mifoto w-[430px] bg-pink-200 ' src={Image} alt='' />
          </motion.div>
        </div>
      </div>
</section>;
};

export default Banner;
