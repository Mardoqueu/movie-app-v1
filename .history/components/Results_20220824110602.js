import React from 'react'
import Card from "./Card";

export default function Results(results) {
  return (
    <div>
        {results.map((result) => (
          <h1>{result.title}</h1>
      ))}
    </div>
  )
}
