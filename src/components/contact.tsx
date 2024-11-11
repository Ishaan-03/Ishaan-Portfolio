'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Yogaman from '@/media/yogaman';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_kbvbkyb';
const TEMPLATE_ID = 'template_jy8myph';
const USER_ID = 'yk2QmZNAEOfqZx7hj';

const ContactPage: React.FC<{ id?: string }> = ({ id }) => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then((result) => {
        console.log('Success:', result.text);
        toast.success('Message sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          style: {
            backgroundColor: '#22c55e',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '16px',
          },
        });
        form.reset();  // Reset the form after success
      }, (error) => {
        console.log('Error:', error.text);
        toast.error('Failed to send message. Please try again later.', {
          position: 'top-center',
          autoClose: 3000,
          style: {
            backgroundColor: '#f87171',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '16px',
          },
        });
      });
  };

  return (
    <div className="mt-10 sm:mt-20 flex-col -z-20" id={id}>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 px-4 sm:px-8 mb-8">
        <div className="text-2xl sm:text-3xl font-bold text-slate-300">Contact Me</div>
        <div className="border-gray-700 border-t-[1px] w-full sm:w-72 mt-2 sm:mt-5"></div>
      </div>
      
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 lg:p-16 bg-black text-white">
        <div className="w-full lg:w-1/2 p-4 lg:p-8 mb-8 lg:mb-0">
          <motion.div
            className="relative bg-black p-6 sm:p-8 rounded-lg shadow-lg border-4 border-[#00FFFF] neon-border"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#00FFFF]">
              Get in Touch with Me
            </h1>
            <form
              className="flex flex-col space-y-4"
              onSubmit={sendEmail}
            >
              <motion.input
                type="text"
                name="from_name"
                placeholder="Name"
                className="p-3 rounded-lg border-none outline-none bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)" }}
              />
              <motion.input
                type="email"
                name="email_id"
                placeholder="Email"
                className="p-3 rounded-lg border-none outline-none bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)" }}
              />
              <motion.textarea
                name="message"
                placeholder="Message"
                className="p-3 rounded-lg border-none outline-none bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                rows={4}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)" }}
              />
              <motion.button
                type="submit"
                className="py-3 bg-blue-600 rounded-lg text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-700 text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)" }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex items-center justify-center relative z-10">
          <div className="w-full h-64 sm:h-80 lg:h-[500px] xl:h-[600px]">
            <Yogaman />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactPage;