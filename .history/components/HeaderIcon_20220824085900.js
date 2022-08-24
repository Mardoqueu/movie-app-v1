import React from 'react'

export default function HeaderIcon({Icon, title}) {
  return (
    <div className='mx-4 '>
        <Icon className="h-8"/>
        <p>{title}</p>
    </div>
  )
}
