import React from 'react'
import Link from 'next/link'

import { IoIosArrowRoundForward } from 'react-icons/io'

export const MainNavigations = () => {
  return (
    <div className="flex gap-4">
      <Link href='/users' className='flex items-center gap-2'>Go to Users <IoIosArrowRoundForward size={24} /></Link>
      <Link href='/updates' className='flex items-center gap-2'>Go to Updates <IoIosArrowRoundForward size={24} /></Link>
      <Link href='/comments' className='flex items-center gap-2'>Go to Comments <IoIosArrowRoundForward size={24} /></Link>
    </div>
  )
}
