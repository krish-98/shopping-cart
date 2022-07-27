import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>No such page exist!</h1>
      <button className="bg-red-400 text-white px-8 py-3 rounded-full">
        <Link to="/">go Home</Link>
      </button>
    </div>
  )
}

export default NotFound
