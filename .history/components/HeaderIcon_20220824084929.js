import React from 'react'

export default function HeaderIcon({Icon, title}) {
  return (
    <div>
        <Icon className="h-5"/>
        <p>{title}</p>
    </div>
  )
}
