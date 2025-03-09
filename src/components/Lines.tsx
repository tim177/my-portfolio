import { motion } from "framer-motion";

export const Lines = () => {
  return (
    <>
      {/* Blur Lines */}
      <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-40 blur-[2px]" />
      {/* Glow Lines */}
      <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-40" />
      {/* Blur Circle */}
      <motion.div className="absolute right-1/2 translate-x-[1.5px]" />
      {/* Glow Circle */}
      <motion.div className="absolute right-1/2" />
    </>
  );
};
