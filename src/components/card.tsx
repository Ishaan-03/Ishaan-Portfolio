'use client'

import Image from 'next/image';
import { data } from '@/app/types';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';
import { motion } from 'framer-motion';

export default function Card({ props }: { props: data }) {
    return (
        <motion.div 
            className="relative bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out max-w-sm w-[350px] h-[500px] flex flex-col flex-shrink-0 border-2 border-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative w-full h-[250px] overflow-hidden flex-shrink-0 rounded-lg bg-gradient-border">
                <Image src={props.image} alt={props.name} layout="fill" objectFit="contain" className="rounded-lg" />
                <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-b from-transparent to-[#1f1f1f]" />
            </div>
            <ScrollArea className="flex flex-col flex-grow overflow-hidden">
                <div className="p-4 flex flex-col flex-grow">
                    <motion.h3 className="text-neon-green text-lg font-semibold mb-1">{props.name}</motion.h3>
                    <motion.p className="text-gray-400 text-sm mb-3 flex-grow">{props.description}</motion.p>
                    <motion.div className="flex flex-wrap gap-1 mb-3">
                        {props.techStack.split(',').map((tech) => (
                            <motion.span key={tech} className="bg-[#333333] text-xs gap-10 text-white py-1 px-2 rounded-full">{tech}</motion.span>
                        ))}
                    </motion.div>
                </div>
                <motion.div className="flex justify-between p-4 border-t border-gray-700 bg-[#1f1f1f]">
                    {props.web && (
                        <Link href={props.web} passHref>
                            <motion.a className="bg-[#333333] hover:bg-[#444444] transition ease-in-out py-1.5 px-3 rounded-full cursor-pointer text-white flex items-center text-xs">
                                <Globe size={14} className="mr-1" /> Website
                            </motion.a>
                        </Link>
                    )}
                    {props.url && (
                        <Link href={props.url} passHref>
                            <motion.a className="bg-[#333333] hover:bg-[#444444] transition ease-in-out py-1.5 px-3 rounded-full cursor-pointer text-white flex items-center text-xs">
                                <Github size={14} className="mr-1" /> Source
                            </motion.a>
                        </Link>
                    )}
                </motion.div>
            </ScrollArea>
        </motion.div>
    );
}
