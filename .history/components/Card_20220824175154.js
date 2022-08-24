import React from 'react'

export default function Card({result}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
    <div>
        <Image
            src={result.backdrop_path}
        />
    </div>
  )
}
