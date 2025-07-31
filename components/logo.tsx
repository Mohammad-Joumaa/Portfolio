"use client"

import { motion } from "framer-motion"

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <motion.div
      className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-orange-500 shadow-lg"
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="text-white font-bold"
        style={{ fontSize: size * 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        MJ
      </motion.div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-primary/50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
