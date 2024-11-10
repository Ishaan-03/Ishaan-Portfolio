import React from 'react';
import { motion } from 'framer-motion';

const Yogaman: React.FC = () => (
  <motion.div
    className="absolute z-50 cursor-pointer"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragElastic={0.5}
    whileHover={{ scale: 1.1 }}
    style={{ width: 500, height: 500 }}
  >
    <iframe
      src="https://lottie.host/embed/69990095-5c55-45a2-bfd9-ef9ccbf7bd24/SYiwla6brW.json"
      width="100%"
      height="100%"
      style={{ border: 'none', background: 'transparent' }}
      allowFullScreen
    ></iframe>
  </motion.div>
);

export default Yogaman;
