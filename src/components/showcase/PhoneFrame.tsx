import React from 'react';
import { motion } from 'framer-motion';

interface PhoneFrameProps {
  imageSrc: string;
  alt: string;
  className?: string;
  isAnimating?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  imageSrc,
  alt,
  className = '',
  isAnimating = true,
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow effect behind phone */}
      {isAnimating && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-b from-primary/30 to-secondary/20 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Phone frame container */}
      <div className="relative mx-auto w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
        {/* Device bezel - outer frame */}
        <div
          className="relative rounded-[2.5rem] sm:rounded-[3rem] p-[3px] sm:p-1"
          style={{
            background: 'linear-gradient(145deg, #2a2a2e 0%, #1a1a1c 50%, #2a2a2e 100%)',
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.1),
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              0 0 80px -20px rgba(139, 92, 246, 0.3),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `,
          }}
        >
          {/* Inner bezel */}
          <div
            className="relative rounded-[2.3rem] sm:rounded-[2.7rem] bg-black p-[6px] sm:p-2"
          >
            {/* Dynamic Island */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20">
              <div 
                className="w-20 sm:w-24 h-6 sm:h-7 bg-black rounded-full flex items-center justify-center gap-2"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                {/* Camera lens */}
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#1a1a1c] relative">
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gray-700 to-gray-900" />
                  <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-gray-500/30" />
                </div>
              </div>
            </div>

            {/* Screen area */}
            <div 
              className="relative rounded-[2rem] sm:rounded-[2.3rem] overflow-hidden bg-black"
              style={{ aspectRatio: '9 / 19.5' }}
            >
              {/* Screenshot image */}
              <motion.img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Screen reflection overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Side buttons - left (volume + silent) */}
        <div className="absolute left-0 top-[80px] sm:top-[100px] w-[3px] h-6 sm:h-8 bg-[#2a2a2e] rounded-l-sm" />
        <div className="absolute left-0 top-[120px] sm:top-[145px] w-[3px] h-10 sm:h-12 bg-[#2a2a2e] rounded-l-sm" />
        <div className="absolute left-0 top-[170px] sm:top-[205px] w-[3px] h-10 sm:h-12 bg-[#2a2a2e] rounded-l-sm" />

        {/* Side button - right (power) */}
        <div className="absolute right-0 top-[130px] sm:top-[160px] w-[3px] h-14 sm:h-16 bg-[#2a2a2e] rounded-r-sm" />
      </div>
    </div>
  );
};

export default PhoneFrame;