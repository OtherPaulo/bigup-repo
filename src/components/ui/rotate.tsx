"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComponentRotate() {
  return (
      <div className="absolute top-[-1rem] lg:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-transparent flex items-center justify-center border-2 border-white">
      <div className="relative">
        {/* Rotating circle text image */}
        <motion.div
          className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
        src="/we-think-big.webp"
        alt="Explore More"
        width={160}
        height={160}
        className="w-full h-full"
          />
        </motion.div>

        {/* Middle static circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.8rem] h-[3.8rem] lg:h-20 lg:w-20 rounded-full bg-transparent flex items-center justify-center border-2 border-white">
          {/* Inner static circle with arrow */}
          <Link href="" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#CCFF00] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
        <ArrowUpRight className="w-6 h-6 text-black" />
          </Link>
        </div>
      </div>
      </div>
      
  )
}