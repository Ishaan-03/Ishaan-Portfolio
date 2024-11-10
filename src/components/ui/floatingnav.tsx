"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed bottom-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] p-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 10px rgba(34, 255, 0, 0.8)",
              transition: { duration: 0.2 },
            }}
            className={cn(
              "relative dark:text-neutral-50 items-center flex justify-center text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 w-12 h-12"
            )}
          >
            <ScrollLink
              to={navItem.link.replace("#", "")} // Remove hash for ScrollLink compatibility
              smooth={true}
              duration={500}
              className="block"
              activeClass="active"
            >
              {navItem.icon}
            </ScrollLink>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
