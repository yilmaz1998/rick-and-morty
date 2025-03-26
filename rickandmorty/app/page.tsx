import React from 'react'
import Image from 'next/image'

const Page: React.FC = () => {
  return (
    <div>
      <Image 
        src="/picture.jpg" 
        alt="Description of the image" 
        width={500} 
        height={300} 
      />
    </div>
  )
}

export default Page
