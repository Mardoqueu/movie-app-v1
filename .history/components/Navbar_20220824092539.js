import React from 'react'
import request from '../utils/request'

export default function Navbar() {
  return (
    <div>
        {Objects.entries(request).map(([key, {title, url}])=>(
          <h1>{key}</h1>
        ))}
    </div>
  )
}
