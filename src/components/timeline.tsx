import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Playfair_Display, Roboto } from 'next/font/google';
import { FileTextIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

interface TimelineProps {
  id?: string;
}

const Timeline: React.FC<TimelineProps> = ({ id }) => {
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="mt-32 sm:w-10/12 lg:w-full" 
      id={id}
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.div className='flex gap-5' variants={fadeInUp} transition={{ duration: 0.6 }}>
        <div className={`text-3xl font-bold text-slate-300 ${playfair.className}`}>About Me</div>
        <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
      </motion.div>
      
      <div className="lg:flex gap-60 mt-8">
        <motion.div className={`text-slate-400 lg:basis-1/2 leading-relaxed font-semibold ${roboto.className}`} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <motion.div className="mt-6" variants={fadeInUp} transition={{ duration: 0.6 }}>
            Hi, I&apos;m Ishaan Saxena, a passionate Full Stack Web Developer. My journey in web development has equipped me with experience in modern frameworks and cloud infrastructure, including Next.js, Node.js, AWS EC2, S3, and Docker. I specialize in backend development, always striving to create meaningful user engagement and enhance business performance through technology.
          </motion.div>

          <motion.div className="mt-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
            With a Bachelor&apos;s Degree in Computer Science and certifications in Full Stack Web Development, DevOps, and Deployment, I bring a comprehensive skill set to every project I undertake. I&apos;m constantly learning and adapting to new technologies to stay at the forefront of web development.
          </motion.div>

          <motion.div className="mt-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
            My projects, such as BuzzNest and Acme, showcase my ability to create secure, scalable applications with a focus on user experience and performance. I&apos;m particularly proud of optimizing media storage and delivery using Cloudinary and CDN for faster global access in BuzzNest.
          </motion.div>

          <motion.div className="mt-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
            I&apos;m currently focused on enhancing my skills in web technologies, particularly with JavaScript frameworks, to craft innovative solutions. Let&apos;s collaborate and build something extraordinary together.
          </motion.div>

          <motion.div className="mt-8 flex space-x-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Link href="https://github.com/Ishaan-03" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <GithubIcon size={24} className="text-slate-400 hover:text-green-400" />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/ishaan-saxena-b1989a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <LinkedinIcon size={24} className="text-slate-400 hover:text-green-400" />
              </motion.div>
            </Link>
            <Link href="https://drive.google.com/file/d/1L4Ekf3ghW_OvksLhbZFUtpSgI4CjynUR/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FileTextIcon size={24} className="text-slate-400 hover:text-green-400" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
          <div className='w-96 border-red-300 bottom-2 sm:mt-12 sm:ml-10 lg:mt-0'>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1t8LNK63l4d6asjT7LjQ32?utm_source=generator&theme=0&t=70"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;