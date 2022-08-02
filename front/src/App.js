import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"

import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux"
import { getTotals } from "./features/cartSlice.js/cartSlice"
import { useEffect } from "react"

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getTotals())
  // }, [dispatch])

  return (
    <div>
      <Navbar />
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
