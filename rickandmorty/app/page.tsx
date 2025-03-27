'use client'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { motion } from 'framer-motion'

const Page: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="relative items-center justify-center h-screen">

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
        <h1 className='text-xl sm:text-3xl font-bold'>WELCOME TO RICK AND MORTY WORLD</h1>
        <p className='mt-2 mb-2 sm:text-xl'>Start exploring this wonderful world.</p>
        <Link href={'/rick-and-morty'} className={buttonVariants({ variant: "outline" })}>Click here</Link>
      </div>
      <img className="w-full h-full object-cover opacity-50" src="https://i.imgur.com/ZECZSNd.png" />
    </motion.div>
  )
}

export default Page
