import  { useState,useEffect } from 'react';
import navbarLinks from '../utils/navbarLinks'
import {NavLink} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from 'react-router-dom';

interface NavlinkDataType {
   name:string;
   href:string;
}

const Navbar = () => {
  const location = useLocation()
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [showSidebar,setShowSidebar] = useState(false) 

  useEffect(() => {
    const toggleNavbarShadow = () => {
      if (window.scrollY >= 90) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };
    window.addEventListener("scroll", toggleNavbarShadow);
  }, []);

  const closeSidebar = () => {
  setShowSidebar(false);
  };

  return (
    <>

      {/* Desktop Mobile */}
      <header className={`font-nunito  bg-black h-[80px] w-full z-10 ease-in-out duration-300  ${navbarShadow ? "shadow-xl" : "shadow-none"} fixed top-0`  } >
        <nav className="flex items-center justify-between h-full container" >
          {/* Logo */}
            <div>
            <img src="/logo.jpeg" className='h-[33px] w-full' width={140} height={50} alt="logo" />

            </div>
            <div>
              <ul className="hidden md:flex gap-5">
                {navbarLinks.map((navLink:NavlinkDataType,index:number)=>(
                  <NavLink to={navLink.href} key={index}>
                    <li className={` text-[17px] capitalize hover:text-lemon font-semibold ${location.pathname === navLink.href ? 'active-link' : ' text-white'} `}>{navLink.name}</li>
                  </NavLink>
                ))}
              </ul>
              <div onClick={() => setShowSidebar(!showSidebar)} className="md:hidden">
                {showSidebar ? "" : <AiOutlineMenu className="text-white cursor-pointer" size={25} />}
              </div>
            </div>
        </nav>

        <div className={showSidebar ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "hidden"} onClick={closeSidebar}></div>
        <nav className={`md:hidden border-right fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-black/90 p-10 transition ease-in-out duration-500 transform ${showSidebar ? '-translate-x-0' : '-translate-x-full'}`}>
          {/* Nav content */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h3 className="text-white font-bold uppercase font-script text-2xl sm:text-3xl">
              <span className="text-green-600">Executive</span> <span className="text-white">Zen</span>
            </h3>
            <div onClick={closeSidebar} className="md:hidden">
              <AiOutlineClose className="text-white cursor-pointer" size={25} />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              {navbarLinks.map((navLink:NavlinkDataType,index:number) => (
                <NavLink  to={navLink.href} key={index} onClick={closeSidebar}>
                  <li className={`px-2 py-2 text-base capitalize hover:text-lemon font-semibold ${location.pathname === navLink.href ? 'active-link bg-lemon text-white rounded-sm' : ' text-green-400'} `} >{navLink.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        </nav>

      </header>

      
      
    </>
  );
};

export default Navbar;
