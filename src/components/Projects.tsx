import React, { useRef } from 'react';
import Card from '@/components/card';
import { projects } from '@/lib/projects';
import { Playfair_Display, Roboto } from 'next/font/google';

import { motion, useScroll, useTransform } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

const Projects: React.FC<{ id?: string }> = ({ id }) => {
  const parentDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parentDiv,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.9], ["0%", "-50%"]);

  return (
<div ref={parentDiv} className={`text-3xl font-bold text-slate-300 ${playfair.className}`} id={id}>   
     <div className='sticky top-24 overflow-hidden'>
        <div className="flex gap-5 mb-8">
          <div className="text-3xl font-bold text-slate-300">Projects</div>
          <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
        </div>
        <motion.div style={{ x }} className='flex flex-wrap justify-between'>
          {projects.map((data) => (
            <Card key={data.name} props={data} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;