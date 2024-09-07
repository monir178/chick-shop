"use client";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTooltip = ({ item }: { item: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg">
        <p className="text-white text-lg font-bold">{item}</p>
      </motion.div>
    </AnimatePresence>
  );
};
