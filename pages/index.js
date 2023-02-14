import Head from 'next/head'
import Image from 'next/image'
import Hero from './../components/Hero';
import Nav from './../components/Nav';
import Services from './../components/Services';
import { useState } from 'react';
import FormModal from './../components/FormModal';





export default function Home() {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='bg-black  overflow-hidden relative ' >
      <FormModal closeModal={closeModal}  isOpen={isOpen} />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Web 3 developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CG.png" />
      </Head>
      <main >
        <Nav openModal={openModal} />
        <Hero openModal={openModal}  />
        <Services openModal={openModal} />
      </main>
    </div>
  )
}
