import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo, logoNeon } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {
      links.map((link) => (
        <NavLink 
          key={link.name}
          to={link.to}
          className="flex flex-row items-center justify-start text-sm my-8 text-gray-400 font-medium hover:text-[#53ab8b] py-2 px-4 rounded-lg"
          onClick={() => handleClick && handleClick()}
        >
          <link.icon className="w-6 h-6 mr-2"/> 
          <span className="ml-4">{link.name}</span>
        </NavLink>
      ))

    }
  </div>
);


const Sidebar = () => {
  const [ mobileMenuOpen, setmobileMenuOpen ] = useState(false);

  return ( 
    <>
      <div className="md:flex hidden flex-col w-[240] py-10 px-4 bg-[#03170f]" >
        <img src={ logoNeon } alt="logo" className="w-full h-20 object-contain" />
        <NavLinks/>
      </div>

      <div className="absolute md:hidden block top-6 right-6">
        { mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setmobileMenuOpen(false)}/>
        ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setmobileMenuOpen(true)}/> }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#2d7961] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`} >
        <img src={ logo } alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setmobileMenuOpen(false)}/>
      </div>

    </>
  );
}

export default Sidebar;
