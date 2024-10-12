import React from 'react'
import { Link } from 'react-router-dom'

const notFound = () => {
  return (
    <div>
        <h1>Page Not Found</h1>
        <Link to={"/"}>Go Back to HomePage</Link>
    </div>
  )
}

export default notFound