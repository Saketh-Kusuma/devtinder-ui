import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeConnnections: () => null,
  },
});
export const { addConnections, removeConnnections } = connectionSlice.actions;
export default connectionSlice.reducer;
