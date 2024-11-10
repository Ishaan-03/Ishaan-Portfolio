import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 sm:w-[80vw]" />

      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:w-[80vw] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="mb-4 sm:mb-0 w-full sm:flex sm:justify-between">
          <div className="flex justify-between w-full">
            {[
              { href: 'https://github.com/Ishaan-03', Icon: GithubIcon },
              { href: 'https://x.com/ishaanSaxena03?t=GXN9HYnnwfUkZ748t8OwLw&s=09', Icon: TwitterIcon },
              { href: 'https://www.linkedin.com/in/ishaan-saxena-b1989a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', Icon: LinkedinIcon },
              { href: 'mailto:saxenaishaan03@gmail.com', Icon: MailIcon, isMail: true },
            ].map(({ href, Icon, isMail }, index) => (
              isMail ? (
                <a key={index} href={href} className="w-full">
                  <motion.div
                    className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e] flex justify-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 0 15px rgba(34, 197, 94, 0.8)",
                    }}
                  >
                    <Icon size={36} />
                  </motion.div>
                </a>
              ) : (
                <Link key={index} href={href} className="w-full">
                  <motion.div
                    className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e] flex justify-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 0 15px rgba(34, 197, 94, 0.8)",
                    }}
                  >
                    <Icon size={36} />
                  </motion.div>
                </Link>
              )
            ))}
          </div>
        </div>

        <motion.div
          className="font-extrabold leading-none tracking-tight text-slate-200 text-center w-full mt-8 sm:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Thanks for visiting—let's stay connected!
        </motion.div>
      </motion.div>
    </>
  );
};

export default Footer;
