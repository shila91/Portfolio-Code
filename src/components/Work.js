import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img from '../assets/Screenshot 2023-12-15 at 17-05-13 React App.png';
import Img2 from '../assets/Screenshot 2023-12-15 at 20-03-05 React App.png';
import Img3 from '../assets/Screenshot 2023-12-15 at 19-30-20 Vite React.png';
import skill from '../assets/html-5.png'
import skill2 from '../assets/css-3.png'
import skill3 from '../assets/js.png'
import skill4 from '../assets/react.png'
import skill5 from '../assets/sass.png'
import skill6 from '../assets/Tailwind CSS.png'





const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-18'>
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-2 mb-8 lg:mb-0'>
            <div>
              <h2 className='h2 leading-8 text-accent'>
                My latest <br/>
                Work
              </h2> 
              <p className='max-w-md text-xl'>
              Skills learned for the below projects. 
              </p>
              <div class="flex flex-wrap mb-6 gap-10 ">
                <div class="skils skill"> 
                  <img
                  src={skill}
                  alt="html5"/>
                </div>
                <div class="skills skill"> 
                  <img
                  src={skill2}
                  alt="html5"/>
                </div>
                <div class="skills skill w-1/6.5 "> 
                  <img
                  src={skill3}
                  alt="html5"/>
                </div>
                <div class="skills skill "> 
                  <img
                  src={skill4}
                  alt="html5"/>
                </div>
                <div class="skills skill "> 
                  <img
                  src={skill5}
                  alt="html5"/>
                </div>
                <div class="skills skill"> 
                  <img
                  src={skill6}
                  alt="html5"/>
                </div>

  
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              flex justify-center items-center transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img} 
              alt=''
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'>
                <a href='https://calculadora-github-io-zeta.vercel.app/'><span className='text-2xl text-gradient'>Calculator</span></a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>App</span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left',0.2)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
          <div className='group relative overflow-hidden border-2 
            border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              flex justify-center items-center transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img2} 
              alt=''
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'>
                <a href='https://crud-ochre-ten.vercel.app/'> <span className='text-2xl text-gradient  '>CRUD</span></a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>To Do List</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              flex justify-center items-center transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' 
              src={Img3} 
              alt=''
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'>
                <a href='https://shila91-github-io-rbbu.vercel.app/'><span className='text-2xl text-gradient'>Landing Page Clon</span></a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Resposive Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
