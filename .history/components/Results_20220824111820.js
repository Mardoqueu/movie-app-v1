import React from 'react'

export default function Results({ results }) {
  return (
    <div className="bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {results.map((result)=>(
          <h1>{results}</h1>
        ))}
    </div>
  );
}
