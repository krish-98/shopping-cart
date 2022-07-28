import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  status: null,
}

export const productsFetch = createAsyncThunk(
  "product/productsFetch",
  async () => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()
    return data
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending"
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success"
      state.items = action.payload
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "failed"
    },
  },
})

export default productSlice.reducer

export const { singleProductFetch } = productSlice.actions
