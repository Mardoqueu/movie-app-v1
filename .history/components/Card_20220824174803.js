import React from 'react'

export default function Card({result}) {
  return (
    <div>
         <Image
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
      />
    </div>
  )
}
