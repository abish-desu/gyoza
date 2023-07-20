import React from 'react'
import Image from 'next/legacy/image'
const page = () => {
  return (

    <div className='relative h-screen'>
    <Image
    objectFit="cover"
    layout="fill"
    className='w-[100%] h-[100%] absoulte '
    alt='momo 2d'
    src="/bg.png"
    />  

    </div>
    )
}

export default page