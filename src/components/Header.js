import React from 'react';
import Logo from '../assets/1(1).png'



const Header = () => {
  return <header className=''>
    <div className='container mx-auto'>
      <div className='flex  justify-between items-center'>
        {}
        <a href=''>
          <img className='sm w-40 ' src={Logo} alt='' />
        </a>
        
          
      </div>
    </div>
  </header>;
};

export default Header;
