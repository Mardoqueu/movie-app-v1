import React from 'react'
import request from '../utils/request'

export default function Navbar() {
  return (
    <div className="flex">
        {Object.entries(request).map(([key, {title, url}])=>(
          <h1 key={key}>{title}</h1>
        ))}
    </div>
  )
}
