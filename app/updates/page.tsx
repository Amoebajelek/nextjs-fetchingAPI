import React from 'react'

import { SecondNavigations } from '../components/SecondNavigations'

export default async function page() {
  return (
    <main className="flex flex-col w-full gap-7 p-12 items-center mx-auto">
      <h1 className="text-2xl font-bold">Update Fatched Data</h1>
      <SecondNavigations />

    </main>
  )
}
