import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  value: number
}

const initialState: State = {
  value: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, payload: PayloadAction<number>) => {
      state.value += payload.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: State) => state.value
export default counterSlice
