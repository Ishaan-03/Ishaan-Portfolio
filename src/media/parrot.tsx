import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

const LottieParrot = () => {
  return (
    <motion.div
      className="absolute z-50 cursor-pointer"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.5}
      whileHover={{ scale: 1.1 }}
      style={{ width: 150, height: 150, top: '-20px', right: '-50px' }}  
    >
      <Player
        src="https://lottie.host/8b9f5d63-8a6a-443b-896d-74dcafa8f7bb/2S0nhcDN8J.json"
        background="transparent"
        speed={1}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
};

export default LottieParrot;