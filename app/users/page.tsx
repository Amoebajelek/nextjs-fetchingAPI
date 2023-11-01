import React from 'react'

import { ShowDetailButton } from '../components/posts/ShowDetailButton'
import { SecondNavigations } from '../components/SecondNavigations'

interface IUsers {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    zipcode: string,
  }
}

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

export default async function page() {
  const res = await fetch(baseUrl)
  const users: IUsers[] = await res.json()

  return (
    <main className="flex flex-col w-full gap-7 p-12 items-center mx-auto">
      <h1 className="text-2xl font-bold">Users Data from Public API</h1>
      <SecondNavigations />

      <div className='flex flex-col md:grid lg:grid-cols-3 gap-4'>
        {
          users.map(user => {
            return (
              <div key={user.id} className="card w-96 bg-primary text-primary-content">
                <div className="card-body" key={user.id}>
                  <h2 className="card-title">{user.name}</h2>
                  <p>Username : {user.username}</p>
                  <p>Email : {user.email}</p>
                  <ShowDetailButton zipCode={user.address.zipcode} />
                </div>
              </div>
            )
          })
        }
      </div>

    </main>
  )
}
