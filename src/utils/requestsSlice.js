import { createSlice } from '@reduxjs/toolkit'
const requestSlice = createSlice({
  name: 'requests',
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
     return action.payload
    },
    removeRequest: (state, action) => {
    const newArray = state.filter(request => request._id !== action.payload.requestId)
    return newArray;
    }
  }
})
export const { addRequest, removeRequest } = requestSlice.actions
export default requestSlice.reducer