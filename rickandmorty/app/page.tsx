import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"

const Page: React.FC = () => {
  return (
    <div className="relative items-center justify-center h-screen">
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
        <h1 className='text-xl sm:text-3xl font-bold'>WELCOME TO RICK AND MORTY WORLD</h1>
        <p className='mt-2 mb-2 sm:text-xl'>Start exploring this wonderful world.</p>
        <Link href={'/rick-and-morty'} className={buttonVariants({ variant: "outline" })}>Click here</Link>
      </div>
      <img className="w-full h-full object-cover opacity-50" src="https://i.imgur.com/ZECZSNd.png" />
    </div>
  )
}

export default Page
