import React from 'react'
import request from '../utils/request'

export default function Navbar() {
  return (
    <div>
        {Object.entries(request).map(([key, {title, url}])=>(
          <h1>{title}</h1>
        ))}
    </div>
  )
}
