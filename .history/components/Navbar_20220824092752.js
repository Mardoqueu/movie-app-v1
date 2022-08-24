import React from 'react'
import request from '../utils/request'

export default function Navbar() {
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
        {Object.entries(request).map(([key, {title, url}])=>(
          <h1 key={key}>{title}</h1>
        ))}
    </div>
  )
}
