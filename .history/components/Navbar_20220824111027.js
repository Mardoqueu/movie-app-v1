import React from 'react'
import {useRouter} from "next/router"
import request from '../utils/requests.js'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
        {Object.entries(request).map(([key, {title, url}])=>(
        <h2 onClick={()=>(router.push(`?genre=${key}`))} className="m-6 cursor-pointer hover:text-white active:text-red-400" key={key}>{title}</h2>
        ))}
    </div>
  )
}
