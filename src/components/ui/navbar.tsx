"use client";
import React from "react";
import { FloatingNav } from "./floatingnav";
import { IconHome, IconMessage, IconUser, IconDeviceDesktop } from "@tabler/icons-react";
import { Link as ScrollLink } from "react-scroll";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/", // Target ID for Home
      icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "projects", // Target ID for Projects
      icon: <IconDeviceDesktop className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "timeline", // Target ID for About
      icon: <IconUser className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "contact", // Target ID for Contact
      icon: <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems.map((navItem) => ({
          ...navItem,
          link: navItem.link.startsWith("/") ? navItem.link : `#${navItem.link}`, 
        }))}
      />
    </div>
  );
}
