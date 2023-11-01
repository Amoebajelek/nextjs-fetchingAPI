import Link from "next/link"

import { IoIosArrowRoundForward } from 'react-icons/io'
import { MainNavigations } from "./components/MainNavigations"

export default function Home() {
  return (
    <main className="flex flex-col max-w-4xl gap-7 p-12 text-center items-center mx-auto">
      <h1 className="text-2xl font-bold">Learning Fetching Public API</h1>
      <MainNavigations />
    </main>
  )
}
