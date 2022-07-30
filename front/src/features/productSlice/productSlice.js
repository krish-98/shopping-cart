import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  status: null,
  error: null,
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
    [productsFetch.pending]: (state) => {
      state.status = "pending"
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success"
      state.items = action.payload
    },
    [productsFetch.rejected]: (state) => {
      state.status = "failed"
      state.error = "Error occurred"
    },
  },
})

export default productSlice.reducer
