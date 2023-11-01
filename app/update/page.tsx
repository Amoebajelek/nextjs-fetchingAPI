import React from 'react'
import Link from 'next/link'

import { IoIosArrowRoundBack } from 'react-icons/io'

export default async function page() {
  return (
    <main className="flex flex-col w-full gap-7 p-12 items-center mx-auto">
      <h1 className="text-2xl font-bold">Update Fatched Data</h1>
      <Link href='/' className='flex items-center gap-2'><IoIosArrowRoundBack size={24} />Back to Home</Link>

    </main>
  )
}
