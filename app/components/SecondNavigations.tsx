import React from 'react'
import Link from 'next/link'

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io'

export const SecondNavigations = () => {
  return (
    <div className="flex gap-4">
      <Link href='/' className='flex items-center gap-2 text-white'><IoIosArrowRoundBack size={24} />Back to Home</Link> |
      <Link href='/users' className='flex items-center gap-2'>Go to Users <IoIosArrowRoundForward size={24} /></Link>
      <Link href='/updates' className='flex items-center gap-2'>Go to Updates <IoIosArrowRoundForward size={24} /></Link>
      <Link href='/comments' className='flex items-center gap-2'>Go to Comments <IoIosArrowRoundForward size={24} /></Link>
    </div>
  )
}
