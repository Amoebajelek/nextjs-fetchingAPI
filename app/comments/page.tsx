import React from 'react'
import Link from 'next/link'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { ShowDetailButton } from '../components/posts/ShowDetailButton'

interface IComments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

const baseUrl = 'https://jsonplaceholder.typicode.com/comments'

export default async function page() {
  const res = await fetch(baseUrl)
  const comments: IComments[] = await res.json()

  return (
    <main className="flex flex-col w-full gap-7 p-12 items-center mx-auto">
      <h1 className="text-2xl font-bold">Comments Data from Public API</h1>
      <Link href='/' className='flex items-center gap-2'><IoIosArrowRoundBack size={24} />Back to Home</Link>

      <div className='flex flex-col md:grid lg:grid-cols-3 gap-4'>
        {
          comments.map(comment => {
            return (
              <div key={comment.id} className="card w-96 bg-primary text-primary-content">
                <div className="card-body" key={comment.id}>
                  <h2 className="card-title">{comment.name}</h2>
                  <p>Email : {comment.email}</p>
                  <p>Comment : {comment.body}</p>
                </div>
              </div>
            )
          })
        }
      </div>

    </main>
  )
}
