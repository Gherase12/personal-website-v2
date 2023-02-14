import React from "react";
import { BiRightArrow } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import Typed from 'react-typed';
import  Image  from 'next/image';
import { motion } from "framer-motion"
function Hero({openModal}) {
  return (
    <section className='h-screen  pt-14  text-blue-forta relative overflow-hidden'>
        <motion.div
         initial={{ opacity: 0  }}
         animate={{ opacity: 1 }} 
         transition={{duration:1, delay:0.5}}
        className="absolute w-[400px] h-[400px] lg:w-[1100px] lg:h-[1100px] lg:-bottom-[250px] lg:-left-[700px]  -left-[250px]  -bottom-[100px] " >

      <Image src={"/avatar-img.webp"}  className=" object-cover"  fill />
        </motion.div>

      {/* <Image src={"/avatar-img.webp"}  className="absolute  -left-[600px] -bottom-[300px] hidden lg:flex "  width={1100}  height={300} /> */}
      <motion.h1 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{duration:0.5}}
    
    className='text-4xl font-black mx-auto text-center mt-20 lg:text-6xl lg:mt-48 px-5  z-20 '>
        <p>Get your   </p>
        
        <Typed
          className="pl-[10px] text-white"
          strings={['web3', 'NFT', "dApp"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

        <p className="z-50">

        project live this week
        </p>
      </motion.h1>

      <h2 className="text-gray-forta lg:hidden text-center my-16 text-sm  max-w-[300px] mx-auto " >
        Empower Your Business with Cutting-Edge Blockchain Solutions and
        transform your business with Innovative Smart Contracts, NFT Launches
        Custom Development, and More.
      </h2>
      <motion.h2
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{duration:0.5}}
      className="text-gray-forta hidden lg:flex w-[500px] mx-auto my-[73px] text-center " >
        Empower Your Business with Cutting-Edge Blockchain Solutions and
        transform your business with Innovative Smart Contracts, NFT Launches
        Custom Development, and More.Stop thinking and take action by unleashing
        the Full Potential of Your Business and Take Your Next Big Step
      </motion.h2>
      <div className="w-full flex justify-center items-center space-x-3 " >
        <BiRightArrow className="text-blue-forta text-2xl " />
      <button onClick={openModal} className="rounded-full text-black bg-blue-forta mx-auto w-28 h-10 font-bold text-sm shadow-md shadow-blue-forta animate-pulse " >
        GET IN TOUCH
      </button>
      <BiRightArrow className="text-blue-forta text-2xl rotate-180" />
      </div>

      <div className="w-full text-blue-forta  absolute bottom-2 flex flex-col items-center" >
          <p>Find more</p>
          <IoIosArrowDown className="animate-bounce" size={30} />
      </div>
    </section>
  );
}

export default Hero;
