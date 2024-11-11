'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment } from '@react-three/drei'
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import anime from 'animejs/lib/anime.es.js'

// Components
import GreetingTicker from "@/components/greetingTicker"
import Projects from "@/components/Projects"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import ProfileImage from "@/components/myprofile"
import { FloatingNavbar } from "@/components/ui/navbar"
import LottieParrot from "@/media/parrot"
import ContactPage from "@/components/contact"
import Footer from "@/components/footer"

// Icons
import { HomeIcon, Monitor, User, FileTextIcon, Contact } from "lucide-react"

interface NavItemProps {
  to: string;
  icon: React.ComponentType<any>;
  text: string;
}

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

const NavItem = ({ to, icon: Icon, text }: NavItemProps) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
  >
    <motion.div
      className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-2 sm:p-4"
      whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
    >
      <Icon size={24} />
      <span className="text-sm sm:text-lg font-semibold hidden sm:inline">{text}</span>
    </motion.div>
  </ScrollLink>
)

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
            <nav className="relative flex justify-between items-center border hover:border-green-400 rounded-3xl py-2 px-2 sm:px-4 w-full sm:w-3/4 lg:w-3/4 font-bold transition ease-in-out duration-1000 sticky top-4 backdrop-blur-sm mx-auto z-20">
              <NavItem to="/" icon={HomeIcon} text="Home" />
              <NavItem to="timeline" icon={User} text="About" />
              <NavItem to="projects" icon={Monitor} text="Projects" />
              <NavItem to="contact" icon={Contact} text="Contact" />
              <Link  href="https://drive.google.com/file/d/1L4Ekf3ghW_OvksLhbZFUtpSgI4CjynUR/view?usp=drivesdk"  target="_blank">
                <motion.div
                  className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition ease-in-out duration-500 rounded-full bg-black p-2 sm:p-4"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(34, 255, 0, 0.8)" }}
                >
                  <FileTextIcon size={24} />
                  <span className="text-sm sm:text-lg font-semibold hidden sm:inline">Resume</span>
                </motion.div>
              </Link>
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
                  className="text-green-500 font-bold mb-4 text-xl sm:text-2xl lg:text-5xl"
                >
                  <span className="block">Hello!</span>
                  <span className="block mt-2 text-base sm:text-lg">
                    I&apos;m thrilled to introduce myself as
                  </span>
                </motion.pre>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-none tracking-tight text-blue-400"
                >
                  Ishaan.
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                    className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-none tracking-tight text-blue-400 mt-2"
                  >
                    Full Stack Web Developer
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.6, duration: 0.8 }}
                    className="w-24 h-24 lg:w-32 lg:h-32 ml-2"
                  >
                    
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.9, duration: 0.8 }}
                  className="mt-8 text-slate-400 w-full lg:w-[calc((100svw-48px)/2)] pr-0 lg:pr-20 font-medium text-sm sm:text-base text-center lg:text-left mx-auto"
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
                className="w-full sm:w-3/4 lg:w-1/2"
              >
               
                <ProfileImage />
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