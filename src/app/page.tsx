'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment } from '@react-three/drei'
import GreetingTicker from "@/components/greetingTicker"
import Projects from "@/components/Projects"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import ProfileImage from "../components/myprofile"
import { HomeIcon, Monitor, User, FileTextIcon, Contact,MailIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import { FloatingNavbar } from "@/components/ui/navbar"
import anime from 'animejs/lib/anime.es.js'
import LottieParrot from "../media/parrot"
import ContactPage from "@/components/contact"
import Footer from "@/components/footer"

const AnimatedBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <mesh ref={meshRef} scale={20} position={[0, 0, -30]}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <MeshDistortMaterial
        color="#4B0082"
        roughness={0.1}
        metalness={0.8}
        distort={0.2}
        speed={2}
      />
    </mesh>
  )
}

export default function Home() {
  const [greetStatus, setGreetStatus] = useState<boolean>(false)
  const { scrollYProgress } = useScroll()
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0])

  useEffect(() => {
    setTimeout(() => {
      setGreetStatus(true)
    }, 5500)
  }, [])

  useEffect(() => {
    if (greetStatus) {
      anime({
        targets: '.border-animate',
        borderColor: ['#22c55e', '#ff00ff'],
        duration: 2000,
        easing: 'linear',
        loop: true,
        borderWidth: ['2px', '10px'],
      })
    }
  }, [greetStatus])

  return (
    <>
      {!greetStatus && <GreetingTicker />}
      {greetStatus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen overflow-hidden"
        >
          <motion.div
            className="fixed inset-0 z-0"
            style={{ opacity: backgroundOpacity }}
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedBackground />
              <Environment preset="city" />
            </Canvas>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-10 px-4 sm:px-6 lg:px-24"
          >
            <nav className="relative flex justify-between border hover:border-green-400 rounded-3xl py-3 px-4 sm:px-9 sm:w-3/4 lg:w-3/4 font-bold transition ease-in-out duration-1000 sticky top-4 backdrop-blur-sm mx-auto z-20">
              <Link href="/">
                <motion.div
                  className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-4"
                  whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
                >
                  <HomeIcon size={30} />
                  <span className="text-lg font-semibold">Home</span>
                </motion.div>
              </Link>

              <ScrollLink
                activeClass="active"
                to="timeline"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <motion.div
                  className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-4"
                  whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
                >
                  <User size={30} />
                  <span className="text-lg font-semibold">About</span>
                </motion.div>
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <motion.div
                  className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-4"
                  whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
                >
                  <Monitor size={30} />
                  <span className="text-lg font-semibold">Projects</span>
                </motion.div>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <motion.div
                  className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-4"
                  whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
                >
                  <Contact size={30} />
                  <span className="text-lg font-semibold">contact</span>
                </motion.div>
              </ScrollLink>

              <div className="relative flex items-center">
                <Link href="https://drive.google.com/file/d/1cudqRi4ygJ7LUb7dklPuElJmbPmHrcso/view?usp=drivesdk">
                  <motion.div
                    className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-4"
                    whileHover={{ scale: 1.3, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
                  >
                    <FileTextIcon size={30} />
                    <span className="text-lg font-semibold">Resume</span>
                  </motion.div>
                </Link>
              </div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="relative flex flex-col items-center justify-center min-h-screen lg:flex-row gap-8 pt-5"
            >
              <div className="mt-12 lg:mt-24 w-full lg:w-1/2 text-center lg:text-left mx-auto">
                <motion.pre
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="text-green-500 font-bold mb-4 lg:text-5xl sm:text-2xl"
                >
                  <span className="block">Hello!</span>
                  <span className="block mt-2 text-lg sm:text-xl">
                  I&apos;m thrilled to introduce myself as
                  </span>

                </motion.pre>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-blue-400"
                >
                  Ishaan.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.3, duration: 0.8 }}
                  className="text-3xl sm:text-3xl lg:text-6xl font-extrabold leading-none tracking-tight text-blue-400 mt-2"
                >
                  Full Stack Web Developer.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.8 }}
                  className="mt-8 text-slate-400 lg:w-[calc((100svw-48px)/2)] pr-0 lg:pr-20 font-medium sm:w-10/12 text-center lg:text-left mx-auto"
                >
                  I&apos;m currently
                  <span className="text-green-500">{' '}pursuing a degree{' '}</span>
                  in CS major. Currently focused on web technologies and <span className="text-green-500">JS frameworks</span> to create dynamic and interactive web apps.
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <ProfileImage />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 3.5, duration: 1, type: "spring" }}
                className="absolute top-0 right-0 lg:top-[50%] lg:right-[45%] transform lg:translate-x-1/2 lg:-translate-y-1/2"
              >
                <LottieParrot />
              </motion.div>
            </motion.div>

            <Timeline id="timeline"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
            <ContactPage id="contact"/>
            <Footer/>
          </motion.div>
        </motion.div>
      )}

      <FloatingNavbar />
    </>
  )
}