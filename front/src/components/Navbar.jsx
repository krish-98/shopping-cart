import React from "react"
import { RiShoppingCart2Fill } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header className="bg-black text-white py-6 px-5">
      <nav className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-4xl text-orange-300">Binary Shop</h1>
          </Link>

          <div
            onClick={() => navigate("/cart")} // { replace: true } => prevent the user from going back to the page
            className="relative cursor-pointer"
          >
            <RiShoppingCart2Fill className="w-10 h-6" />
            <span className="absolute bottom-4 left-5 bg-orange-400 h-5 w-5 text-sm rounded-full text-center">
              4
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
