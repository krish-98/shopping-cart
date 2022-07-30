import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { productsFetch } from "../features/productSlice/productSlice"

const Home = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch])

  return (
    <div className="max-w-[1200px] mx-auto mt-6">
      <div className="px-4">
        <h1 className="text-4xl font-bold tracking-widest">New Arrivals</h1>
        {status === "pending" ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Something went wrong!</p>
        ) : (
          <div className="flex flex-wrap justify-between mt-4 cursor-pointer">
            {items?.map((item) => (
              <div
                key={item.id}
                className="w-64 h-96 max-w-full flex flex-col justify-between my-4 rounded-lg shadow-lg shadow-orange-300 px-4 py-4"
              >
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <img
                  className="hover:scale-105 duration-500"
                  src={item.image.desktop}
                  alt={item.slug}
                />
                <span className="block">Price ${item.price}</span>
                <button className="text-white font-medium bg-orange-300 py-2 px-6 rounded-lg hover:opacity-70 duration-300">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
