'use client'

import React from 'react'

interface ShowDetailButtonProps {
  zipCode : string,
}

export const ShowDetailButton: React.FC<ShowDetailButtonProps> = ({ zipCode }) => {
  const handleClick = () => alert(`zipCode : ${zipCode}`)
  return (
    <div className="card-actions justify-end">
      <button className="btn" onClick={handleClick}>Show Detail</button>
    </div>
  )
}
