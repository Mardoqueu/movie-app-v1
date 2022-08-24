import React from 'react'
import Card from '../components/Card';
import Header from "../components/Card";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Card key={result.id} result={result} />
        ))}
    </div>
  );
}