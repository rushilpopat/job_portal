import React from 'react'
import { Badge } from './ui/badge'

const LatestCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg '>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-black text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex gap-2 items-center mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>
        </div>

    </div>
  )
}

export default LatestCards
