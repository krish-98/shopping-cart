import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import { removeFromCart } from "../features/cartSlice.js/cartSlice"

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  return (
    <div className="mt-4 max-w-[1200px] mx-auto">
      <h1 className="text-4xl font-semibold text-center">Shopping Cart</h1>
      {cartItems?.length === 0 ? (
        <div className="flex flex-col items-center mt-4 gap-4">
          <p className="text-xl">Your cart is Empty!</p>
          <Link
            className="bg-orange-300 fill-orange-300 font-semibold text-white py-2 px-6 rounded-lg hover:opacity-75  hover:scale-x-95 duration-300"
            to="/"
          >
            <AiOutlineArrowLeft className="h-6 w-10 inline" />
            <span>Back to Shopping</span>
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          <div className="grid grid-cols-[3fr_1fr_1fr_1fr] pb-2 border-b border-b-gray-400">
            <h3 className="font-semibold">PRODUCT</h3>
            <h3 className="font-semibold">PRICE</h3>
            <h3 className="font-semibold">QUANTITY</h3>
            <h3 className="font-semibold">TOTAL</h3>
          </div>
          {cartItems?.map((cart) => (
            <div key={cart.id} className="mt-8 grid gap-y-8 mx-6">
              <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center pb-2 border-b border-b-gray-400">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-36 object-contain"
                    src={cart.image.desktop}
                    alt={cart.name}
                  />
                  <div>
                    <h3 className="font-semibold">{cart.name}</h3>
                    <button onClick={() => handleRemoveFromCart(cart)}>
                      Remove
                    </button>
                  </div>
                </div>

                <p>${cart.price}</p>

                <div className="flex justify-between w-[50%]">
                  <button className="bg-gray-400 px-2">-</button>
                  <p>{cart.cartQuantity}</p>
                  <button className="bg-gray-400 px-2">+</button>
                </div>

                <p>{cart.price * cart.cartQuantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
