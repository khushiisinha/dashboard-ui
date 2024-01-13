import React from 'react';
import butterfly from "../src/assets/butterfly.png";
import search from "../src/assets/search3.svg";
import home from "../src/assets/home2.svg"
import news from "../src/assets/newspaper.png"
import notification from "../src/assets/bell.png"
import user from "../src/assets/user.png"
import logout from "../src/assets/log-out.png"
function Navbar() {
  return (
    <div className=' fixed bg-white bottom-0 left-0 md:static md:left-auto md:p-4 p-2 flex flex-row md:flex-col justify-evenly md:justify-between md:items-center md:basis-1/7 md:ml-2 z-10'>
    <div className='md:flex md:flex-col md:justify-around md:gap-16 md:items-center'>
    <div className=' md:flex md:flex-col md:gap-5 md:items-center'>
      <img src={butterfly} className='hidden md:block w-7 h-7' alt="Butterfly"/>
      <img src={search} className=' absolute right-0 bottom-3 md:static md:left-auto md:w-5 md:h-5 h-7 w-6' alt="Search"/>
    </div>
    <div className=' flex md:flex-col  justify-around w-[80vw] md:w-auto mr-10 md:mr-auto md:gap-5 md:items-center'>
    <div className='bg-blue-e-700 p-2 md:p-1 rounded-lg'><img src={home} className='w-5 h-5 ' alt="home"/></div>
   <div className='p-2 md:p-1 '> <img src={news} className='w-5 h-5' alt="news"/></div>
   <div className='p-2 md:p-1  '> <img src={news} className='w-5 h-5' alt="news"/></div>
   <div className='p-2 md:p-1  '><img src={user} className='w-5 h-5' alt="user"/></div>
    </div>
    </div>
    <div className=' flex md:flex-col justify-around md:gap-5 md:mb-5 md:items-center'>
      <div className='md:relative fixed top-0 right-0  bg-white'><img src={notification} className='fixed top-4 right-5  md:static md:left-auto w-6 h-6 z-10 ' alt="notification"/>
              <span className='absolute right-5 top-4 md:top-0 md:right-0 w-1 h-1 bg-blue-e-500 rounded-full z-10'></span>
      </div>
    
    <img src={logout} className=' hidden md:block w-4 h-4' alt="logout"/>
    </div>
  </div>
  );
}

export default Navbar;
