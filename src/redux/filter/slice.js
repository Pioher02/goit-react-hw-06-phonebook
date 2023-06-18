const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
