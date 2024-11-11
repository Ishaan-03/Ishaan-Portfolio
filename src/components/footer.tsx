'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://github.com/Ishaan-03', Icon: GithubIcon },
    { href: 'https://x.com/ishaanSaxena03?t=GXN9HYnnwfUkZ748t8OwLw&s=09', Icon: TwitterIcon },
    { href: 'https://www.linkedin.com/in/ishaan-saxena-b1989a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', Icon: LinkedinIcon },
    { href: 'mailto:saxenaishaan03@gmail.com', Icon: MailIcon, isMail: true },
  ];

  return (
    <footer className="relative z-10 mt-16 sm:mt-24 pb-8">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[90%] sm:w-[80%] mx-auto" />

      <motion.div
        className="flex flex-col items-center px-4 sm:px-0 max-w-[90%] sm:max-w-[80%] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8">
          {socialLinks.map(({ href, Icon, isMail }, index) => (
            React.createElement(isMail ? 'a' : Link, {
              key: index,
              href: href,
              className: "w-full flex justify-center",
              target: "_blank",
              rel: "noopener noreferrer"
            }, (
              <motion.div
                className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e] flex justify-center items-center w-16 h-16"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 15px rgba(34, 197, 94, 0.8)",
                }}
              >
                <Icon size={28} />
              </motion.div>
            ))
          ))}
        </div>

        <motion.div
          className="font-bold text-sm sm:text-base text-slate-200 text-center w-full mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Thanks for visiting—let&apos;s stay connected!
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;