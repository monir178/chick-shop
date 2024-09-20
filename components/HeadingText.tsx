"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

interface HeadingTextProps {
  text: string;
  className?: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text, className = "" }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <p
        className={`text-heading4-bold md:text-heading3-bold lg:text-heading2-bold text-center  ${className}`}>
        {text}
      </p>
      <motion.span
        className="inline-block "
        animate={{ x: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
          stiffness: 300,
        }}>
        <ChevronsRight className="size-6 md:size-9 lg:size-12" />
      </motion.span>
    </div>
  );
};

export default HeadingText;
