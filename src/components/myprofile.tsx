// components/ProfileImage.tsx
import Image from 'next/image';
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const ProfileImage = () => {

  useEffect(() => {
    anime({
      targets: '.border-animate',
      borderColor: ['#22c55e', '#ff00ff'],
      duration: 2000,
      easing: 'linear',
      loop: true,
      borderWidth: ['2px', '10px'],
    });
  }, []);

  return (
    <div className="relative w-full h-full max-w-md lg:max-w-lg">
      <Image
        src="/myself.jpg" 
        alt="Ishaan Saxena"
        layout="responsive" 
        width={400} 
        height={400} 
        className="border-4 border-[#22c55e] rounded-lg border-animate"
      />
      
    </div>
  );
};

export default ProfileImage;
