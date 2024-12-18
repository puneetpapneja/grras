import { createSlice } from '@reduxjs/toolkit'

export interface IReviews {
  name: string
  rating: number
  photo: string
  text: string
  time: string
}

const initialState = {
  reviews: [],
}

export const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    setReviews: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.reviews = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setReviews } = testimonialSlice.actions

export default testimonialSlice.reducer
