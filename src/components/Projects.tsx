'use client'

import React, { useRef } from 'react';
import Card from '@/components/card';
import { projects } from '@/lib/projects';
import { Playfair_Display, Roboto } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

const Projects: React.FC<{ id?: string }> = ({ id }) => {
  const parentDiv = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={parentDiv} 
      className={`text-3xl font-bold text-slate-300 ${playfair.className} px-4 sm:px-6 lg:px-8`} 
      id={id}
      aria-labelledby="projects-heading"
    >   
      <div className='sticky top-24 overflow-hidden'>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-8">
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-slate-300">Projects</h2>
          <div className="border-gray-700 border-t-[1px] w-full sm:w-72 mt-2 sm:mt-5"></div>
        </div>
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {projects.map((data) => (
            <motion.div
              key={data.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card props={data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;