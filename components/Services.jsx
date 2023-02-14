import React from 'react'
import Image  from 'next/image';
import { motion } from 'framer-motion';

function Services() {
    const services = [
        {
            title:"Smart Contract Development for NFT'S and Tokens",
            text:"Whether you're launching a new NFT collection, creating a custom token for your project, or automating complex business processes, our smart contract development services are tailored to meet your unique needs. I will design and build secure, gas-efficient smart contracts that are optimized for performance and scalability.",
            img:"/contract.webp"
        },
        {
            title:"WEB3 Platforms & DApp's",
            text:"Whether you're looking to launch a new NFT collection, create a custom token, or build a complex decentralized platform,I can help bring your vision to life.I understand that every project is unique, and that's why I work closely with our clients to understand their needs and develop custom solutions tailored to their requirements. From design and planning to development and launch, I am here to support you every step of the way.",
            img:"/dapp.webp"
        },
        {
            title:"Twitter and Discord Bots",
            text:"With my expertise in blockchain technology, I can develop bots that can trigger actions on these platforms based on events in the blockchain.Imagine having a bot that automatically posts updates about new NFT sales, or one that sends notifications about token price changes to your Discord community. With MY services, you can unleash the power of automation and bring your vision to life.",
            img:"/bot.webp"
        },
    ]


  return (
    <section className='w-full lg:px-[200px] ' >
        <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:0.8}}
        className='text-4xl font-black mx-auto text-center my-20 lg:text-6xl lg:my-48 px-5  z-20 text-blue-forta '>
        Blockchain & web3 Solutions
      </motion.h1>

      <div >
        {services.map(({title, text, img},i)=>(
            <div key={i} className={`flex flex-col ${i == 1 ? "lg:flex-row-reverse":"lg:flex-row"} h-[800px] lg:h-[500px] lg:mb-20 `} >
                    <div className='flex-1 flex flex-col   ' >
                        <motion.h3
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{duration:0.8, delay:0.5}}
                        className='text-blue-forta  text-2xl text-center font-bold px-10  lg:px-0 my-10 lg:my-0 lg:text-start lg:text-[51px] lg:leading-[50px]  ' >{title}</motion.h3>
                        <motion.p
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{duration:0.8, delay:0.7}}
                        className='text-gray-forta text-center px-10 my-10 lg:px-0  lg:text-start lg:text-[20px] lg:my-[50px] lg:max-w-[550px] '>{text}</motion.p>
                        <button className='mx-auto lg:mx-0 my-10 lg:my-0 w-[160px] h-[45px] rounded-full bg-blue-forta font-bold flex items-center justify-center shadow-md shadow-blue-forta animate-pulse ' >
                            Get started
                        </button>
                    </div>
                    <div className='flex-1 relative    mx-10 lg:mx-[100px]' >
                        <Image src={img} className="object-contain" fill />
                    </div>
                    
            </div>
        ))}
      </div>

    </section>
  )
}

export default Services