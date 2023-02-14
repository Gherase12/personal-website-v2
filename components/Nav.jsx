import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image  from 'next/image';

function Nav() {
  const [open, setOpen] = useState(false);

  const navItems = ["Products", "Services", "Working-process"];

  return (
    <nav className='z-50 bg-black fixed top-0 left-0 right-0 w-full h-14 lg:h-24 border-b-2 border-blue-forta shadow-lg shadow-blue-forta  px-6 flex justify-between items-center '>
    <Image src="/GC.png"  className="lg:hidden" width={50} height={100} />
    <Image src="/GC.png" className="hidden lg:flex" width={100} height={100} />
      <GiHamburgerMenu
        onClick={() => setOpen(true)}
        className='text-blue-forta text-2xl lg:hidden '
      />
       <div className=" hidden lg:flex items-center space-x-10 text-2xl font-bold">
          {navItems.map((i) => (
            <div key={i} href="/" className=" text-blue-forta cursor-pointer " >{i}</div>
          ))}

          <button className='rounded-full text-black bg-blue-forta mx-auto w-24 h-10 font-bold text-xs shadow-md shadow-blue-forta animate-pulse '>
            GET IN TOUCH
          </button>
        </div>

      {/* mobile nav open */}
      <div
        className={`${
          !open
            ? "fixed right-[100%]"
            : " text-gray-4 fixed top-0 pt-[100px]    left-0 h-screen  w-[100%] px-[29px] nav-container  overflow-y-scroll  flex  flex-col    bg-black    duration-500 ease-in-out z-[100] xl:hidden"
        }  `}
      >
        <AiOutlineClose
          onClick={() => setOpen(false)}
          className=' absolute top-[20px] right-[20px] text-blue-forta text-2xl '
        />

       
      </div>
    </nav>
  );
}

export default Nav;
