import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"

import { useDispatch, useSelector } from "react-redux"
import { productsFetch } from "./features/productSlice/productSlice"

function App() {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch])

  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      {JSON.stringify(items)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  )
}

export default App
