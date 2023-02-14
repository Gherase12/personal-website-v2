import { collection, addDoc } from "firebase/firestore"; 
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { db } from './../firebase/firebaseConfig';
function FormModal({isOpen, closeModal}) {

    const filds = [
        {name:"Your full name", field:"name"},
        {name:"LinkedIn, Twitter or any social media link", field:"socials"},
        {name:"Email",field:"email"},
        {name:"Tell me a few words about the project you want", field:"project"}
    ]

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    try {
        console.log(1)
        await addDoc(collection(db, "clients"), data);
        
        reset();
        closeModal()
      } catch (e) {
        console.log(2)
        console.error("Error adding document: ", e);
      }
      
  

};



  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full relative max-w-md transform overflow-hidden rounded-2xl bg-blue-forta p-6 text-left align-middle shadow-xl transition-all">
            <MdOutlineClose  onClick={()=>closeModal()} className="absolute top-[20px]  right-[20px] text-white  md:text-[20px] cursor-pointer " />
              <Dialog.Title
                as="h3"
                className="text-4xl font-bold leading-6 text-white"
              >
                Get in touch
              </Dialog.Title>
              <form onSubmit={handleSubmit(onSubmit)} className='w-auto mt-5'>
                {
                    filds.map(({name, field},i)=>(
                        <div key={i} className='mb-6 lg:w-[300px] '>
                        <label
                          htmlFor='base-input'
                          className='block mb-2 text-sm  text-white font-bold '
                        >
                          {name}
                        </label>
                        <input
                          type="text"
                          id='base-input'
                          {...register(field, {
                            required: true          
                          })}
                          className='bg-gray-50 border border-gray-300 text-blue-600 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                        />
                        {errors[field] && (
                          <div className='text-red-500 font-bold absolute  text-[12px]'>Requiered!</div>
                        )}
                      </div>
                    ))
                }
                <button
                      type='submit'
                      className='bg-white text-blue-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold  '
                    >
                      Submit
                    </button>
            </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default FormModal