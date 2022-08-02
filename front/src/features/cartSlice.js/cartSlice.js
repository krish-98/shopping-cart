import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity =
          state.cartItems[itemIndex].cartQuantity + 1
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          {
            position: "top-left",
          }
        )
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )

      state.cartItems = nextCartItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-left",
      })
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.info(`Decreased ${state.cartItems[itemIndex].name} quantity`, {
          position: "top-left",
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )

        state.cartItems = nextCartItems

        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        })

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
    },

    clearCart: (state, action) => {
      state.cartItems = []

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    getTotals: (state, action) => {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )

      state.cartTotalAmount = total
      state.cartTotalQuantity = quantity
    },

    // getTotal: (state, action) => {
    //   const { total, quantity } = state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       cartTotal.total =
    //         cartTotal.total + cartItem.price * cartItem.cartQuantity
    //       cartTotal.quantity = cartTotal.quantity + cartItem.cartQuantity

    //       return cartTotal
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   )

    //   state.cartTotalAmount = total
    //   state.cartTotalQuantity = quantity
    // },

    // increaseQuantity: (state, action) => {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   )

    //   if (state.cartItems[itemIndex].cartQuantity >= 1) {
    //     state.cartItems[itemIndex].cartQuantity =
    //       state.cartItems[itemIndex].cartQuantity + 1
    //   }

    //   toast.info(`Increased ${state.cartItems[itemIndex].name} quantity`, {
    //     position: "top-left",
    //   })
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    // },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  getTotals,
} = cartSlice.actions
export default cartSlice.reducer
