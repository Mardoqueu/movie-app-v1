import React from 'react'

export default function Results(results) {
  return (
    <div>
              {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  )
}
