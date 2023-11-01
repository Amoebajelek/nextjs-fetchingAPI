import Link from "next/link"

import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Home() {
  return (
    <main className="flex flex-col max-w-4xl gap-7 p-12 text-center items-center mx-auto">
      <h1 className="text-2xl font-bold">Learning Fetching Public API</h1>
      <Link href='/users' className='flex items-center gap-2'>Go to Users <IoIosArrowRoundForward size={24} /></Link>
      <Link href='/updates' className='flex items-center gap-2'>Go to Updates <IoIosArrowRoundForward size={24} /></Link>
      <Link href='/comments' className='flex items-center gap-2'>Go to Comments <IoIosArrowRoundForward size={24} /></Link>
    </main>
  )
}
