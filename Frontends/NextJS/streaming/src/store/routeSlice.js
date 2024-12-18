import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prevRoute: null,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setPrevRoute(state, action) {
      state.prevRoute = action.payload;
    },
  },
});

export const { setPrevRoute } = routeSlice.actions;
export default routeSlice.reducer;
