import React from 'react';
import { motion } from 'framer-motion';

const Kitty: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0], opacity: [1, 0.8, 1] }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
    >
      <iframe
        src="https://lottie.host/embed/3abffbef-d0a2-47b9-89eb-551cdca75379/EV979VtVLm.json"
        width="100%"
        height="100%"
        style={{ border: 'none', background: 'transparent' }}
        allowFullScreen
      />
    </motion.div>
  );
};

export default Kitty;
