"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const query = () => {
    const { query } = useParams()
    console.log("query--", query)
  return (
    <div>{query}</div>
  )
}

export default query