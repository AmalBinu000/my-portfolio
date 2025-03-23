"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <motion.span
        className="inline-block"
        whileInView={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.span>
    </motion.h2>
  );
}