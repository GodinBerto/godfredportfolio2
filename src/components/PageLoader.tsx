"use client";

import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[#242c51]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
        <p className="text-sm tracking-wide text-yellow-500">Loading...</p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
